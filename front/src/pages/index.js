import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import Product from '../components/home/Product';
import ImageSwiper from '../components/common/ImageSwiper';
import useWindowSize from '../hooks/useWindowSize';

import AdsBannerSrc1 from '../public/asset/ads-banner/ads_banner_1.png';
import AdsBannerSrc2 from '../public/asset/ads-banner/ads_banner_2.png';
import AdsBannerSrc3 from '../public/asset/ads-banner/ads_banner_3.png';

// const adsBanners = [AdsBannerSrc1, AdsBannerSrc2, AdsBannerSrc3];
const adsBanners = [
  'photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  'photo-1485908518669-ad17eac8cb57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'photo-1473147437169-91ac8cebc017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
];

const LandingPage = ({ currentUser, products }) => {
  console.log("products => ", products);
  const [onMobile, setOnMobile] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 576) {
      setOnMobile(true);
    } else {
      setOnMobile(false);
    }
  }, [width]);

  return (
		<>
			<Row className="ads-container">
				<ImageSwiper images={adsBanners} isBanner={true} />
			</Row>
      { products ?
        <Row className="mx-2 mt-4">
          {products.map((item) => (
            <Col key={item.id} xs={6} md={4} xl={3} style={{ borderRadius: 30 }} >
              <Product
                onMobile={onMobile}
                product={item}
                currentUser={currentUser}
              />
            </Col>
          ))}
        </Row> :
        <Row>
          <Col>
            <div className='justify-items-center'> <h1 className='text-center'> Pas de produits ...</h1></div>
          </Col>
        </Row>
      }
		</>
  );
};


export default LandingPage;
