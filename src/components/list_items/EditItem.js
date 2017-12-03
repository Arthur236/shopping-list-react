import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listItemActions from "../../actions/listItemActions";
import customJs from '../../static/js/custom';
import Sidebar from "../common/Sidebar";
import Navigation from "../common/Navigation";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator';
import Loader from '../common/PreLoader';

class EditItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        customJs();

        const id = this.props.match.params.id;
        const item_id = this.props.match.params.item_id;

        this.props.actions.getSingleItem(id, item_id);
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

        this.props.actions.editItem(id, item_id, values, () => {
            this.context.router.history.push('/shopping_lists/' + id + '/items');
        });
    }

    render() {
        const {handleSubmit, activeItem, loading} = this.props;

        let button = '';

        if (loading) {
            button = <div className="center-align"><Loader size="small"/></div>;
        } else {
            button = <button type="submit" className="btn btn-large formBtn waves-effect waves-dark deep-purple">Edit</button>;
        }

        return (
            <div>
                <Sidebar/>
                <Navigation header={`Edit ${activeItem.name}`}/>

                <div className="content">
                    <div className="dashboard">
                        <div className="container wow fadeInRight">
                            <h4>Edit Item</h4>
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <FormInput
                                    type="text"
                                    label="Name"
                                    name="name"
                                    required="required"/>

                                <FormInput
                                    type="number"
                                    label="Quantity"
                                    name="quantity"
                                    required="required"/>

                                <FormInput
                                    type="number"
                                    label="Unit Price"
                                    name="unit_price"
                                    required="required"/>

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
EditItem.contextTypes = {
    router: PropTypes.object
};

EditItem.propTypes = {
    activeItem: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        activeItem: state.listItems.activeItem,
        loading: state.listItems.loading,
        initialValues: state.listItems.activeItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(listItemActions, dispatch)
    };
}

export default reduxForm({
    validate,
    form: 'EditItemForm',
    enableReinitialize : true
})(connect(mapStateToProps, mapDispatchToProps)(EditItem));
