import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import customJs from '../../static/js/custom';
import * as shoppingListActions from '../../actions/shoppingListActions';
import Sidebar from "../common/Sidebar";
import Navigation from "../common/Navigation";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator'

class EditList extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        customJs();

        const id = this.props.match.params.id;
        this.props.actions.getSingleList(id);
    }

    onSubmit(values) {
        const id = this.props.match.params.id;

        this.props.actions.editList(id, values, () => {
            this.context.router.history.push('/dashboard');
        });
    }

    render() {
        const { handleSubmit, activeList } = this.props;

        return(
            <div>
                <Sidebar />
                <Navigation header={`Edit ${activeList.name}`} />

                <div className="content">
                    <div className="dashboard">
                        <div className="container wow fadeInRight">
                            <h4>Edit Shopping List</h4>
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <FormInput
                                    type="text"
                                    label="Name"
                                    name="name"
                                    required="required" />

                                <FormInput
                                    type="text"
                                    label="Description"
                                    name="description"
                                    required="required" />

                                <button type="submit" className="btn btn-large formBtn waves-effect waves-dark deep-purple">Edit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Pull in the React Router context so router is available on this.context.router.
EditList.contextTypes = {
    router: PropTypes.object
};

EditList.propTypes = {
    activeList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        activeList: state.shoppingLists.activeList,
        loading: state.shoppingLists.loading,
        initialValues: {
            'name': state.shoppingLists.activeList.name,
            'description': state.shoppingLists.activeList.description
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(shoppingListActions, dispatch)
    };
}

export default reduxForm({
    validate,
    form: 'EditListForm'
})(connect(mapStateToProps, mapDispatchToProps)(EditList));
