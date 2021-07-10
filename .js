<<<<<<< HEAD
var x= 1;{
    var x = 2;
}
console.log(x); //2출력됨 ,안에있는 변수가 블록을 넘어감

do{
    i+=1;
    console.log(i); 
}while(i<5) //do는 최소 한번은 반복되고 i가5보다 커질때까지 반복 , do 문장 while 조건문

//while(조건문)문장, while 반복문은 n이 3보다 작은 한 계속 반복
n=0;
x=0;
while(n<3){
    n++;
    x+=n;
}

function map(f, a) {
    var result = []; // Create a new Array
    var i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
        return result;
  }
  var f = function(x) {
     return x * x * x;
  }
  var numbers = [0, 1, 2, 5, 10];
  var cube = map(f,numbers);
  console.log(cube); //0 1 8 125 1000

var myFunc;
if (num == 0){
myFunc = function(theObject) {
    theObject.make = "Toyota"
  }
} //num 이 0일때 myfunc 정의



var pet = function(name) {   // 외부 함수는 'name'이라 불리는 변수를 정의합니다.
    var getName = function() {
      return name;             // 내부 함수는 외부 함수의 'name' 변수에 접근합니다.
    }
    return getName;            // 내부 함수를 리턴함으로써, 외부 범위에 노출됩니다.
},
myPet = pet("Vivie");

myPet();                     // "Vivie"로 리턴합니다.
//클로저 - 함수의 중첩을 허용해 내부함수가 외부함수 안에서 정의된 모든 변수와 함수를 접근할 수 있도록 승인

var createPet = function(name) {  // 외부 함수가 "name" 이라는 변수를 정의하였다
    return {
      setName: function(name) {    // 내부 함수 또한 "name" 이라는 변수를 정의하였다
        name = name;               // ??? 어떻게 우리는 외부 함수에 정의된 "name"에 접근할까???
      }
    }
  } //잘못된 예시



dosomething(function(result){
  dosomethingElse(result,function(newResult){
    doThirdThing(newResult,function(finalResult){
      console.log('got the finial result:' +finalResult);    
    },failureCallback);
  },failureCallback);
},failureCallback);   //비동기적 작업 연속적으로 수행 = 콜백 피라미드 >>

dosomething().then(function(result){
  return dosomethingElse(result);
})
.then(function(newResult){
  return doThirdThing(newResult);
})
.then(function(finalResult){
  console.log('Got the final result:'+finalResult);
})
.catch(failureCallback);    //then에 넘겨지는 인자는 선택적임,마지막 문장은 then(null,failureCallback)의 축약

//arrow함수로 나타냈을 경우
dosomething()
.then(result=>dosomethingElse(result))
.then(newResult=>doThirdThing(newResult))
.then(finalResult=>{
  console.log('Got the final result: ${finalREsult}');
})
.catch(failureCallback);  //반환값이 반드시 있어야 콜백함수가 이전의 promise의 결과값을 받음



new Promise((resolve,reject)=> {
  console.log('initial');

  resolve();
})
.then(()=> {
  throw new Error('Something failed');

  console.log('Do this');
})
.catch(()=>{
  console.log('Do that');
})
.then(()=>{
  console.log('Do this,whatever happened before');
});   //결과값 = initial, Do that ,Do this whatever happend before


function Employee(){
  this.dept - "general";
  Employee.prototype.name = "";
}

function WorkerBee(){
  this.projects = {};
}
WorkerBee.prototype = new Employee;
var amy = new WorkerBee
Employee.prototype.name = "Unkown";
//object를 제외한 모든 객체는 proto라는 객체속성을 가진다. 모든 함수는 prototype라는 객체속성을 가진다. 
//JS는 특정객체가 함수로부터 상속받는 객체일 경우 참을 반환하는 instanceof 라는 연산자를 제공합니다. 
=======
(함수명{데이터})
//()=>x 는 ()=>{return x;} 와 같다
//object assign ,key 는 string으로만 쓸 수 있음
createAudioFileAsync(audioSettings)
.then(successCallback, failureCallback);
={const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback)};

//if else 문 
===console.log(sex==='condition'?'value1:'value') 

//for each method는 배열의 모든 요소에 대해 반복적으로 주어진 콜백함수 반복
var = a ['a','b','c']
a.forEach(function(element){console.log(element);});
//logs each item in turn

//map method는 배열의 모든 요소에 대해 콜백함수를 실행하고 콜백함수의 실행결과를 새로운 배열에 담아 반환
var a1 = ['a','b','c'];
var a2 = a1.map(function(item){return item.toUpperCase();});
console.log(a2); //logs['A','B','C']

//filter method는 배열의 모든 요소에 대해 콜백함수가 true를 반환하는 요소를 새로담아 반환
var a1 = ['a',10,'b',20,'c',30]
var a2 = a1.filter(function(item){return typeof item==='number';});
console.log(a2); //logs ['10','20','30']

//method 는 객체의 속성 중 함수인 것 

initializer 
while(exit - condition){
    code 
    final - expression
}

initializer
while(exit - condition{
    code
    final - expression
})while exit condition

for(initaializer;exit-condition;final-expression)
arr=357 , foo `hello`
for (let i in arr) console.log(i); // log 0 1 2 foo 속성의 이름이 결과값
for (let i of arr) console.log(i);// log 3 5 7 속성의 값


//ITERATOR
for each(call back,[thisObject]) - 배열의 모든 요소에 대해 반복적으로 주어진 콜백함수 실행
map(call back,[thisObject]) = 배열의 모든 요소에 대해 콜백함수를 실행하고, 실행결과를 새로운 배열에 담아 반환
filter(call back,[thisObject]) = 배열의 모든 요소에 대해 콜백함수가 true를 반환하는 요소를 새로운 배열에 담아 반환

promise(resolve,reject)
settimeout() - 괄호안의 시간이 지난뒤에 실행
setanimationframe() - 설정된 시간 사이에 함수반복
async - 동기함수로 만들어버림? await 로 안에서의 속도 조절
fetch?

import{function()}.from'./file'; <>export

var obj = object.create(null{
    x:{value:100,enumerable:true},
    y:{value:200,enumerable:true}
});
obj.x;
obj.y;
object.getPrototypeOf(obj); //객체의 프로토타입을 반환해줌

//일반함수
var foo = function() {console.log("foo")};
//arrow함수
var bar() =>console.log("bar")
//매개변수가 없는 경우
var foo =() ->console.log('bar');
foo(); //bar
//하나인 경우
var foo = x =>x;
foo('bar');//bar
//여러개인 경우 
var foo(a,b) =>a+b;
foo(1,2); //3
var foo = (a,b) =>{a+b};
foo(1,2) //undefined  중괄호 안에 return이 없기 때문
//일반함수가 전역에서 실행될 때 this가 정의하고 arrow함수는 this를 정의하지 않음
>>>>>>> d3d7bde9b93574b613797b6231e6d2b9f6514201
