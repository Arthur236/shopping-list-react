import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as friendActions from '../../actions/friendActions';
import Navigation from "../common/Navigation";
import PreLoader from '../common/PreLoader';
import FriendList from './FriendList';

class Friends extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 20,
            total_friends: null
        };

        this.removeFriend = this.removeFriend.bind(this);
    }

    componentWillMount() {
        this.props.actions.getFriends(this.state.activePage, this.state.limit);
    }

    removeFriend(id) {
        this.props.actions.removeFriend(id, () => {
            this.props.actions.getFriends(this.state.activePage, this.state.limit);
        });
    }

    render() {
        const { friends, loading } = this.props;

        if (!friends || loading) {
            return(
                <PreLoader />
            );
        }

        return(
            <div className="content">
                <Container>
                    <Navigation />

                    <Segment basic>
                        <Link to="/friends/add" className="ui button purple fluid">Add Friend</Link>
                    </Segment>

                    <Segment basic>
                        <FriendList friends={friends} removeFriend={this.removeFriend}/>
                    </Segment>
                </Container>
            </div>
        );
    }
}

Friends.propTypes = {
    friends: PropTypes.object.isRequired,
    getFriends: PropTypes.func.isRequired,
    removeFriend: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return { friends: state.friends, loading: state.friends.loading };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(friendActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
