import React, {Component} from 'react';

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
    //myProp: PropTypes.string.isRequired
};

export default Search;