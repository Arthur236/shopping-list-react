import React, {Component} from 'react';
import Notifications from 'react-notify-toast';
import { Container, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getFriendRequests } from "../../actions/friendActions";
import Navigation from "../common/Navigation";
import PreLoader from '../common/PreLoader';
import RequestList from './RequestList';

class ViewRequests extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 10,
            total_friends: null
        };
    }

    componentWillMount() {
        this.props.getFriendRequests(this.state.activePage, this.state.limit);
    }

    acceptFriend() {

    }

    render() {
        const { friendRequests, loading } = this.props;

        if (!friendRequests || loading) {
            return(
                <PreLoader />
            );
        }

        return(
            <div className="content">
                <Notifications />

                <Container>
                    <Navigation />

                    <Segment basic>
                        <RequestList requests={friendRequests}/>
                    </Segment>
                </Container>
            </div>
        );
    }
}

ViewRequests.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return { friendRequests: state.friends.friendRequests, loading: state.friends.loading };
}

export default connect(mapStateToProps, { getFriendRequests })(ViewRequests);
