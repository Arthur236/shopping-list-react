import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {getFriendRequests, acceptRequest} from '../../actions/friendActions';
import Navigation from "../common/Navigation";
import PreLoader from '../common/PreLoader';
import RequestList from './RequestList';

export class ViewRequests extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 10
        };

        this.acceptFriend = this.acceptFriend.bind(this);
    }

    componentWillMount() {
        this.props.getFriendRequests(this.state.activePage, this.state.limit);
    }

    acceptFriend(id) {
        this.props.acceptRequest(id, () => {
            this.props.getFriendRequests(this.state.activePage, this.state.limit);
        });
    }

    render() {
        const {friendRequests, loading} = this.props;

        if (!friendRequests || loading) {
            return (
                <PreLoader/>
            );
        }

        let requestList = '';
        if (_.isEmpty(friendRequests)) {
            requestList = <p>You currently have no friend requests</p>;
        } else {
            requestList = <RequestList requests={friendRequests} acceptFriend={this.acceptFriend}/>;
        }

        return (
            <div className="content">
                <Container>
                    <Navigation/>

                    <Segment basic>
                        <h1>Your Friend Requests</h1>
                        {requestList}
                    </Segment>
                </Container>
            </div>
        );
    }
}

// Define prop types
ViewRequests.propTypes = {
    friendRequests: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getFriendRequests: PropTypes.func,
    acceptRequest: PropTypes.func
};

// Map store state to component props
export function mapStateToProps(state) {
    return {
        friendRequests: state.friends.friendRequests,
        loading: state.friends.loading
    };
}

export default connect(mapStateToProps, {getFriendRequests, acceptRequest})(ViewRequests);
