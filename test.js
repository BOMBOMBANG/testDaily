/** 节点
// const arr = [
//   { id: 0, pid: -1 },
//   { id: 1, pid: 0 },
//   { id: 2, pid: 0 },
//   { id: 3, pid: 1 },
//   { id: 4, pid: 1 },
//   { id: 5, pid: 2 },
// ]

// const nodes =
// {
//   id: 0, pid: -1,
//   children: [
//     {
//       id: 1, pid: 0,
//       children: [
//         { id: 3, pid: 1 },
//         { id: 4, pid: 1 }
//       ]
//     },
//     {
//       id: 2, pid: 0,
//       children: [
//         { id: 5, pid: 2 }
//       ]
//     },
//   ]
// }

// const node = {}
// function test(arr, node) {
//   if(node.id === undefined) {
//     const target = arr.find(i => i.pid===-1)
//     for (const key in target) {
//       node[key] = target[key]
//     }
//     test(arr.filter(i => i.pid!==-1), node)
//   }
//   else {
//     const children = arr.filter(i => i.pid===node.id)
//     const other = arr.filter(i => i.id!==node.pid)
//     if(children.length) node.children = children
//     if(children.length> 0 && other.length>0) {
//       for (const item of children) {
//         test(other, item)
//       }
//     }
//   }
// }
// test(arr, node)
// console.log(JSON.stringify(node) === JSON.stringify(nodes))
 */

/** 排序
let arr = [5, 3, 67, 2, 3, 4, 6, 890, 22]

// 冒泡
// function sortArr(arr) {
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index + 1] !== undefined && arr[index] > arr[index + 1]) {
//       let j = arr[index + 1]
//       arr[index + 1] = arr[index]
//       arr[index] = j
//       sortArr(arr)
//       break
//     }
//   }
// }

// 插入
// function sortArr(arr) {
//   const target = []
//   arr.forEach((item,idx) => {
//     for (let index = 0; index < target.length; index++) {
//       if(target[index] > item){
//         target.splice(index, 0, item)
//         return
//       }
//     }
//     target.push(item)
//   });
//   arr.splice(0,arr.length,...target)
//   return target
// }

// 快排
// function sortArr(arr) {
  // if (arr.length <= 1) { return arr; }
  // const pivotIndex = 0; // 已数组第一位为基准值
  // const pivot = arr.splice(pivotIndex, 1)[0];//splice剔除中间值，防止判断时重复存入数组 必须要，要不然很容易陷入死循环
  // const left = [];
  // const right = [];
  // for (var i = 0; i < arr.length; i++) {
    // if (arr[i] < pivot) {
      // left.push(arr[i]);
    // } else {
      // right.push(arr[i]);
    // }
  // }
  // return sortArr(left).concat([pivot], sortArr(right));
//  };

// 选择排序
// function sortArr(arr, target = []) {
//   let maxIdx = 0
//   arr.forEach((item, idx) => {
//     if(arr[maxIdx] < item) maxIdx = idx
//   });
//   target.push(arr[maxIdx])
//   arr.splice(maxIdx, 1)
//   if(arr.length > 0) sortArr(arr, target)
//   else arr.splice(0, 0, ...target)
// }

// sortArr(arr)

// console.log(arr);
*/

// class MyPromise {
//   constructor(cb) {
//     this.callBacks = []
//     this.state = 'pending' //增加状态
//     this.value = null //保存结果
//     cb(
//       this._resolve.bind(this),
//       this._reject.bind(this)
//     )
//   }

//   then(onFulfilled, onReject) {
//     const defaultCb = function () { return false }
//     return new MyPromise((resolve, reject) => {
//       this._handle({
//         resolve,
//         onFulfilled: onFulfilled || defaultCb,
//         reject,
//         onReject: onReject || defaultCb,
//       })
//     })
//   }

//   catch(onReject) {
//     return this.then(null, onReject)
//   }

//   finally(finallyCb) {
//     return this.then(finallyCb, finallyCb) // 不管成功还是失败，都做finallyCb处理
//   }

//   /**
//    * 用于回调成功后，实现then的链式调用
//    */
//   _handle(cb) {
//     if (this.state === 'pending') {
//       this.callBacks.push(cb)
//     }
//     else if (this.state === 'fulfilled') {
//       try {
//         cb.resolve(cb.onFulfilled(this.value) || this.value)
//       } catch (e) {
//         this.state = "reject"
//         cb.reject(e)
//       }
//     }
//     else if (this.state === 'reject') {
//       cb.reject(cb.onReject(this.value) || this.value || "your promise is rejected by an unknown error")
//     }
//   }

//   _resolve(response) {
//     this.state = 'fulfilled';//改变状态
//     this.value = response;//保存结果
//     this.callBacks.forEach(cb => {
//       // cb(response)
//       this._handle(cb)
//     });
//   }

//   _reject(error) {
//     this.state = 'reject';//改变状态
//     this.value = error;//保存结果
//     this.callBacks.forEach(cb => {
//       // cb(response)
//       this._handle(cb)
//     });
//   }

// }

// const mp = new MyPromise((resolve, rej) => {
//   setTimeout(() => {
//     rej(1)
//   }, 1000);
// })

// mp
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log("err：", err);
//     return 3
//   })
//   .then((res) => {
//     console.log(res);
//   })

