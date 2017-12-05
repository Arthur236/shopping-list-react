import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Notifications from 'react-notify-toast';
import { Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFriends } from "../../actions/friendActions";
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
    }

    componentWillMount() {
        this.props.getFriends(this.state.activePage, this.state.limit);
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
                <Notifications />

                <Container>
                    <Navigation />

                    <Segment basic>
                        <Link to="/friends/add" className="ui button purple fluid">Add Friend</Link>
                    </Segment>

                    <FriendList friends={friends}/>
                </Container>
            </div>
        );
    }
}

Friends.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return { friends: state.friends, loading: state.friends.loading };
}

export default connect(mapStateToProps, { getFriends })(Friends);
