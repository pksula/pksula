createAudioFileAsync(audioSettings)
.then(successCallback, failureCallback);
={const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback)};

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

promise(resolve,reject)
settimeout() - 괄호안의 시간이 지난뒤에 실행
setanimationframe() - 설정된 시간 사이에 함수반복
async - 동기함수로 만들어버림? await 로 안에서의 속도 조절

import{function()}.from'./file'; <>export
