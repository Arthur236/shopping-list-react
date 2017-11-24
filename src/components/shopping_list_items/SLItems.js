import React, { Component } from 'react';
import { connect } from 'react-redux';
import SLItemsFab from './SLItemsFab';
import SLItemList from "./SLItemList";
import { getListItems } from "../../actions/listItemActions";

class SLItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 2,
            limit: 3,
            next_page: '',
            previous_page: '',
            total_items: null
        };
    }

    // componentDidMount() {
    //     const { id } = this.props.match.params;
    //
    //     this.props.getListItems(id, this.state.activePage, this.state.limit);
    // }

    render() {
        const { shoppingListItems } = this.props;

        return(
            <div>
                <SLItemsFab />

                <SLItemList shoppingListItems={shoppingListItems} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { shoppingListItems: state.shoppingListItems };
}

export default connect(mapStateToProps, { getListItems })(SLItems);
