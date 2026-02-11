// Primitive data types: string, number, boolean, null, undefined, symbol
  //7 types : String , Number , Boolean , null , undefined , Symbol , Bigint 
 const id = Symbol('123');
  const id2 = Symbol('123');

  console.log(id === id2); // false


// JavaScript is dynamically typed language

  // Refrence (Non-primitve)
  // Array , Objects , Functions

 const heroes = ['Supermafn', 'Batman', 'Spiderman'];
 let myObj ={
    name:"kumar",
    age: 30,
 }

  const myFunction = function(){
    console.log("Hello from myFunction");
  }


  // +++++++++++++++++++++++++++++++++++++++++

  // Stack(Primitive type) , Heap(Non-Primitive type)
 /// In stack we get a copy of data so it get no changed in orinal value 
 // In heap we get a reference of data so it get changed in orinal value
  let mName = "keshav";
  let anotherName = mName;
  anotherName = "kumar";
  console.log(anotherName);
    console.log(mName);

    let myObj1 = {
        name:"keshav",
        age: 30,

    }
  let anotherObj = myObj1;
  anotherObj.name = "kumar";
  console.log(anotherObj.name);
  console.log(myObj1.name);