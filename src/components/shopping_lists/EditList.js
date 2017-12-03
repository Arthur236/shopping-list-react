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
import validate from '../../utils/formValidator';
import Loader from '../common/PreLoader';

class EditList extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        customJs();

        const id = this.props.match.params.id;
        this.props.actions.getSingleList(id);
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

        this.props.actions.editList(id, values, () => {
            this.context.router.history.push('/dashboard');
        });
    }

    render() {
        const { handleSubmit, activeList, loading } = this.props;

        let button = '';

        if (loading) {
            button = <div className="center-align"><Loader size="small"/></div>;
        } else {
            button = <button type="submit" className="btn btn-large formBtn waves-effect waves-dark deep-purple">Edit</button>;
        }

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
                                    name="description" />

                                <div className="input-field col s12">
                                    { button }
                                </div>
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
        initialValues: state.shoppingLists.activeList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(shoppingListActions, dispatch)
    };
}

export default reduxForm({
    validate,
    form: 'EditListForm',
    enableReinitialize : true
})(connect(mapStateToProps, mapDispatchToProps)(EditList));
