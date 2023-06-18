import React from "react";

const Task = () => {
                                               // 1.ANAGRAMS

  // let anagrams = new Set();

  // let array1 = ["cat", "dog", "animmcijc", "god", "tac"];

  // array1.forEach((data, index) => {
  //   let sortedData = data.split("").sort().join("");
  //   for (let i = index + 1; i < array1.length; i++) {
  //     let data2 = array1[i];
  //     if (data2.split("").sort().join("") === sortedData) {
  //       anagrams.add(data2);
  //     }
  //   }
  // });

  // let output = Array.from(anagrams);

  // console.log(output);

                                                 // 2.REVERSE


  // let string = "Welcome to this Javascript Guide!";

  //   const reverseStr = string.split(" ").reverse(" ").join(" ")

  //   console.log(reverseStr)

  //How to check if an object is an array or not?

  // const obj1 = [1,2,3,"hello"]
  // const obj2 = {name : "jhon", age : 30}

  //     console.log(Array.isArray(obj1))
  //     console.log(Array.isArray(obj2))

                                           // 3.How to check if it is object or not?


  // const isObject = (variable) => {
  //   return typeof variable === "object"  && variable !== null && !Array.isArray(variable)
  // }
  //         const obj = { name: "John", age: 25 };
  //         const arr = [1, 2, 3];
  //         const str = "Hello";

  //         console.log(isObject(obj));
  //         console.log(isObject(arr));
  //         console.log(isObject(str));
  //         console.log(isObject(null))

                                                      // 4.Empty An Array

  // let array = [1,2,5,4,6,"hello","xnsj"]
  // array = []
  // console.log(array)

                                                  // 5.Checking if a number is Integer or Decimal

  // const isInt = (num) => {
  //   return num % 1 === 0
  // }

  // console.log(isInt(4))
  // console.log(isInt(12.2))
  // console.log(isInt(0.3))

  // const isdecimal = (num) => {
  //   return !Number.isInteger(num)
  // }

  // console.log(isdecimal(4));
  // console.log(isdecimal(12.2));
  // console.log(isdecimal(0.3));

                                                               // 6.Duplicating Array

  // const duplicate = (arr) => {
  //   return arr.concat(arr);
  // };
  // let originalArray = [1, 2, 3, 4, 5];
  // const duplicateArry = duplicate(originalArray);
  // console.log(duplicateArry);

 
                                                   // 7. Given two strings, return true if they are anagrams of one another

  // const string1 = 'listen';
  // const string2 = 'silent';

  // const  areAnagrams = (str1, str2) => {

  //   return str1.split('').sort().join('') === str2.split('').sort().join('');
  // }

  // console.log(areAnagrams(string1, string2));

                                                   // 8. How would you use a closure to create a private counter?

  // const createCounter = () => {
  //   let counter = 0

  //   const increse = () => {
  //     counter++
  //     console.log(counter)
  //   }
  //   const decrese = () => {
  //     counter--
  //     console.log(counter)
  //   }
  //   return{
  //     increse:increse,
  //     decrese:decrese
  //   }
  // }

  // const counter = createCounter();
  // counter.increse()
  // counter.decrese()

                                             // 9.Write a function that would allow you to do this  multiply(5)(6);

  // const multiply = (x) => {
  //   return (y) => {
  //     return x * y
  //   }
  // }

  // const result = multiply(5)(6)

  // console.log(result)


  























































  return <div></div>;
};

export default Task;
