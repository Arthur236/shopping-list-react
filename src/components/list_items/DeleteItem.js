import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions/listItemActions';

class DeleteItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { shoppingList, item } = this.props;

        this.props.deleteItem(shoppingList, item.id, () => {
            this.context.router.history.push('/shopping_lists/'+ shoppingList +'/items');
        });
    }

    render() {
        const { item } = this.props;

        return(
            <Modal trigger={<a className="right floated"><Icon name='trash' className="red"/></a>} basic size='small'>
                <Header content={`Delete ${ item.name }`} />

                <Modal.Content>
                    <p>Are you sure you want to delete this item list?</p>
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
DeleteItem.contextTypes = {
    router: PropTypes.object
};

DeleteItem.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default connect(null, { deleteItem })(DeleteItem);
