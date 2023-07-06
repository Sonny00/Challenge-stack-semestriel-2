// id : int
// email : string 
// firsrtname: string
// lastname: string
// password : string

const USERS = [
    {
        id: "U1",
        email: "moufid.mtr@gmail.com",
        password: "password",
        firstname: "Moufid",
        lastname: "MTR",
        gender: "Male",
        age:25,
        bio: "Dev Ing",
        shippingAddress: {
            address: "25 rue de Boulet",
            city: "Paris",
            postalCode: "72856",
            country: "France"
        },
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
        id: "U2",
        email: "user1@demo.com",
        password: "password",
        firstname: "User1",
        lastname: "Demo",
        gender: "Female",
        age:39,
        bio: "Mum ",
        shippingAddress: {
            address: "8 rue de Boulet",
            city: "Lyon",
            postalCode: "69856",
            country: "France"
        },
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
        id: "U3",
        email: "user2@demo.com",
        password: "password",
        firsrtname: "User2",
        lastname: "Demo",
        gender: "Male",
        age:44,
        bio: "Dad",
        shippingAddress: {
            address: "8 av de Boulet",
            city: "Lyon",
            postalCode: "69856",
            country: "France"
        },
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
]

export { USERS }