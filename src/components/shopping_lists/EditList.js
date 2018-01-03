import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Header, Form, Grid } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {getSingleList, editList} from '../../actions/shoppingListActions';
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator';

export class EditList extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.getSingleList(id);
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
        const id = this.props.match.params.id;

        this.props.editList(id, values, () => {
            this.context.router.history.push('/dashboard');
        });
    }

    render() {
        const { handleSubmit, loading } = this.props;

        let button = '';

        if (loading) {
            button = <Button type="submit" disabled loading color="purple" className="fluid">Edit</Button>;
        } else {
            button = <Button type="submit" color="purple" className="fluid">Edit</Button>;
        }

        return(
            <div className="content">
                <Container className="ui center aligned">
                    <Header as="h1" content="Edit Shopping List" />

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
EditList.contextTypes = {
    router: PropTypes.object
};

// Define prop types
EditList.propTypes = {
    activeList: PropTypes.object.isRequired,
    getSingleList: PropTypes.func,
    editList: PropTypes.func,
    match: PropTypes.object.isRequired,
    change: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

// Map store state to component props
export function mapStateToProps(state) {
    return {
        activeList: state.shoppingLists.activeList,
        loading: state.shoppingLists.loading,
        initialValues: state.shoppingLists.activeList
    };
}

export default reduxForm({
    validate,
    form: 'EditListForm',
    enableReinitialize : true
})(connect(mapStateToProps, {getSingleList, editList})(EditList));
