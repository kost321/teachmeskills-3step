interface IUsers {
    "id": number,
    "email": string,
    "first_name": string,
    "last_name": string,
    "avatar": string,
     "age": number
}

const arr : IUsers[] = [
{
   "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg",
    "age": 23
},
{
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg",
    "age": 20
}
];


interface products {
 "id": number,
    "name": string,
    "price": number,
    'currency':string,
    "ingredients": string[],
    "type": string,
    "available": boolean
}

const product : products[] = [
{
        id: 1,
        name: "Burger Premium",
        price: 6,
        currency: "euro",
        ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
    type: "burger",
    available: true
    },
  {
        id: 2,
        name: "Burger Lite",
        price: 2.3,
        currency: "euro",
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
    type: "burger",
    available: true
    },
];



// interface IUsers {
//     "id": number,
//     "email": string,
//     "first_name": string,
//     "last_name": string,
//     "avatar": string,
//      "age": number
// }

// const arr : IUsers[] = [
// {
//    "id": 7,
//     "email": "michael.lawson@reqres.in",
//     "first_name": "Michael",
//     "last_name": "Lawson",
//     "avatar": "https://reqres.in/img/faces/7-image.jpg",
//     "age": 23
// },
// {
//     "id": 8,
//     "email": "lindsay.ferguson@reqres.in",
//     "first_name": "Lindsay",
//     "last_name": "Ferguson",
//     "avatar": "https://reqres.in/img/faces/8-image.jpg",
//     "age": 20
// }
// ];




// const getUser = (id:number, users:IUsers[]):IUsers | undefined => { 
//     return users.find((user:IUsers) => user.id === id);
//     }

//     console.log(getUser(7,arr))