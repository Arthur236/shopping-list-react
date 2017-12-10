import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import { removeSharedList } from "../../actions/shareActions";

class DeleteSharedList extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let id = jwt.decode(localStorage.getItem('token')).id;
        let user_id = { 'friend_id': id };

        const { sharedList } = this.props;

        this.props.removeSharedList(user_id, sharedList.id, () => {
            this.props.history.push('/dashboard');
        });
    }

    render() {
        const { sharedList } = this.props;

        return(
            <Modal trigger={<Button color='red' fluid>Remove</Button>} basic size='small'>
                <Header content={`Remove ${ sharedList.name }`} />

                <Modal.Content>
                    <p>Are you sure you want to remove this shared shopping list?</p>
                </Modal.Content>

                <Modal.Actions>
                    <Button type='submit' basic color='blue' inverted>
                        <Icon name='remove' /> No
                    </Button>
                    <form onSubmit={this.onSubmit} style={{float: 'right'}}>
                        <Button color='red' inverted>
                            <Icon name='checkmark' /> Yes
                        </Button>
                    </form>
                </Modal.Actions>
            </Modal>
        );
    }
}

DeleteSharedList.propTypes = {
    sharedList: PropTypes.object.isRequired
};

export default connect(null, { removeSharedList })(DeleteSharedList);
