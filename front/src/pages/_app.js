import buildClient from "../api/build-client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, SSRProvider } from 'react-bootstrap';

import '../styles/app.css';
import * as ga from '../lib/ga';
import Headers from "../components/header/Header";
import Footer from '../components/footer/Footer';
import { PRODUCTS, BESTSELLER } from '../lib/datas/products'
import { USERS } from '../lib/datas/users'
import { ORDERS, MYORDERS, MYORDERSPRODUCTS, MYORDERSPAID } from '../lib/datas/orders'


const AppComponent = ({ Component, pageProps, currentUser }) => {
  const router = useRouter();

  // router events
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <SSRProvider>
      <Head>
				<title>ESGIVroom | Boutique de motos et accessoiresWomen&apos;s Clothing Online Shop</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
      <Headers currentUser={currentUser} {...pageProps}/>
      <main className="pb-5" style={{ marginTop: '74px' }}>
        <Container fluid>
          <Component currentUser={currentUser} {...pageProps} />
        </Container>
      </main>
      <Footer />
    </SSRProvider>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  // const client = buildClient(appContext.ctx);
  // const { data } = await client.get("/api/users/currentuser");

  // const { data: products } = await client.get('/api/products');
  // const { data: orderProducts } = await client.get('/api/orders/products');
  // const { data: paymentProducts } = await client.get('/api/payments/products');
  
  // DEMO
  const data = { currentUser: {...USERS.filter(user => user.id == "U1")[0]}}
  // const data = { }
  const products = PRODUCTS;
  const bestseller = BESTSELLER;
  const users = USERS;
  const orders = ORDERS;
  const orderProducts = MYORDERSPRODUCTS; // List of all product ordered, not just for one user
  const paymentProducts = MYORDERSPAID; // List of all product ordered and paid
  //  END DEMO

  let pageProps = {
    products,
    orderProducts,
    paymentProducts,
    users,
    bestseller
  };

  if (data.currentUser) {
    // const { data: myOrders } = await client.get('/api/orders/myorders');
    // const { data: myReviews } = await client.get('/api/products/myreviews');

    // const { data: orders } = await client.get('/api/orders');
    const myOrders = MYORDERS;
    const myReviews = null;

    pageProps = {
      products,
      orderProducts,
      paymentProducts,
      users,
      bestseller,
      myOrders,
      myReviews,
      orders
    };
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
