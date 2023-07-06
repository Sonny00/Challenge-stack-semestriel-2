// id : int
// title : string
// price : number
// discount: number
// category: string
// userId: string


const PRODUCTS = [
    {
        id: "P1",
        title: "Moto 1",
        price: "20,567.98",
        category: "Top",
        numReviews: "5",
        rating: '4.5',
        images : {
            image1: "photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        }
    },
    {
        id: "P2",
        title: "Moto 2",
        price: "40,567.98",
        category: "Top",
        numReviews: "5",
        rating: '3.5',
        images : {
            image1: "photo-1653064098555-ae5a6e81ec05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        }
    },
    {
        id: "P3",
        title: "Moto 3",
        price: "788,567.98",
        category: "Bottom",
        numReviews: "5",
        images : {
            image1: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        }
    },
    {
        id: "P4",
        title: "Moto 3",
        price: "788,567.98",
        category: "Top",
        numReviews: "5",
        rating: '3.5',
        images : {
            image1: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        }
    },
    {
        id: "P5",
        title: "Moto 5",
        price: "7887.98",
        category: "Bottom",
        numReviews: "5",
        rating: '3.5',
        images : {
            image1: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        }
    }
]

export { PRODUCTS }