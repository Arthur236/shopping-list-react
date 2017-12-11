import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Container } from 'semantic-ui-react';
import ItemList from "./ItemList";
import { getSharedListItems } from "../../actions/shareActions";
import Navigation from "../common/Navigation";
import PreLoader from '../common/PreLoader';

class SharedListItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 20,
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
                    <Navigation />

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

SharedListItems.propTypes = {
    activeList: PropTypes.object.isRequired,
    listItems: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        activeList: state.shoppingLists.activeList,
        listItems: state.share.listItems,
        loading: state.share.loading
    };
}

export default connect(mapStateToProps, { getSharedListItems })(SharedListItems);
