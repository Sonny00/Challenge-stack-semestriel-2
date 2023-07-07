import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@esgivroom/common";

import { showMyOrderRouter } from './routes/show-my-order';
import { showAllOrderRouter } from './routes/show-all-order';
import { getOrderRouter } from './routes/get-order';
import { createOrderRouter } from './routes/create-order';
import { deliverOrderRouter } from './routes/deliver-order';
import { showProductRouter } from './routes/show-product';

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
    // secure: process.env.NODE_ENV === 'production'
  })
);
app.use(currentUser);

app.use(showProductRouter);
app.use(showMyOrderRouter);
app.use(getOrderRouter);
app.use(deliverOrderRouter);
app.use(showAllOrderRouter);
app.use(createOrderRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
