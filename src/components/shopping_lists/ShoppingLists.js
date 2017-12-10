import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLists } from '../../actions/shoppingListActions';
import Navigation from "../common/Navigation";
import List from "./List";
import PreLoader from '../common/PreLoader';

class ShoppingLists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 30,
            total_lists: null
        };
    }

    componentWillMount() {
        this.props.getLists(this.state.activePage, this.state.limit);
    }

    render() {
        const { shoppingLists, loading } = this.props;

        if (!shoppingLists || loading) {
            return(
                <PreLoader />
            );
        }

        return(
            <div className="content">
                <Container>
                    <Navigation />

                    <Segment basic>
                        <Link to="/shopping_lists/create" className="ui button purple fluid">Create List</Link>
                    </Segment>

                    <Segment basic>
                        <List shoppingLists={shoppingLists}/>
                    </Segment>
                </Container>
            </div>
        );
    }
}

ShoppingLists.propTypes = {
    shoppingLists: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return { shoppingLists: state.shoppingLists.shoppingLists, loading: state.shoppingLists.loading };
}

export default connect(mapStateToProps, { getLists })(ShoppingLists);
