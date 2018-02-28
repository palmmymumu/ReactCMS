import React, {Component} from 'react';
import {Panel, Image} from 'react-bootstrap';
import {axios} from 'axios';

class Video extends React.Component {
  render() {
    return (
      <Panel>
        <Panel.Body>
          <center>
            <a href={this.props.href}>
              <Image src={this.props.thumbnail} rounded responsive/>
            </a>
            <h4>
              <a href={this.props.href}>
                {this.props.title}
              </a>
            </h4>
            {this.props.desc}
          </center>
        </Panel.Body>
      </Panel>
    );
  }
}

export default Video;
