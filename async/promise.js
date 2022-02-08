'use strict'

// promise : 약속 - 비동기를 간편하게 처리 할 수 있도록 도와주는 오브젝트.
// ex)예를 들어, 온라인 수업이 곧 올라온다. 내가 관심이 있어서, 미리 등록을 했는데 ,
// 시간이 지난 후, 온라인 수업이 올라 왔을떄, 나에게 메일로 수업에 잘 등록 됬다고, 이메일이 옴 - promise 가 성공적으로 값을 전달


// Promise is a JavaScript Object for asynchronous operation.
//state : pending -> fulfilled state or rejected stated.
//Producer  vs Consumer.

//1. Producer
//when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve,reject)=>{
    //doing something heavy work (network read file)
    console.log('doing something.. ');
    setTimeout(()=>{
        resolve('mina');
        reject(new Error('no network'))
    },2000)
})

//2.Consumer : then, catch, finally
promise
    .then((value)=>{
    console.log(value) // when successful
})
    .catch(error =>{
        console.log(error) // when failed
    })
    .finally(()=>{
        console.log('finally') // whether succeeded or failed, 어떤기능을 마지막으로 무조건 수행 하고 싶을떄.
    })

//3. Promise Chaining.
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000)
})
fetchNumber
    .then(num =>num*2)
    .then(num => num*3)
    .then(num =>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(num-1),1000)
        })
    })
    .then(num=>console.log(num))

//4. Error handling

const getHen = ()=>
    new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('🐓'),1000)
    });

const getEggs = (hen)=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject(new Error(`error !! ${hen}=>🥚`)),1000)
    })

const cook = (egg)=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(`${egg} =>🍳`),1000)
    })

// getHen()
//     .then(hen=> getEggs(hen))
//     .then(egg=> cook(egg))
//     .then(meal=>console.log(meal))
getHen()
    .then(getEggs)
    .catch(error=>{
        return `🍞`
    })


getHen()
    .then(getEggs)
    .then(cook)
    .then(console.log)


