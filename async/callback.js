 'use strict';

// JavaScript is synchronous.
// Execute the code black by order after hoisting .

 // what is hoisting?!
 //var , function declaration 들이 맨 위로 올라가는것


 //console.log('1')
 //console.log('2')
 //console.log('3')
 // 예를 들어 이것은 작성한 순서대로 출력이 되는데, 이런식으로 코트가 정해 잔 순서대로 실행이 되는것이 synchronous.
 //asynchronous 는 비동기적 으로 언제 코드가 실행될 지 예측할 수 없는 것.
 //setTimeout(a ,b)
 //a: function that has been declared
 //b: time, so ,,, when ?!

 //setTimeout(a, b) means call back "a function " in "b" time
console.log('1')
 setTimeout(function(){
     console.log('2')
 },2000);
console.log('3')
 //this will show 1 3 2 because of time delayed (2000ms) call back function ,

 console.log('4');
setTimeout(()=>console.log('5'),2000);
console.log('6');


//synchronous call-back 즉각적인,
function printImmediately(print){
    print();
}
printImmediately(function(){
    console.log('hello')
})

 //asynchronous call back // 나중에, 언제 실행 될지 모르는 아싱크로너스
 function printWithDelay(print, timeout){
    setTimeout(print, timeout);
 }
 printWithDelay(()=>console.log(`async callback`),2000)



 /////////////////////////////////////////callback hell example

 class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() =>{
            if(
                (id==='mina' && password==='rainbow')||
                (id==='coder' && password ==='student')
            ){onSuccess(id)
            }else{
                onError(new Error('not found')  )
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
        if(user==='mina'){
            onSuccess({name:'mina', role:'admin'});
        }else{
            onError(new Error('no access'))
        }
    },1000)
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id')
 const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user=>{
        userStorage.getRoles(
            user,
            userWithRoles=>{
                alert(`${userWithRole.name}, you have a  ${userWithRole.role} role`
                )
            },
            error =>{
                console.log(error)
            }
        )
    },
    error=>{
        console.log(error)
    }
)