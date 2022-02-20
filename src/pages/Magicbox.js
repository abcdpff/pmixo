
import React from "react";
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from 'styled-components';

const images = [
  {
    original: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/1.jpg?sign=5b76dce9e25038961aed8e07ba4f2ef9&t=1644149202',
    thumbnail: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/1.jpg?sign=5b76dce9e25038961aed8e07ba4f2ef9&t=1644149202',
  },
  {
    original: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/2.jpg?sign=799c9e57c28e3df27e4c824c601c7aed&t=1644149244',
    thumbnail: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/2.jpg?sign=799c9e57c28e3df27e4c824c601c7aed&t=1644149244',
  },
  {
    original: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/3.jpg?sign=6c992ca0091deda146d14d9beb96b131&t=1644149259',
    thumbnail: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/3.jpg?sign=6c992ca0091deda146d14d9beb96b131&t=1644149259',
  },
  {
    original: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/4.jpg?sign=91509b02fd4599e453ea97bcafa33fbf&t=1645305686',
    thumbnail: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/4.jpg?sign=91509b02fd4599e453ea97bcafa33fbf&t=1645305686',
  },
  {
    original: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/5.jpg?sign=6ffd9db1f8049f98587688093ac2c0e8&t=1645305744',
    thumbnail: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/5.jpg?sign=6ffd9db1f8049f98587688093ac2c0e8&t=1645305744',
  },
  {
    original: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/6.jpg?sign=8355162b3e8a682e2a56a5b531e99623&t=1645305763',
    thumbnail: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/6.jpg?sign=8355162b3e8a682e2a56a5b531e99623&t=1645305763',
  },
  {
    original: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/7.jpg?sign=6af1a8d3f37db6f89508b244a64c6020&t=1645305779',
    thumbnail: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/7.jpg?sign=6af1a8d3f37db6f89508b244a64c6020&t=1645305779',
  },
  {
    original: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/8.jpg?sign=356a168c0dfacfef176dff82dc833200&t=1645305792',
    thumbnail: 'https://706d-pmixo-7gray7k8850a1952-1308466752.tcb.qcloud.la/image/%E5%AE%B6%E5%B1%85/%E6%9F%9C%E5%AD%90/8.jpg?sign=356a168c0dfacfef176dff82dc833200&t=1645305792',
  },
];
const Styles = styled.div`
  color: #1d1d1f;
`;

const InfoWrapper = styled.div`
  display: flex;

  .left-col {
    padding: 10px;
  }

  .right-col {
    padding: 10px;
  }

  .image-gallery-image {
    height: 500px;
  }

  .image-gallery-thumbnail {
    border: none;
    transition: none;
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:focus {
    border: 1px solid #DCDBDA;
  }

  .product-box {
    padding: 20px 0px;
  }

  .price-tag {
    font-size: 25px;
    line-height: 1.5;
    font-weight: 400;
  }

  .color-box {
    display: flex;
  }
`;

// const ProductSelector = styled.div`
//   div {
//     padding: 10px 10px 10px 0px;
//   }

//   button {
//     border: 1px solid #1d1d1f;
//     background-color: transparent;
//   }
// `;

const DescriptionWrapper = styled.div`
  padding: 20px 60px;

  span {
    font-family: Georgia Regular;
    font-weight: bold;
  }

  p {
    font-family: Georgia Regular;
  }

  .product-description,
  .brand-concept {
    padding: 10px 0;
  }

  .description-1,
  .description-2 {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  }

  .concept-box {
    display: flex;

    div {
      width: 33.3%;
      padding-right: 20px;
    }
  }
`;

const Magicbox = () => {
  return (
    <Styles>
      <Nav />

      <InfoWrapper className="info-wrapper">
        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 left-col">
          <ImageGallery
            showNav={false}
            showPlayButton={false}
            items={images}
            showFullscreenButton={true}
            useBrowserFullscreen={false} />
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 right-col">
          <div className="product-box">
            <div className="product-info">
              <div className="product-name"><h1>MagicBox</h1></div>
              <div><span className="price-tag">$499</span></div>
              {/* <ProductSelector className="color-box">
                <div><button>Yellow</button></div>
                <div><button>Orange</button></div>
                <div><button>Blue</button></div>
              </ProductSelector> */}
            </div>
          </div>
        </div>
      </InfoWrapper>

      <DescriptionWrapper className="description-wrapper">
        {/* <div>
          <h5>3D Display</h5>
          <div style={{ width: 800, height: 300 }}></div>
        </div> */}

        <div className="product-description">
          {/* <h5>Product Description and Size</h5> */}
          <p className="description-1">PMIXO MagicBox is a creative modular storage cube allowing
            for ultimate flexibility and space efficiency. It is versatile
            in so many ways. You can use as many MagicBox units as you like
            to form shelving that meets your needs, or you can use it for
            seating and sideboards. It makes the perfect addition to any room
            and will be a lifelong companion furniture piece.
          </p>
          <p className="description-2">It's like Erno Rubik said, "we turn the cube and it twists us".</p>
          <span>Product dimensions</span>
          <div>Width: 350 mm</div>
          <div>Depth: 375 mm</div>
          <div>Height: 510 cm</div>
        </div>

        {/* <div>
          <h5>Video for Installation</h5>
          <div style={{ width: 800, height: 300 }}></div>
        </div> */}

        <div className="brand-concept">
          {/* <h5>Brand Concept</h5> */}
          <div className="concept-box">
            <div>
              <span>Forests are critical for life on earth.</span>
              <p>Forests contribute to maintaining balance in the atmosphere, purify the
                air that we breathe and are part of the water cycle. However, the world's
                area under forests declines by about 7.3 million hectares per year.
                At Promix, we believe people shall not live selfishly without forests.
                From the very beginning, we use 100% natural straw-based eco-board to
                protect forests and ensure our products are healthy, recyclable,
                renewable and durable. It is an important part of our design heritage.</p>
            </div>
            <div>
              <span>No crop straw burning.</span>
              <p>In many agricultural countries, crop straw fails to be used in an
                effective way. In most cases, crop straw are burnt to free up the land
                for the next planting. As a result, forest fire, carbon emission and air
                pollution become growing global problems.
                At Promix, we only use straw-based eco-boards made of 100% natural wheat
                straw fibres and formaldehyde-free adhesives(MDI) representing a
                sustainable and healthy solution for home living.</p>
            </div>
            <div>
              <span>Health is everything.</span>
              <p>Your health is important to us.
                The strictly selected eco-board used in our products is certified
                by CARB, EPA, CE and JIS, and it has been assessed to meet high safety,
                health, and environmental protection requirements.
                More specifically, it is formaldehyde-free and non-toxic.
                In addition, it has outstanding resistance deformation,
                fire resistance and moisture resistance.</p>
            </div>
          </div>
        </div>
      </DescriptionWrapper>
      <Footer />
    </Styles>
  );
}

export default Magicbox;