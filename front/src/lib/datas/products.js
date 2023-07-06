// id : int
// title : string
// price : number
// discount: number
// category: string
// userId: string


const PRODUCTS = [
    {
        id: "P1",
        userId: "U2",
        title: "Moto 1",
        price: 20567.98,
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
        userId: "U2",
        title: "Moto 2",
        price: 40567.98,
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
        userId: "U3",
        title: "Moto 3",
        price: 788567.98,
        category: "Bottom",
        numReviews: "5",
        images : {
            image1: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        }
    },
    {
        id: "P4",
        userId: "U3",
        title: "Moto 4",
        price: 788567.98,
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
        userId: "U2",
        title: "Moto 5",
        price: 7887.98,
        category: "Bottom",
        numReviews: "5",
        rating: '3.5',
        images : {
            image1: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        }
    },
    {
        id: "P6",
        userId: "U3",
        title: "Moto 6",
        price: 78567.98,
        category: "Top",
        numReviews: "5",
        rating: '3',
        images : {
            image1: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        }
    },
    {
        id: "P7",
        userId: "U2",
        title: "Moto 7",
        price: 40567.98,
        category: "Top",
        numReviews: "5",
        rating: '3.5',
        images : {
            image1: "photo-1653064098555-ae5a6e81ec05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        }
    },
    {
        id: "P8",
        userId: "U2",
        title: "Moto 8",
        price: 788567.98,
        category: "Bottom",
        numReviews: "4",
        rating: '2.4',
        images : {
            image1: "photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
            image2: "photo-1542683088-abb3da334598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80"
        }
    },
]

export { PRODUCTS }