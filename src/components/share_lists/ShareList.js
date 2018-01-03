import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {shareList} from '../../actions/shareActions';
import {getFriends} from '../../actions/friendActions';
import PreLoader from '../common/PreLoader';
import FriendList from './FriendList';

export class ShareList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 10
        };

        this.shareList = this.shareList.bind(this);
    }

    componentWillMount() {
        this.props.getFriends(this.state.activePage, this.state.limit);
    }

    shareList(e) {
        const list_id = this.props.match.params.id;

        e.preventDefault();

        let fields = {};
        fields['list_id'] = list_id;
        fields[e.target.friend_id.name] = e.target.friend_id.value;

        this.props.shareList(fields);
    }

    render() {
        const {match, friends, loading} = this.props;
        const list_id = match.params.id;

        if (!friends || loading) {
            return (
                <PreLoader/>
            );
        }

        let friendList = '';
        if (_.isEmpty(friends.friends.friends)) {
            friendList = <p>You currently have no friends</p>;
        } else {
            friendList = <FriendList list_id={list_id} friends={friends} shareList={this.shareList}/>;
        }

        return (
            <div className="content">
                <Container>
                    <Segment basic>
                        <h1>Select Friends To Share With</h1>

                        {friendList}
                    </Segment>
                </Container>
            </div>
        );
    }
}

// Define prop types
ShareList.propTypes = {
    friends: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    getFriends: PropTypes.func,
    shareList: PropTypes.func
};

// Map store state to component props
export function mapStateToProps(state) {
    return {
        friends: state.friends,
        loading: state.friends.loading
    };
}

export default connect(mapStateToProps, {getFriends, shareList})(ShareList);