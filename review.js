// class MyPromise {
//   constructor(fn) {
//     this.value = null
//     this.callBacks = []
//     this.state = "pending"
//     fn(
//       (resolve) => { this._resolve(resolve) },
//       (reject) => { this._reject(reject) }
//     )
//   }

//   then(onFulfilled, onRejected) {
//     return new MyPromise((reject, resolve) => {
//       this.handle({
//         onFulfilled: onFulfilled || (() => {}),
//         onRejected: onRejected || (() => {}),
//         reject,
//         resolve,
//       })
//     })
//   }

//   catch(reject) {
//     return this.then(null, reject)
//   }

//   finally(res) {
//     return this.then(res, res)
//   }

//   handle(options) {
//     const { onFulfilled, onRejected, reject, resolve } = options
//     if (this.state === "pending") {
//       this.callBacks.push(options)
//     }
//     else if (this.state === "fulfilled") {
//       try {
//         resolve(onFulfilled(this.value) || this.value)
//       }catch(e) {
//         this.state = "rejected"
//         reject(e || onRejected(this.value) || this.value)
//       }
//     }
//     else if (this.state === "rejected") {
//       reject(onRejected(this.value) || this.value)
//     }
//   }

//   _resolve(value) {
//     this.value = value
//     this.state = "fulfilled"
//     this.callBacks.forEach(i => {
//       this.handle(i)
//     })
//   }
//   _reject(value) {
//     this.value = value
//     this.state = "rejected"
//     this.callBacks.forEach(i => {
//       this.handle(i)
//     })
//   }
// }


// const p = new MyPromise((res, rej) => {
//   res(1)
// })

// p.then((res) => {
//   console.log(res);
//   return res + 1
// }).then((err) => {
//   console.log('err', err);
//   return err + 1
// }).then((res) => {
//   console.log(res);
//   return res + 1
// }).then((res) => {
//   console.log(res);
//   return res + 1
// }).then((res) => {
//   console.log(res);
//   return res + 1
// }).finally(() => {
//   console.log("finally");
// })

// const arr = [
//   { id: 0, pid: -1 },
//   { id: 1, pid: 0 },
//   { id: 2, pid: 0 },
//   { id: 3, pid: 1 },
//   { id: 4, pid: 1 },
//   { id: 5, pid: 2 },
// ]

// const tree = {}

// function renderTree(arr, tree) {
//   if(tree.id === undefined) {
//     arr.filter(i => { i.pid === -1 })
//     tree.id = arr[0].id
//     tree.pid = arr[0].pid
//     tree.children = []
//     renderTree(arr.filter(i => i.id!==tree.id), tree)
//   }else {
//     for (const item of arr) {
//       if(item.pid === tree.id) {
//         tree.children.push({
//           ...item,
//           children: []
//         })
//       }
//     }
//     if(tree.children.length) {
//       for (const item of tree.children) {
//         renderTree(arr.filter(i => i.id!==tree.id), item)
//       }
//     }
//   }
// }
// renderTree(arr, tree)
// console.log(JSON.stringify(tree));

// const arr = [2, 1, 5, 2, 3, 56, 8, 09, 3]

// ??????
// function sort(array) {
// let flag = 0
// for (let index = 1; index < array.length; index++) {
// if(array[index] > array[index - 1]) {
// const a = array[index],
// b = array[index - 1]
// array[index] = b
// array[index -1] = a
// flag = 1
// }
// }
// if(flag) sort(array)
// else return array
// }

// ??????
// function sort(array) {
//   let target = []
//   delTarget = (item) => {
//     let j = target.length - 1
//     console.log(j);
//     for (; j >= 0; j--) {
//       const targetItem = target[j];
//       // console.log(targetItem, item);
//       if(targetItem > item ) {
//         target.splice(j, 0, item)
//         return 
//       }
//     }
//     target.push(item)
//   }
//   for (let index = 0; index < array.length; index++) {
//     const item = array[index];
//     if(target.length===0) {
//       target.push(item)
//     }else {
//       delTarget(item)
//     }
//   }
//   return target
// }

// ??????
// function sort(arr) {
//   if (arr.length <= 1) return arr // ?????????????????????????????????????????????
//   const flag = arr.splice(0, 1)[0]
//   const left = arr.filter(i => {
//     return i <= flag
//   })
//   const right = arr.filter(i => {
//     return i > flag
//   })
//   return sort(left).concat(flag, sort(right))
// }

// console.log(sort(arr))