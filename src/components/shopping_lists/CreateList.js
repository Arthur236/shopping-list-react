import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Button, Header, Form, Grid} from 'semantic-ui-react';
import Notifications from 'react-notify-toast';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createList} from "../../actions/shoppingListActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator';

export class CreateList extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.createList(values, () => {
            this.props.history.push('/dashboard');
        });
    }

    render() {
        const {handleSubmit, loading} = this.props;

        let button = '';

        if (loading) {
            button = <Button type="submit" disabled loading color="purple" className="fluid">Create</Button>;
        } else {
            button = <Button type="submit" color="purple" className="fluid">Create</Button>;
        }

        return (
            <div className="content">
                <Notifications/>

                <Container className="ui center aligned">
                    <Header as="h1" content="Create Shopping List"/>

                    <Grid centered columns="2">
                        <Grid.Column>
                            <Form onSubmit={handleSubmit(this.onSubmit)}>
                                <FormInput
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    required="required"
                                    icon="tag"/>

                                <FormInput
                                    type="text"
                                    placeholder="Description"
                                    name="description"
                                    icon="align left"/>

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
CreateList.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
    createList: PropTypes.func
};

// Map store state to component props
export function mapStateToProps(state) {
    return {
        loading: state.shoppingLists.loading
    };
}

export default reduxForm({
    validate,
    form: 'CreateListForm'
})(connect(mapStateToProps, {createList})(CreateList));
