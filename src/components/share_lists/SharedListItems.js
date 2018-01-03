import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Segment, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {getSharedListItems} from "../../actions/shareActions";
import ItemList from "./ItemList";
import PreLoader from '../common/PreLoader';

export class SharedListItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 10,
            total_items: null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getSharedListItems(id, this.state.activePage, this.state.limit);
    }

    render() {
        const { listItems, activeList, loading } = this.props;

        if (!listItems || loading) {
            return(
                <PreLoader />
            );
        }

        return(
            <div className="content">
                <Container>
                    <Segment basic>
                        <h3>{ activeList.name }</h3>
                        <p>{ activeList.description ? activeList.description : "No description added" }</p>

                        <hr/>

                        <ItemList id={activeList.id} listItems={listItems} />
                    </Segment>
                </Container>
            </div>
        );
    }
}

// Define prop types
SharedListItems.propTypes = {
    activeList: PropTypes.object.isRequired,
    listItems: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    getSharedListItems: PropTypes.func
};

// Map store state to component props
export function mapStateToProps(state) {
    return {
        activeList: state.shoppingLists.activeList,
        listItems: state.share.listItems,
        loading: state.share.loading
    };
}

export default connect(mapStateToProps, {getSharedListItems})(SharedListItems);
