import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    render() {
        return(
            <div className="ui mini input fluid">
                <input placeholder="Search..." onChange={this.props.onInputChange}/>
            </div>
        );
    }
}

Search.propTypes = {
    onInputChange: PropTypes.func
};

export default Search;