import React, { Component } from "react";
import "../css/search.css";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchInputValue: ""
        }

    }

    onSearchInputChange = (e) => {
        const searchInputValue = e.target.value;
        const { getSearchInputValue } = this.props;
        this.setState({
            searchInputValue
        });
        getSearchInputValue(searchInputValue);
    };

    render() {
        return (
            <div className="container search-bar-wrapper">
                <input type="search" name="search-candidates"
                    value={this.state.searchInputValue} onChange={this.onSearchInputChange}
                    id="search-candidates" placeholder="Search..." />
            </div>
        );
    };
};

export { Search };