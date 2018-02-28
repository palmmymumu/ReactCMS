import React from 'react';
import {Grid, Row, Col, Panel, Image} from 'react-bootstrap';
import Video from './Video.jsx';
import axios from 'axios';

class Content extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          {this.props.videos.map((video) => {
            return <Col md={3}>
              <Video href={video.id} thumbnail={video.thumbnail} title={video.title} desc={video.desc}/>
            </Col>
          })}
        </Row>
      </Grid>
    );
  }
}

export default Content;
