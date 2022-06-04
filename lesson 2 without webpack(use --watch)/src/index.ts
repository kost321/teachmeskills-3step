"use strict";
interface IUsers {
    name : string,
    phone:string,
    email:string,
    animals?:string[],
    cars?:string[],
    hasChildren:boolean,
    hasEducation:boolean,
}

const user: IUsers[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
        
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
  ];
  
  user.forEach(id => {
    const result = id.name;
    console.log(result);
  });


  //-------------UsersHasCars-----------------

  interface IUsersHasCars extends IUsers {
    cars:string[],
}

  function sum (user:IUsers[]):number {
    const result = user.filter((mark):mark is IUsersHasCars  => mark.cars !== undefined);
    const arraysOFCars = result.map(element => element.cars);
    const numberOFCars = arraysOFCars.reduce((acc, v) => acc + v.length,0);
    return numberOFCars;
  }

  console.log(sum(user));
  

//--------------UsersHasEducation-------------------

  interface IUsersHasEducation extends IUsers {
    hasEducation:true,
}


  function filterHasEducation(user:IUsers[]) {
    const filterResult = user.filter((users): users is IUsersHasEducation => users.hasEducation === true);
    return filterResult;
  }
  
  console.log(filterHasEducation(user));
  

  //----------HasAnimals---------------
  
  interface IUsersHasAnimals extends IUsers {
    animals:string[],
}

  function filterHasAnimals(user:IUsers[]) {
    const animalsResult = user.filter((users): users is IUsersHasAnimals => users.animals !== undefined);
    return animalsResult;
  }
  
  console.log(filterHasAnimals(user));
  

//-------------carsFilte
  
interface IUsersHasCar extends IUsers {
    cars:string[],
}

  function carsFilter (user:IUsers[]) {
    const result = user.filter((mark): mark is IUsersHasCar => mark.cars !== undefined);
    return result;
  }
  
  console.log(carsFilter(user))
  