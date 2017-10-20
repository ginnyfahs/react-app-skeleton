import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.getApiData = this.getApiData.bind(this)
  }

  componentDidMount() {
    this.getApiData() 
    
  }

  getApiData() {
    axios.get("https://web-coding-crimes.herokuapp.com/api/data?limit=10&offset=200")
    .then(response => this.logApiResponse(response))
    .catch(error => console.log("Failed: ", error))
  }

  logApiResponse(response) {
    var APIresponse = response 

    console.log(APIresponse);
  }

  render() {
    return (
      <h1>Why hello</h1>
    );
  }
}

export default App;
