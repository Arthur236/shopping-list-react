import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from 'react-notify-toast';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { deleteList } from '../../actions/shoppingListActions';

class DeleteList extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        const { shoppingList } = this.props;

        this.props.deleteList(shoppingList.id, () => {
            return <Redirect to='/dashboard' />;
        });
    }

    render() {
        const { shoppingList } = this.props;

        return(
            <Modal trigger={<a className="right floated"><Icon name='trash' className="red"/>Delete</a>} basic size='small'>
                <Header content={`Delete ${ shoppingList.name }`} />

                <Modal.Content>
                    <p>Are you sure you want to delete this shopping list?</p>
                </Modal.Content>

                <Modal.Actions>
                    <Button type='submit' basic color='blue' inverted>
                        <Icon name='remove' /> No
                    </Button>
                    <form onSubmit={this.onSubmit}>
                        <Button color='red' inverted className='right floated'>
                            <Icon name='checkmark' /> Yes
                        </Button>
                    </form>
                </Modal.Actions>
            </Modal>
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
