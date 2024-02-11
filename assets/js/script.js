let countries=["Azerbaijan","Turkish","Russian","Ukrain"];
// console.log(countries.length);

//?Pop methodu geriden evvele dogru elementleri silir..
// countries.pop();
// countries.pop();
// countries.pop();
// countries.pop();

//? Push sona element elave edirem..
// countries.push("Georgia", 123,"Indian","French",true);
// countries.push(10);


//? Shift arrayin evvelin element elave silir...
// countries.shift();

// ? Unshift ile arrayin elementinin evveline elave edirik..
// countries.unshift("Georgia");
// countries.unshift("Island");
// countries.unshift(10);
// countries.unshift(true);
// countries.unshift(false);

// let numbers=[10,12,423,30,55];

// ? Join  arraye biz verdiyimiz ishareye keyworde gore arrye-i stringe cevirir.
// console.log(numbers.join("-A-"))

// ? ToString()


// console.log(numbers.toString())




// ? Concat iki array-i bir  birine birleshdirir.

// let oddNumbers =[1,11,35,67,87];
// let cities=["Baku","Qazax","Ismayilli"];
// let isBoolean=[true,false];
// let strings=["salam","dasd",'asda']
// console.log(oddNumbers.concat(cities,strings,isBoolean))

// console.log(oddNumbers.concat(evenNumbers))

//? delete

// ? slice

// const cars =["BMW","Volvo","Mercedes","Niva","Wolsvage","GM-220","06"];
// const words="Baku is Azerbaijan Capital!!"

// console.log(words.slice(0,20))

// ? at indekslemeye gore elementi qaytarir.

// const fruits =["Apple","Orange","Mango","Kiwi"];
// fruits.splice(2,2,"Watermelon","Potato","Banana");
// console.log(fruits)

// let fruit = fruits.at(3);

// const numbers=[10,120,80,88,1230,"da",123];
// numbers.copyWithin(4)
// console.log(numbers)


// ? Function

// for (let i = 0; i <100; i++) {
//   if(i%2==0){
//     console.log(i)
//   }
// }
// for (let i = 0; i <100; i++) {
//   if(i%2!=0){
//     console.log(i)
//   }
// }

// for (let i = 0; i <100; i++) {
//   if(i%3==0){
//     console.log(i)
//   }
// }



//? iki reqemin cemin tap.
//? NAMED FUNCTION
// function twoNumberSum(// ? paramentrs a,b,c  ){
// function twoNumberSum(a,b,c  ){
// console.log(a+b) 
// }

// twoNumberSum(10,30,20);
// twoNumberSum( //? argument 10,30,20);

// twoNumberSum(3,5);
// twoNumberSum(13,35);
// twoNumberSum(24,40)

//? 1-100 qeder tek elementlerin sayin tapan function yazin.

function TekEdedSayi(a){
  let count =0;
  let sum =0;
  for (let i = 0; i < 100; i++) {
   if(i%a==0){
    sum+=i;
    count++;
   }
  }
  console.log(count,sum)
}

TekEdedSayi(3)