import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../assets/css/body.scss';
import { Carousel } from "react-responsive-carousel";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = ({

    });
  }

  componentWillMount() { }

  render() {
    return (
      <div className="body">
        <Carousel autoPlay showThumbs={false}>
          <div>
            <img alt="" src="https://res.app.ikea.cn/content/u/20211112/ce0dd6fb3f424781bbbfcd1f5cfe635a.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,jpg" />
          </div>
          <div>
            <img alt="" src="https://res.app.ikea.cn/content/u/20211112/5723bc9de8ce4dc88aef14f38f94189a.png?x-oss-process=image/quality,q_70/format,jpg" />
          </div>
          <div>
            <img alt="" src="https://static.web.ikea.cn/content_image/banner/pc_zh_2_ib.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,jpg" />
          </div>
        </Carousel>
      </div>
    )
  }
}