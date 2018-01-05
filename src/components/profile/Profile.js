import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Card, Image, Button, Header, Form, Grid} from 'semantic-ui-react';
import Notifications from 'react-notify-toast';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import jwt from 'jsonwebtoken';
import {getProfile, updateProfile} from "../../actions/userActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator';

export class Profile extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        let id = null;

        if (localStorage.token) {
            id = jwt.decode(localStorage.getItem("token")).id;
            this.props.getProfile(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { change, initialValues } = this.props;
        const values = nextProps.initialValues;

        if(initialValues !== values){
            for (let key in values) {
                if (values.hasOwnProperty(key)) {
                    change(key,values[key]);
                }
            }
        }
    }

    onSubmit(values) {
        let id = null;

        if (localStorage.token) {
            id = jwt.decode(localStorage.getItem("token")).id;
            this.props.updateProfile(id, values)
                .then(() => {
                    this.props.getProfile(id);
                });
        }
    }

    render() {
        const {handleSubmit, loading, activeUser} = this.props;

        let button = '';

        if (loading) {
            button = <Button type="submit" disabled loading color="purple">Update Details</Button>;
        } else {
            button = <Button type="submit" color="purple">Update Details</Button>;
        }

        return (
            <div className="content">
                <Notifications/>

                <Container className="ui center aligned">
                    <Header as="h1" content="Your Profile"/>

                    <Grid centered columns="2">
                        <Grid.Column>
                            <Card>
                                <Image src={process.env.PUBLIC_URL + '/img/avatar.png'} />
                                <Card.Content>
                                    <Card.Header>Username: {activeUser.username}</Card.Header>
                                    <Card.Meta>Joined on: {activeUser.date_created}</Card.Meta>
                                    <Card.Description>Email: {activeUser.email}</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <p>Last Profile Update: {activeUser.date_modified}</p>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column>
                            <Form onSubmit={handleSubmit(this.onSubmit)}>
                                <FormInput
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    required="required"
                                    icon="user"/>

                                <FormInput
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    required="required"
                                    icon="mail"/>

                                <FormInput
                                    type="password"
                                    placeholder="******"
                                    name="password"
                                    required="required"
                                    icon="key"/>

                                {button}
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

// Define prop types
Profile.propTypes = {
    activeUser: PropTypes.object.isRequired,
    getProfile: PropTypes.func,
    updateProfile: PropTypes.func,
    match: PropTypes.object.isRequired,
    change: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

// Map store state to component props
export function mapStateToProps(state) {
    return {
        activeUser: state.users.activeUser,
        loading: state.users.loading,
        initialValues: state.users.activeUser
    };
}

export default reduxForm({
    validate,
    form: 'ProfileForm',
    enableReinitialize : true
})(connect(mapStateToProps, {getProfile, updateProfile})(Profile));
