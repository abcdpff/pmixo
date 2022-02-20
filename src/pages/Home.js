import React from 'react';
import { Row, Col } from 'antd';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import bed from '../assets/image/家居/床.png';
import sofa from '../assets/image/家居/沙发.png';
import coffeeTable from '../assets/image/商用/小咖啡桌椅.png';
import table2A from '../assets/image/办公/2A经理桌.png';
import table1A from '../assets/image/办公/1A职员桌.png';
import tableChair from '../assets/image/家居/书桌椅.png';
import desk from '../assets/image/家居/书桌.png';
import table6A from '../assets/image/办公/6A洽谈桌.png';
import wirelessAlarm from '../assets/image/无线周边/无线充电天气时钟.png';

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

    .card-body {
      padding: 6px;
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
`;

const CarouselImg = styled.div`
${({ image }) => `background-image: url('${image}');`}
  
  background-size: 100%;
  background-repeat: no-repeat;
  height: 600px;
  width: 100%;
`;

const CardImgLarge = styled.div`
${({ image }) => `background-image: url('${image}');`}
  
  background-size: 100%;
  background-repeat: no-repeat;
  height: 600px;
  width: 100%;
`;

const CardImgMedium = styled.div`
${({ image }) => `background-image: url('${image}');`}
  
  background-size: 100%;
  background-repeat: no-repeat;
  width: 622px;
  height: 400px;
  margin-bottom: 15px;
`;

const Home = () => {
  return (
    <Styles>
      <Nav />
      <Carousel autoPlay showThumbs={false}>
        <CarouselImg image={bed} />
        <CarouselImg image={coffeeTable} />
        <CarouselImg image={table2A} />
        <CarouselImg image={table1A} />
      </Carousel>
      <Row>
        <Col span={24}>
          <Card className='featured-card' border='light'>
            <CardImgLarge image={sofa} />
            <Card.Body />
          </Card>
        </Col>
        <div className='bucket-list'>
          <Col span={12}>
            <Card border='light'>
              <CardImgMedium image={tableChair} />
            </Card>
          </Col>
          <Col span={12}>
            <Card border='light'>
              <CardImgMedium image={desk} />
            </Card>
          </Col>
          <Col span={12}>
            <Card border='light'>
              <CardImgMedium image={table6A} />
            </Card>
          </Col>
          <Col span={12}>
            <Card border='light'>
              <CardImgMedium image={wirelessAlarm} />
            </Card>
          </Col>
        </div>
      </Row>
      <Footer />
    </Styles>
  );
};

export default Home;