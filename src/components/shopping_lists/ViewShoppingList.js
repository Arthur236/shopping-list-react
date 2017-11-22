import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShoppingList } from "../../actions/shoppingListActions";

class ViewShoppingList extends Component {
    componentDidMount() {
        // Fetch the id in the url
        const { id } = this.props.match.params;

        this.props.getShoppingList(id);
    }

    render() {
        const { shoppingList } = this.props;

        if(!shoppingList) {
            return(<div>Loading...</div>);
        }
        return(
            <div>
                <h2>{ shoppingList.name }</h2>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    // Return only a particular list from the big list of shopping lists
    return { shoppingList: state.shoppingLists[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getShoppingList })(ViewShoppingList);
