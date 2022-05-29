"use strict";

const user = [
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
  
  function sum () {
    const result = user.filter((mark) => mark.cars !== undefined);
    const arraysOFCars = result.map(element => element.cars);
    const arrayOFCars = arraysOFCars.reduce((acc, v) => acc + v.length,0);
    return arrayOFCars;
  }
  console.log(sum());
  
  
  function filterHasEducation() {
    const filterResult = user.filter((users) => users.hasEducation === true);
    return filterResult;
  }
  
  console.log(filterHasEducation());
  
  
  function filterHasAnimals() {
    const animalsResult = user.find((users) => users.animals !== undefined);
    return animalsResult;
  }
  
  console.log(filterHasAnimals());
  
  
  function carsFilter () {
      const result = user.filter((mark) => mark.cars !== undefined);
  
    return result;
  }
  
  console.log(carsFilter());