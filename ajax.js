// const lottery = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       if(Math.random()>0.5){
//          resolve(`you won`)
//       }else{
//          reject(`you loose`)
//       }
//     },3000)
// })

// lottery.then((result)=>{
//   console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })

//promisification

// const wait = function(seconds){
//     return new Promise((res)=>{
//         setTimeout(res,seconds)
//     })
// }
// wait(1).then(()=>{console.log(`wait for 1 sec`)
// return wait(1)})

// function delay(ms) {
//     new Promise((res)=>{
//     setTimeout(res,ms)
//     })
// }
  
// delay(3000).then(() => alert('runs after 3 seconds'));


const delayedGreeting = function(sec,msg){
  return new Promise((res)=>{setTimeout(()=>{
    res(msg)
  },sec)})
}
delayedGreeting(5000, "Hello, world!").then((result) => {
    console.log(result); // Should output "Hello, world!" after 2 seconds
  })
  .catch((error) => {
    console.log(error);
  });