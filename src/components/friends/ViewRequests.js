import React, {Component} from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getFriendRequests, acceptRequest } from "../../actions/friendActions";
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

        this.acceptFriend = this.acceptFriend.bind(this);
    }

    componentWillMount() {
        this.props.getFriendRequests(this.state.activePage, this.state.limit);
    }

    acceptFriend(id) {
        this.props.acceptRequest(id, () => {
            this.props.history.push('/friends');
        });
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
                <Container>
                    <Navigation />

                    <Segment basic>
                        <RequestList requests={friendRequests} acceptFriend={this.acceptFriend}/>
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

export default connect(mapStateToProps, { getFriendRequests, acceptRequest })(ViewRequests);
