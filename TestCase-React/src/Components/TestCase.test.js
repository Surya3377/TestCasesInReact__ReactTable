import {render,screen} from "@testing-library/react";
import TestCase from "./TestCase";
   
                                              //text Content
     
// test("Greet renders correctly", () => {
//     render(<TestCase />)
//    const textElement = screen.getByText("Hello")
//    expect(textElement).toBeInTheDocument()
// })

                                              //Using  props

// test("Greet renders with a name", () => {
//    render( <TestCase name = "Viswash"/>)
//   const textElement = screen.getByText("Hello Viswash")
//   expect(textElement).toBeInTheDocument()
// })


                         //Filter using the test.only and test.skip

// test.only("Greet renders with a name", () => {
//     render( <TestCase name = "Viswash"/>)
//    const textElement = screen.getByText("Hello Viswash")
//    expect(textElement).toBeInTheDocument()
//  })

//  test.skip("Greet renders with a name", () => {
//     render( <TestCase name = "Viswash"/>)
//    const textElement = screen.getByText("Hello Viswash")
//    expect(textElement).toBeInTheDocument()
//  })


                        // Groping Tests ( We can use filter methods also)


    describe("TestCase",() => {
                                   //  We can replace test with it and only with f and skip with x
        test("renders correctly", () => {
            render(<TestCase />)
           const textElement = screen.getByText("Hello")
           expect(textElement).toBeInTheDocument()
        })
        test("renders with a name", () => {
            render( <TestCase name = "Viswash"/>)
           const textElement = screen.getByText("Hello Viswash")
           expect(textElement).toBeInTheDocument()
         })         
    })


                         //Code Coverage

//1.npm run coverage
//2. In Package.json we have to add 
// "jest":{
//      "coverageThreshold": {
//         "global": {
//          "branches":80,
//          "functions":80,
//          "lines":80,
//          "statements":-10
//         }
//       }
//    },  In Development  
        //   and    
//  "coverage": "npm test -- --coverage --watchAll"  In script also

// If we want tia coverage an particular component only :-
// "coverage": "npm test -- --coverage --watchAll --collectCoverageFrom=src/Components/TestCase.js"

