import React from 'react';


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    // this should be clear as its mostly save for javascript
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <form>
        // setting handle change here and a value which is equal to searchTerm in state
        <input onChange={this.handleChange} value={this.state.searchTerm} type="text" placeholder="Search..." />
      </form>
    );
  }
}

export default SearchBar;