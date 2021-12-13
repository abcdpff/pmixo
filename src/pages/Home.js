import React, { Component } from 'react';
import { Row, Col } from 'antd';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Styles = styled.div`
  display: flex;
  flex-direction: column;

  .ant-row {
    margin: 0;
  }

  .card {
    border: none;
    .card-img, .card-img-top {
      border-radius: 0;
    }
  }

  .featured-card {
    margin-top: 12px;
  }

  .bucket-list {
    padding: 12px 0px 12px 12px;
    .ant-col {
      padding-right: 12px;
    }
  }
`

export default class Home extends Component {
  render() {
    console.log('home this.props', this.props);
    const imgSrc = [
      'https://www.ikea.cn/images/db/6f/db6faebc718cdc511b84ffd84c854b07.jpg?f=m',
      'https://www.ikea.cn/images/fe/b1/feb11a858cd73fe608b48b87a621711d.jpg?f=m',
      'https://www.ikea.cn/images/16/cc/16cc5857bca65dc175b7e5205b3b89eb.jpg?f=xl',
      'https://www.ikea.cn/images/e2/d3/e2d322d6eacbaee94acee1173b6cba9a.jpg?f=xl'
    ];
    return (
      <Styles>
        <NavigationBar />
        <Row>
          <Col span={24}>
            <Card>
              <Card.Img variant="top" src="https://www.ikea.cn/images/b8/f5/b8f50d05d4a50b78491ae864a45b9222.jpg?f=xxl" />
            </Card>
          </Col>
          <Col span={24}>
            <Card className='featured-card' border='light'>
              <Card.Img variant="top" src="https://www.ikea.cn/images/2a/16/2a16c1520ab8f134c0a9cb5cb48d9435.jpg?f=xxl" />
              <Card.Body />
            </Card>
          </Col>
          <div className='bucket-list'>
            {Array.from(imgSrc).map((_, idx) => (
              <Col span={12}>
                <Card border='light'>
                  <Card.Img variant="top" src={imgSrc[idx]} />
                  <Card.Body />
                </Card>
              </Col>
            ))}
          </div>
        </Row>
        <Footer />
      </Styles>
    )
  }
}