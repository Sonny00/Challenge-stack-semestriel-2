// id : string
// paidAt : datetime
// totalPrice: number
// status: string (cancelled|completed)
// isPaid: boolean
// isDelivered: boolean
// userId: string
// cart/products : collection of product

import { PRODUCTS as products } from '../datas/products'
import { USERS as users } from '../datas/users'

const getRandomElements = (a, n) => {
    const l = a.slice()
    const o = []
    for (let i = 0; i < n; i++) {
      o.push(...l.splice(Math.floor(Math.random() * l.length), 1))
    }
    return o
}
const cartProducts = getRandomElements(products,2);

const getUserShippingAddress = (userId) => {
    return users.reduce((data, user) => {
        if (user.id === userId) data.push(user.shippingAddress)
        return data
    }, [])[0]
}

const ORDERS = [
    {
        id: "O1",
        userId: "U1",
        createdAt: Date(2023, 6, 7, 14, 3, 4),
        paidAt: Date(2023, 6, 8, 8, 3, 4),
        status: "cancelled",
        isPaid: true,
        isDelivered: false,
        cart: [
            {
                userId: cartProducts[0].userId,
                title: cartProducts[0].title,
                qty: 2,
                // color: { type: String, required: true },
                // size: { type: String, required: true },
                image: cartProducts[0].images.image1,
                price: cartProducts[0].price,
                countInStock: 5,
                discount: 1,
                productId: cartProducts[0].id
            }
        ],
        shippingAddress: getUserShippingAddress("U1"),
        itemsPrice: cartProducts[0].price,
        paymentMethod: 'stripe',
        shippingPrice: 3.99,
        totalPrice: cartProducts[0].price + 3.99
    },
    {
        id: "O2",
        userId: "U1",
        createdAt: Date(2023, 6, 7, 14, 3, 4),
        paidAt: Date(2023, 6, 7, 14, 20, 4),
        status: "completed",
        isPaid: true,
        isDelivered: false,
        cart: [
            {
                userId: cartProducts[1].userId,
                title: cartProducts[1].title,
                qty: 2,
                // color: { type: String, required: true },
                // size: { type: String, required: true },
                image: cartProducts[1].images.image1,
                price: cartProducts[1].price,
                countInStock: 5,
                discount: 1,
                productId: cartProducts[1].id
            }
        ],
        shippingAddress: getUserShippingAddress("U1"),
        itemsPrice: cartProducts[1].price,
        paymentMethod: 'stripe',
        shippingPrice: 3.99,
        totalPrice: cartProducts[1].price + 3.99
    },  
]

const MYORDERS = ORDERS.reduce((myOrders, ORDER) => {
    if (ORDER.userId ==='U1') myOrders.push(ORDER);
    return myOrders;
}, [])

export { ORDERS, MYORDERS }