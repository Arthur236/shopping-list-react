import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { searchUser } from "../../actions/userActions";
import { sendRequest } from "../../actions/friendActions";
import Search from "../common/Search";
import Navigation from '../common/Navigation';
import UserList from "./UserList";

class AddFriend extends Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.searchUserOnChange = this.searchUserOnChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    searchUserOnChange(username) {
        this.props.searchUser(username)
    }

    onInputChange(event) {
        let username = event.target.value;

        this.setState({username});
        _.delay(() => this.searchUserOnChange(username), 1000);
    }

    handleAdd(e) {
        e.preventDefault();

        let field = {};
        field[e.target.friend_id.name] = e.target.friend_id.value;

        this.props.sendRequest(field);
    }

    render() {
        const { users } = this.props;
        let userList = '';

        if (!users) {
            userList = <div>Search for a user above</div>
        } else {
            userList = <UserList users={users} handleAdd={this.handleAdd}/>
        }

        return(
            <div className="content">
                <Container>
                    <Navigation />

                    <Segment basic>
                        <h1>Send Friend Requests</h1>
                        <Search onInputChange={this.onInputChange} />
                    </Segment>

                    { userList }
                </Container>
            </div>
        );
    }
}

AddFriend.propTypes = {
    users: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return { users: state.users, loading: state.users.loading };
}

export default connect(mapStateToProps, { searchUser, sendRequest })(AddFriend);
