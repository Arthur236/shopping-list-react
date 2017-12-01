import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import customJs from '../../static/js/custom';
import { deleteList } from '../../actions/shoppingListActions';

class DeleteList extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        customJs();
    }

    onSubmit() {
        const { shoppingList } = this.props;

        this.props.deleteList(shoppingList.id, () => {
            this.context.router.history.push('/dashboard');
        });
    }

    render() {
        const { shoppingList } = this.props;

        return(
            <div id={`md_delete_${ shoppingList.id }`} className="modal">
                <div className="modal-content">
                    <h4>Delete { shoppingList.name }</h4>
                    <p>Are you sure you want to delete this shopping list?</p>
                </div>
                <div className="modal-footer">
                    <form className="left" onSubmit={this.onSubmit}>
                        <button className="modal-action modal-close waves-effect waves-green btn-flat"  type="submit" name="add">
                            Delete
                        </button>
                    </form>
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
            </div>
        );
    }
}

// Pull in the React Router context so router is available on this.context.router.
DeleteList.contextTypes = {
    router: PropTypes.object
};

DeleteList.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default connect(null, { deleteList })(DeleteList);
