import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Navigation from "./Navigation";
import {showToast} from "../../utils/helpers";
import {logout} from "../../actions/authActions";

export default function (ComposedComponent) {

    class Authenticate extends Component {
        constructor(props) {
            super(props);

            this.logout = this.logout.bind(this);
        }

        componentDidMount() {
            if (!this.props.loggedIn) {
                showToast('error', 'You need to be logged in to access that page');
                this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.loggedIn) {
                showToast('success', 'You were logged out. Please log in again to access that page');
                this.props.history.push('/login');
            }
        }

        logout(e) {
            // Log out a user
            e.preventDefault();
            this.props.logout();
        }

        render() {
            return (
                <div>
                    <Navigation logout={this.logout} />
                    <ComposedComponent {...this.props} />
                </div>
            );
        }
    }

    // Define prop types
    Authenticate.propTypes = {
        loggedIn: PropTypes.bool.isRequired,
        history: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    // Map store state to component props
    function mapStateToProps(state) {
        return {
            loggedIn: state.auth.loggedIn
        };
    }

    return connect(mapStateToProps, {logout})(Authenticate);
}
