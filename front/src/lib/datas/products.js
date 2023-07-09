// id : int
// title : string
// price : number
// discount: number
// category: string
// userId: string
// countInStock: Number | default 1


const PRODUCTS = [
    {
        id: "P1",
        userId: "U2",
        title: "Moto 1",
        price: 20567.98,
        category: "TopClass",
        numReviews: "5",
        rating: '4.5',
        countInStock: '5',
        images : {
            image1: "photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        },
        version: 2,
    },
    {
        id: "P2",
        userId: "U2",
        title: "Moto 2",
        price: 40567.98,
        category: "TopClass",
        numReviews: "5",
        rating: '3.5',
        countInStock: '5',
        images : {
            image1: "photo-1653064098555-ae5a6e81ec05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        },
        version: 2,
    },
    {
        id: "P3",
        userId: "U3",
        title: "Moto 3",
        price: 788567.98,
        category: "Cross",
        numReviews: "5",
        countInStock: '5',
        images : {
            image1: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        },
        version: 2,
    },
    {
        id: "P4",
        userId: "U3",
        title: "Moto 4",
        price: 788567.98,
        category: "TopClass",
        numReviews: "5",
        rating: '3.5',
        countInStock: '5',
        images : {
            image1: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        },
        version: 2,
    },
    {
        id: "P5",
        userId: "U2",
        title: "Moto 5",
        price: 7887.98,
        category: "Cross",
        numReviews: "5",
        rating: '3.5',
        countInStock: '5',
        images : {
            image1: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        },
        version: 2,
    },
    {
        id: "P6",
        userId: "U3",
        title: "Moto 6",
        price: 78567.98,
        category: "TopClass",
        numReviews: "5",
        rating: '3',
        countInStock: '5',
        images : {
            image1: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        },
        version: 2,
    },
    {
        id: "P7",
        userId: "U2",
        title: "Moto 7",
        price: 40567.98,
        category: "Cross",
        numReviews: "5",
        rating: '3.5',
        countInStock: '5',
        images : {
            image1: "photo-1653064098555-ae5a6e81ec05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        },
        version: 2,
    },
    {
        id: "P8",
        userId: "U2",
        title: "Moto 8",
        price: 788567.98,
        category: "TopClass",
        numReviews: "4",
        rating: 2.4,
        countInStock: '5',
        images : {
            image1: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        },
        version: 2,
    },
]
const getRandomElements = (a, n) => {
    const l = a.slice()
    const o = []
    for (let i = 0; i < n; i++) {
      o.push(...l.splice(Math.floor(Math.random() * l.length), 1))
    }
    return o
}
const BESTSELLERS = getRandomElements(PRODUCTS, 3)
export { PRODUCTS, BESTSELLERS }