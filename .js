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
