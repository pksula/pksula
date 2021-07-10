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
