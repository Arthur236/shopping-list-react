import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Button, Header, Form, Grid} from 'semantic-ui-react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {getSingleItem, editItem} from "../../actions/listItemActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator';

export class EditItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        const item_id = this.props.match.params.item_id;

        this.props.getSingleItem(id, item_id);
    }

    componentWillReceiveProps(nextProps) {
        const {change, initialValues} = this.props;
        const values = nextProps.initialValues;

        if (initialValues !== values) {
            for (let key in values) {
                if (values.hasOwnProperty(key)) {
                    change(key, values[key]);
                }
            }
        }
    }

    onSubmit(values) {
        const id = this.props.match.params.id;
        const item_id = this.props.match.params.item_id;

        this.props.editItem(id, item_id, values, () => {
            this.context.router.history.push('/shopping_lists/' + id + '/items');
        });
    }

    render() {
        const {handleSubmit, loading} = this.props;

        let button = '';

        if (loading) {
            button = <Button type="submit" disabled loading color="purple" className="fluid">Edit</Button>;
        } else {
            button = <Button type="submit" color="purple" className="fluid">Edit</Button>;
        }

        return (
            <div className="content">
                <Container className="ui center aligned">
                    <Header as="h1" content="Edit List Item"/>

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

                                {button}
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

// Pull in the React Router context so router is available on this.context.router.
EditItem.contextTypes = {
    router: PropTypes.object
};

// Define prop types
EditItem.propTypes = {
    activeItem: PropTypes.object.isRequired,
    getSingleItem: PropTypes.func,
    editItem: PropTypes.func,
    match: PropTypes.object,
    change: PropTypes.func,
    initialValues: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func,
    loading: PropTypes.bool.isRequired
};

// Map store state to component props
export function mapStateToProps(state) {
    return {
        activeItem: state.listItems.activeItem,
        loading: state.listItems.loading,
        initialValues: state.listItems.activeItem
    };
}

export default reduxForm({
    validate,
    form: 'EditItemForm',
    enableReinitialize: true
})(connect(mapStateToProps, {getSingleItem, editItem})(EditItem));
