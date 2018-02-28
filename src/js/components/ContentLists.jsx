import React from 'react';
import Navigation from './Navigation.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import {Container} from 'react';
import axios from 'axios';

export default class ContentLists extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };

    console.log('Initial');
  }

  componentWillMount() {
    axios.get('http://localhost:3001/videos').then(res => this.setState({videos: res.data})).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Navigation/>
        <Content videos={this.state.videos}/>
      </div>
    );
  }
}

/*
  ContentLists ->
    Navbar
    Content
    Footer
*/
