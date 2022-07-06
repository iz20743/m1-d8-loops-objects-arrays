/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/




let positveValues = [
    2,4,6,8,10
]

console.log(positveValues)






/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/



let mySelf = {
    name :"Ibrahim",
    surname : "Zulfiqar",
    email : "malikibrahim259@yahoo.com",
    age : 25
    
}

console.log(mySelf)






/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/



mySelf.drivingLicense = true;
console.log(mySelf)




//  EXERCISE 4
//  Remove from the previously created object the age property.



delete mySelf.age;
console.log(mySelf)


/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/




let mySelf2 = Object.assign({}, mySelf);
mySelf2.email = "zulfiqaribrahim368@gmail.com";
console.log(mySelf2)
console.log(mySelf)



/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/


let item = 3;
let amountPerItem =13;
let totalShoppingCart = item * amountPerItem;
console.log(totalShoppingCart)
if(totalShoppingCart > 50){
    console.log("free shipping");
}
else{
    console.log("10$ per shipping")
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */

let discount = .20;
let totalDiscount = totalShoppingCart /.20
if(totalShoppingCart > 50){
    console.log("free shipping");
}
else{
    console.log("10$ per shipping")
}


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */



let  car1 = {
    brand :"toyota",
    model : "2013",
    licensePlate : "abc123", 
}
console.log(car1);

let car2 = Object.assign({}, car1);
car2.licensePlate = "1bc456";
console.log(car2);

let car3 = Object.assign({}, car1);
car3.licensePlate = "1bc457";
console.log(car3);

let car4 = Object.assign({}, car1);
car4.licensePlate = "1bc458";
console.log(car4);

let car5 = Object.assign({}, car1);
car5.licensePlate = "1bc459";
console.log(car5);

let car6 = Object.assign({}, car1);
car6.licensePlate = "1bc410";
console.log(car6);



/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

let cartype = {
    brand: "toyota",
    color: "blue",


}
console.log(typeof cartype.brand);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
