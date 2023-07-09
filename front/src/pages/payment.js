import React, { useEffect, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import Router from 'next/router';
import Head from 'next/head';

import CheckoutSteps from '../components/cart/CheckoutSteps';
import FormContainer from '../components/common/FormContainer';
import { APP_NAME } from '../lib/dicts/common';

const PaymentPage = ({ currentUser }) => {
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [onSubmit, setOnSubmit] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Protect unauthorized access
    if (!currentUser) {
      return Router.push('/signin');
    } else {
      setIsReady(true);
    }

    const shippingAddress = localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : [];

    if (!shippingAddress.address) {
      Router.push('/shipping');
    }

    if (onSubmit) {
      localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod));
      setOnSubmit(false);
      Router.push('/checkout');
    }
  }, [onSubmit]);

  const submitHandler = (e) => {
    e.preventDefault();
    setOnSubmit(true);
  };

  return (
    isReady && (
			<>
				<Head>
					<title>Payment Method | {APP_NAME}</title>
				</Head>
				<FormContainer>
					<CheckoutSteps
						step1
						step2
						step3
						currentStep={'/payment'}
						currentUser={currentUser}
					/>
					<h1>Payment Method</h1>
					<Form onSubmit={submitHandler}>
						<Form.Group>
							<Form.Label className="mb-3" as="legend">
								Select Method
							</Form.Label>
							<Col>
								<Form.Check
									className="my-3"
									type="radio"
									label="Stripe or Credit Card"
									id="stripe"
									name="paymentMethod"
									value="stripe"
									checked={true}
									onChange={(e) => setPaymentMethod(e.target.value)}
								></Form.Check>

								{/* <Form.Check
									className="my-3"
									type="radio"
									label="Paypal or Credit Card"
									id="paypal"
									name="paymentMethod"
									value="paypal"
									checked={paymentMethod === 'paypal'}
									onChange={(e) => setPaymentMethod(e.target.value)}
								></Form.Check> */}
							</Col>
						</Form.Group>

						<Button type="submit" variant="dark">
							Continue
						</Button>
					</Form>
				</FormContainer>
			</>
    )
  );
};

export default PaymentPage;