// 斐波那契数
// let fibList = []
// function fib() {
//   let length = fibList.length
//   if (length < 2) {
//     fibList.push(fibList.length)
//     length = fibList.length
//     return fibList[length - 1]
//   }
//   fibList.push(fibList[length - 1] + fibList[length - 2])
//   fibList.splice(0,1)
//   return fibList[1]
// }
// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())


// 找target下标
// const target = 100,
//       nums = [1,2,30,98,70]
// function getIndexOfTarget(target, nums) {
//   let indexList = []
//   for (let i = 0; i < nums.length; i++) {
//     const item1 = nums[i];
//     for (let j = i; j < nums.length; j++) {
//       const item2 = nums[j];
//       if(item1 + item2 === target) indexList.push([i, j])
//     }
//   }
//   return indexList.length ? indexList : "什么都没有"
// }
// console.log(getIndexOfTarget(target, nums))

// 变量提升
// var a = 10
// function aaa() {
//   console.log(a);
//   var a = 100 //变量声明被提前了，但是赋值还是在这一行
//   console.log(a);
// }
// aaa()

// 随机数
// const arr = [1,2,3,4,45,5,6,7,8,9,10]
// function getMNums(arr) {
//   const m = Math.floor(Math.random() * arr.length) + 1,
//         savedList = []
//   for (let i = 0; i < m; ) {
//     let index = Math.floor(Math.random() * arr.length)
//     if(!savedList.includes(index)) {
//       i++
//       savedList.push(index)
//     }
//   }
//   return savedList.map((i) => arr[i])
// }
// console.log(getMNums(arr))

// // 回文
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var validPalindrome = function (s) {
//   function isBackWord(str) {
//     let left = "", right = ""
//     if (str.length % 2 === 0) {
//       const length = str.length / 2
//       left = str.slice(0, length)
//       right = str.slice(length).split("").reverse().join("")
//     }
//     else {
//       const length = (str.length + 1) / 2
//       left = str.slice(0, length - 1)
//       right = str.slice(length).split("").reverse().join("")
//     }
//     return left == right
//   }

//   if (isBackWord(s)) {
//     return true
//   }
//   for (let index = 0; index < s.length; index++) {
//     let str = s.slice(0, index).concat(s.slice(index + 1))
//     if (isBackWord(str)) {
//       return true
//     }
//   }
//   return false
// };

// 第三大的数
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var thirdMax = function (nums) {
//   const arr = Array.from(new Set(nums)).sort((a,b) => b - a)
//   return arr.length >= 3 ? arr[2] : arr[0]
// };
// console.log(thirdMax([1,2,2,2,2,21,1,1,1,13,4,5,6]))

// 二叉树两节点间的公共祖先
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {TreeNode}
//  */
// var lowestCommonAncestor = function (root, p, q) {
//   function isLeft(n1, n2) {
//     return Boolean(n2 <= n1)
//   }
//   for (let index = 0; index < root.length; index++) {
//     let item = root[index]
//     if (item && isLeft(item, p) !== isLeft(item, q)) {
//       return item
//     }
//   }
// };
// const root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// console.log(lowestCommonAncestor(root, p, q))

// root = {
//   val: 6,
//   left: {
//     val: 2
//   },
//   right: {
//     val: 8,
//     left: {
//       value: 7
//     },
//     right: {
//       value: 9
//     }
//   }
// }

// 出勤天数
// 'A'：Absent，缺勤
// 'L'：Late，迟到
// 'P'：Present，到场
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
//  var checkRecord = function(s) {
//   if(s.includes("LLL")) return false
//   let countA = 0
//   for (let index = 0; index < s.length; index++) {
//     const item = s[index];
//     if(item === "A") {
//       countA++
//       if(countA >= 2) return false
//     }
//   }
//   return true
// };

// 出勤天数进阶
/**
 * @param {number} n
 * @return {number}
 */
// var checkRecord = function(n) {

// };

// 计算路径
// const conf = {
//   a: ["c", "b"],
//   c: ["d"],
//   b: ["e"]
// }

// function getPaths(conf) {
//   const paths = []
//   const checkPath = (key, basePath = "a") => {
//     if(!conf[key]) {
//       paths.push(basePath)
//     }else {
//       for (const item of conf[key]) {
//         checkPath(item, basePath + " -> " + item)
//       }
//     }
//   }
//   checkPath("a")
//   return paths
// }

// getPaths(conf)

// /**
//  * @param {number} num
//  * @return {number}
//  */
//  var addDigits = function(num) {
//   let target = num.toString()
//   const checkTarget = (target) => {
//       if(target.length > 1) {
//           let newTarget = 0
//           for(let i of target) {
//               newTarget = parseInt(i) + newTarget
//           }
//          return checkTarget(newTarget.toString())
//       }else {
//         return parseInt(target)
//       }
//   }
//   return checkTarget(target)
// };

// console.log(addDigits(38));

const p1 = new Promise((res) => {
  console.log("p1");
  res()
}).then(() => {
  return 1
})

const p2 = p1.then(res => {
  console.log(res);
  return 2
})

const p3 = p2.then(res => {
  console.log(res);
  return Promise.resolve("666")
})

p3.then(res => {
  console.log(res);
})
console.log("test");