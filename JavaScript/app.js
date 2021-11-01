// function fun1() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(
//       () => {
//         if (true)
//           resolve("pass resove comment");
//         else
//           reject("passed reject");

//         console.log("into Promice Funtion fun()");

//       }, 2000)
//   });
// }

// fun1()
//   .then(comment => console.log(comment))
//   .catch(err => console.log(err));


// function getData() {
//   console.log(("IN GETDATA=============================="));
//   url = "nik.txt"
//   fetch(url).then( response => {
//     console.log("Inside first than ");
//     return response.text();
//   }).then(data =>{
//     console.log("Inside 2nd ");
//     console.log(data);
//     return data
//   })
// }
// console.log("before");
// getData();
// console.log("after================");


// function getPost() {
//   url = "http://dummy.restapiexample.com/api/v1/create";
//   data = {
//     "status": "success",
//     "data": {
//         "name": "ki",
//         "salary": "123",
//         "age": "23",
//         "id": 25
//     }
// }
//   params = {
//     method: "post",
//     headers:{
//       'Content-Type': 'application/json'
//     },
//     body: data
//   }

//   fetch(url,params)
//   .then(response => response.json())
//   .then(data => console.log(data))

// }

// getPost();


// const richard = {status: 'looking for work'};
// const handler = {
//     get(target, propName) {
//         console.log(target); // the `richard` object, not `handler` and not `agent`
//         console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
//         return target[propName]
//       }
// };
// const agent = new Proxy(richard, handler);
// console.log(agent.status); // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)


//// async and await

// async function fun2(){
//   console.log("1st line of fun2()");
//   var response = await fetch('https://api.github.com/users')
//   console.log('before response');

//   var users = await response.json();
//   console.log('after resolved');
//   console.log('users: '+users);
//   console.log('response.json: '+response.json);
//   console.log('response: '+response);
//   return users;
// }

// console.log("before");
// var a= fun2()
// console.log("after");
// console.log(a);
// console.log("last line ");
// a.then(data=>console.log(data))

// var obj = {
//   _age: 5,
//   _height: 4,
//   get age() {
//       console.log(`getting the "age" property`);
//       console.log(this._age);
//       return "";
//   },
//   get height() {
//       console.log(`getting the "height" property`);
//       console.log(this._height);
//   }
// };
// obj._age = 10;
// obj.sal = 100;
// obj.age;
// obj.sal;

// const proxyObj = new Proxy({age: 5, height: 4}, {
//   get(targetObj, property) {
//       console.log(`getting the ${property} property`);
//       console.log(targetObj);
//   }
// });

// proxyObj.age; // logs 'getting the age property' & 5
// proxyObj.height; // logs 'getting the height property' & 4

// proxyObj.weight = 120; // set a new property on the object
// proxyObj.weight; // logs 'getting the weight property' & 120


// const prox = new Proxy({name:"nik", age:25, sal: 15},{
//     get(targetObj,property){
//         console.log(`this the property name:  ${property} `)
//         console.log(`this is value: ${targetObj[property]}`);
//     }

// });

// prox.name;
// prox.age;
// prox.sal;
// prox.lap = 100;
// prox.lap;

// function* get


// console.log(new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// }).then(function(result) {
//   alert(result);
//   return new Promise((resolve, reject) => { // (*)
//     setTimeout(() => reject(result * 5), 1000);
//   });
// })
// .catch(function(result) {
//   alert(result);
//   return new Promise((resolve, reject) => { // (*)
//     setTimeout(() => resolve(result * 2), 1000);
//   });
// }).then(function(result) {
//   alert(result);
//   return result * 2;
// }))


// function * getEmployee() {
//   console.log('the function has started');

//   const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

//   for (const name of names) {
//       // console.log(name);
//       yield name;
//   }

//   console.log('the function has ended');
// }

// const generatorIterator = getEmployee();
// let result = generatorIterator.next();
// result.value;
// console.log(result.value);
// console.log(generatorIterator.next().value);
// console.log(generatorIterator.next().value);
// console.log(generatorIterator.next().value);
// console.log(generatorIterator.next().value);
// console.log(generatorIterator.next());
// console.log(generatorIterator.next());
// console.log(generatorIterator.next());

// function* udacity() {
//   yield 'Richard';
//   yield 'James'
// }
// console.log("=========================");
// const vr = udacity();
// console.log(vr.next())
// console.log(vr.next())

// console.log("===================");
// function* displayResponse() {
//   const response = yield;
//   console.log(`Your response is "${response}"!`);
// }

// const iterator = displayResponse();

// iterator.next(); // starts running the generator function
// iterator.next('Hello Udacity Student'); // send data into the generator
// // the line above logs to the console: Your response is "Hello Udacity Student"!


// function* createSundae() {
//   const toppings = [];

//   toppings.push(yield);
//   toppings.push(yield);
//   toppings.push(yield);

//   return toppings;
// }

// var it = createSundae();
// console.log(it.next('hot fudge'));
// console.log(it.next('sprinkles'));
// console.log(it.next('whipped cream'));
// console.log(it.next());
// console.log(it.return());

// console.log("=========================");
// function* getEmployee() {
//   const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
//   const facts = [];

//   for (const name of names) {
//       // yield *out* each name AND store the returned data into the facts array
//       facts.push(yield name); 
//   }

//   return facts;
// }
// function* getEmployee() {
//   const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
//   const facts = [];

//   for (const name of names) {
//       // yield *out* each name AND store the returned data into the facts array
      
//       facts.push(yield name); 
//       console.log(facts);
//   }
//   console.log(facts);
//   return facts;
// }


// const generatorIterator = getEmployee();

// // get the first name out of the generator
// let name = generatorIterator.next().value;

// // pass data in *and* get the next name
// name = generatorIterator.next(`${name} is cool!`).value; 

// // pass data in *and* get the next name
// name = generatorIterator.next(`${name} is awesome!`).value; 

// // pass data in *and* get the next name
// name = generatorIterator.next(`${name} is stupendous!`).value; 

// // you get the idea
// name = generatorIterator.next(`${name} is rad!`).value; 
// name = generatorIterator.next(`${name} is impressive!`).value;
// name = generatorIterator.next(`${name} is stunning!`).value;
// name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// // pass the last data in, generator ends and returns the array
// const positions = generatorIterator.next(`${name} is magnificent!`).value; 

// // displays each name with description on its own line
// console.log(positions.join('\n')); 

// console.log((generatorIterator.next()));


console.log(()=> { if(!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
   console.log("hi");
    return this.substr(position, searchString.length) === searchString;
  };
}});

console.log((!String.prototype.startsWith()));