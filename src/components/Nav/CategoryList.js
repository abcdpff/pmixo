import React from 'react';
import styled from 'styled-components';
import Category from './Category'
const CategoryListContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
`;

// const categories = [
//   {
//     "name": "书桌/书桌椅",
//     "imageUrl": "https://res.app.ikea.cn/static/public/subcatalog/bm003/thumbnail.png?v=20220104"
//   },
//   {
//     "name": "书架/书柜",
//     "imageUrl": "https://res.app.ikea.cn/static/public/subcatalog/bm003/thumbnail.png?v=20220104"
//   },
//   {
//     "name": "餐桌/餐桌椅",
//     "imageUrl": "https://res.app.ikea.cn/static/public/subcatalog/bm003/thumbnail.png?v=20220104"
//   }];

const CategoryList = ({
  categories,
  id
}) => {
  return (
    <CategoryListContainer>
      {categories.map(({ label, imageURL }) => {
        return (<Category
          // onFocus={() => {
          //   setFocusedNav(id);
          // }}
          imageURL={imageURL}
          label={label} />)
      })}
    </CategoryListContainer>
  )
};

export default CategoryList;