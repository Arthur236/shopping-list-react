import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Header, Form, Grid } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from "../common/Navigation";
import * as itemActions from "../../actions/listItemActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator';

export class CreateItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        const id = this.props.match.params.id;

        this.props.actions.createItem(id, values, () => {
            this.context.router.history.push('/shopping_lists/'+ id +'/items');
        });
    }

    render() {
        const { handleSubmit, loading } = this.props;

        let button = '';

        if (loading) {
            button = <Button type="submit" disabled loading color="purple" className="fluid">Create</Button>;
        } else {
            button = <Button type="submit" color="purple" className="fluid">Create</Button>;
        }

        return(
            <div className="content">
                <Container className="ui center aligned">
                    <Navigation header="Add List Item"/>

                    <Header as="h1" content="Add List Item" />

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
                                    type="number"
                                    placeholder="Quantity"
                                    name="quantity"
                                    required="required"
                                    icon="ordered list"/>

                                <FormInput
                                    type="number"
                                    placeholder="Unit Price"
                                    name="unit_price"
                                    required="required"
                                    icon="money"/>

                                { button }
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

// Pull in the React Router context so router is available on this.context.router.
CreateItem.contextTypes = {
    router: PropTypes.object
};

CreateItem.propTypes = {
    match: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return { loading: state.listItems.loading };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(itemActions, dispatch)
    };
}

export default reduxForm({
    validate,
    form: 'CreateItemForm'
})(connect(mapStateToProps, mapDispatchToProps)(CreateItem));
