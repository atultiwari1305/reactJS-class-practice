// //HOISTING IN LET
// function h1(){
//     console.log(`Before declaration: ${s}`)
//     let s = 45;
//     console.log(`After declaration: ${s}`)
// }
// h1()
//-----------------NOT ALLOWED-----------------//

//HOISTING IN VAR
function h2(){
    console.log(`Before declaration: ${t}`)
    var t = 45;
    console.log(`After declaration: ${t}`)
}
h2()

// //HOISTING IN CONST
// function h3(){
//     console.log(`Before declaration: ${u}`)
//     const u = 45;
//     console.log(`After declaration: ${u}`)
// }
// h3()
//-----------------NOT ALLOWED-----------------//