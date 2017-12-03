import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from 'react-notify-toast';
import { Container, Card, Dimmer, Loader, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getLists } from '../../actions/shoppingListActions';
import Sidebar from "../common/Sidebar";
import Navigation from "../common/Navigation";
import ListFab from "./ListsFab";
import List from "./List";

class ShoppingLists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 30,
            next_page: '',
            previous_page: '',
            total_lists: null
        };
    }

    componentDidMount() {
        this.props.getLists(this.state.activePage, this.state.limit);
    }

    render() {
        const { shoppingLists, loading } = this.props;

        if (!shoppingLists || loading) {
            return(
                <Segment>
                    <Dimmer active>
                        <Loader size='big'>Loading</Loader>
                    </Dimmer>
                </Segment>
            );
        }

        return(
            <div className="content">
                {/*<Sidebar />*/}
                {/*<Navigation header="Shopping Lists" />*/}

                {/*<div className="content">*/}
                    {/*<ListFab />*/}

                    {/*<div className="dashboard">*/}
                        {/*<List shoppingLists={shoppingLists}/>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <Notifications />
                <Container>
                    <Navigation header="Shopping Lists"/>

                    <List shoppingLists={shoppingLists}/>
                </Container>
            </div>
        );
    }
}

ShoppingLists.PropTypes = {
    shoppingLists: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return { shoppingLists: state.shoppingLists.shoppingLists, loading: state.shoppingLists.loading };
}

export default connect(mapStateToProps, { getLists })(ShoppingLists);
