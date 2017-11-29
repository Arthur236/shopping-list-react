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

    componentWillMount() {
        this.props.getListItems(this.props.id, this.state.activePage, this.state.limit);
    }

    render() {
        const { listItems } = this.props;

        return(
            <div>
                <SLItemList id={this.props.id} listItems={listItems.listItems.shopping_list_items} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { listItems: state.listItems };
}

export default connect(mapStateToProps, { getListItems })(SLItems);
