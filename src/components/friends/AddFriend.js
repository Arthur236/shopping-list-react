import React, { Component } from 'react';
import Notifications from 'react-notify-toast';
import { Container, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { searchUser } from "../../actions/userActions";
import Search from "../common/Search";
import Navigation from '../common/Navigation';
import FriendList from "./FriendList";

class AddFriend extends Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.searchUserOnChange = this.searchUserOnChange.bind(this);
    }

    searchUserOnChange(username) {
        this.props.searchUser(username)
    }

    onInputChange(event) {
        let username = event.target.value;

        this.setState({username});
        _.delay(() => this.searchUserOnChange(username), 1000);
    }

    render() {
        const { users } = this.props;
        let friendList = '';

        if (!users) {
            friendList = <div>Search for a user above</div>
        } else {
            friendList = <FriendList users={users}/>
        }

        return(
            <div className="content">
                <Notifications />

                <Container>
                    <Navigation />

                    <Segment basic>
                        <Search onInputChange={this.onInputChange} />
                    </Segment>

                    { friendList }
                </Container>
            </div>
        );
    }
}

AddFriend.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return { users: state.users, loading: state.users.loading };
}

export default connect(mapStateToProps, { searchUser })(AddFriend);
