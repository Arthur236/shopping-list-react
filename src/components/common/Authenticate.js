import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showToast } from "../../utils/helpers";

export default function (ComposedComponent) {

    class Authenticate extends Component {
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

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    Authenticate.propTypes = {
        loggedIn: PropTypes.bool.isRequired,
        history: PropTypes.object.isRequired
    };

    function mapStateToProps(state) {
        return {
            loggedIn: state.auth.loggedIn
        };
    }

    return connect(mapStateToProps)(Authenticate);
}
