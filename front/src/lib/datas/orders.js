// id : string
// paidAt : datetime
// totalPrice: number
// status: string (cancelled|completed)
// isPaid: boolean
// isDelivered: boolean
// userId: string
// cart/products : collection of product

const ORDERS = [
    {
        id: "01",
        paidAt: new Date().now(),
        totalPrice: 125,
        status: "cancelled",
        isPaid: false,
        isDelivered: false,
        userId: "U1",
        // cart: [
        //     userId:"" 
        // ]
    },
    {
        id: "02",
        email: "user1@demo.com",
        firsrtname: "User1",
        lastname: "Demo",
        password: "password",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
        id: "03",
        email: "user2@demo.com",
        firsrtname: "User2",
        lastname: "Demo",
        password: "password",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
]

export { USERS }