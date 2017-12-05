import React, { Component } from 'react';
import Notifications from 'react-notify-toast';
import { Container, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { searchUser } from "../../actions/friendActions";
import Search from "../common/Search";
import Navigation from '../common/Navigation';

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
        console.log(">>>> ", username);
        _.delay(() => this.searchUserOnChange(username), 1000);
    }

    render() {
        console.log("<<<<< ", this.state);

        return(
            <div className="content">
                <Notifications />

                <Container>
                    <Navigation />

                    <Segment basic>
                        <Search onInputChange={this.onInputChange} />
                    </Segment>
                </Container>
                ADD FRIEND
            </div>
        );
    }
}

AddFriend.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return { friends: state.friends, loading: state.friends.loading };
}

export default connect(mapStateToProps, { searchUser })(AddFriend);
