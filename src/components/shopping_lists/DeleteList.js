import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { deleteList } from '../../actions/shoppingListActions';

class DeleteList extends Component {
    constructor(props, context) {
        super(props, context);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { shoppingList } = this.props;

        this.props.deleteList(shoppingList.id, () => {
            this.context.router.history.push('/dashboard');
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
                    <Button color='red' inverted className='right floated' onClick={this.onClick}>
                        <Icon name='checkmark' /> Yes
                    </Button>
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
