import React, { Component } from 'react';
import styled from 'styled-components';

const CategoryBox = styled.div`
  // width: 75px;
  // width: 25%;
  // text-align: center;
  // margin: 10px 15px 15px 15px;

  // width: 25%;
  text-align: center;
  margin: 15px 15px 15px 15px;
  position: relative;
  display: inline-block;
`;

const ImgBg = styled.div`
  height: 120px;
  width: 120px;
  // width: 25%;
  ${({ imageUrl }) => `background-image: url('${imageUrl}');`}

  // background-image: url('https://res.app.ikea.cn/static/public/subcatalog/bm003/thumbnail.png?v=20220104');
  background-size: 100%;
  background-repeat: no-repeat;
  margin-bottom: 10px;
`;

const CategoryImg = styled.img`
  visibility: hidden;
`;

export default class Category extends Component {
  render() {
    const { label, imageURL } = this.props;
    return (
      <CategoryBox>
        <ImgBg imageUrl={imageURL}><CategoryImg /></ImgBg>
        <span>{label}</span>
      </CategoryBox>
    )
  }
}