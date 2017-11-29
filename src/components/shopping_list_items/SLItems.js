import React, { Component } from 'react';
import { connect } from 'react-redux';
import SLItemList from "./SLItemList";
import { getListItems } from "../../actions/listItemActions";

class SLItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 20,
            next_page: '',
            previous_page: '',
            total_items: null
        };
    }

    componentDidMount() {
        this.props.getListItems(this.props.id, this.state.activePage, this.state.limit);
    }

    render() {
        const { shoppingListItems } = this.props;

        return(
            <div>
                <SLItemList shoppingListItems={shoppingListItems} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { shoppingListItems: state.shoppingListItems };
}

export default connect(mapStateToProps, { getListItems })(SLItems);
