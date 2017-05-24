import React from 'react';
import Tabs from '../Tabs';
import SearchBar from '../SearchBar';
import './App.css';

class App extends React.Component {
    // we need a contructor for the class now, since we need to initialize some properties
    // we are setting searchTerm in state to an initial value
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
    // this has to be bound so that this onChange={this.handleChange} will know where to find handleChange function
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      searchTerm: event.target.value
    })
    console.log(event.target.value)
  }

    render() {

        return (
            <div>
                <form>
                <input onChange={this.handleChange} 
                        value={this.state.searchTerm} 
                        type="text" 
                        placeholder="Search..." />
                </form>
                <Tabs searchTerm={this.state.searchTerm} />
            </div>
        )
    };
}

export default App;