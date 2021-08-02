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
//     ifchildren.length) node.children = children
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
  // const pivot = arr.splice(pivotIndex, 1)[0];//splice剔除中间值，防止判断时重复存入数组
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

class MyPromise {
  constructor(cb) {
    this.callBacks = []
    this.state = 'pending' //增加状态
    this.value = null //保存结果
    cb(
      this._resolve.bind(this),
      this._reject.bind(this)
    )
  }

  then(onFulfilled, onReject) {
    const defaultCb = function () { return false }
    return new MyPromise((resolve, reject) => {
      this._handle({
        resolve,
        onFulfilled: onFulfilled || defaultCb,
        reject,
        onReject: onReject || defaultCb,
      })
    })
  }

  catch(onReject) {
    return this.then(null, onReject)
  }

  finally(finallyCb) {
    return this.then(finallyCb, finallyCb) // 不管成功还是失败，都做finallyCb处理
  }

  /**
   * 用于回调成功后，实现then的链式调用
   */
  _handle(cb) {
    if (this.state === 'pending') {
      this.callBacks.push(cb)
    }
    else if (this.state === 'fulfilled') {
      try {
        cb.resolve(cb.onFulfilled(this.value) || this.value)
      } catch (e) {
        this.state = "reject"
        cb.reject(e)
      }
    }
    else if (this.state === 'reject') {
      cb.reject(cb.onReject(this.value) || this.value || "your promise is rejected by an unknown error")
    }
  }

  _resolve(response) {
    this.state = 'fulfilled';//改变状态
    this.value = response;//保存结果
    this.callBacks.forEach(cb => {
      // cb(response)
      this._handle(cb)
    });
  }

  _reject(error) {
    this.state = 'reject';//改变状态
    this.value = error;//保存结果
    this.callBacks.forEach(cb => {
      // cb(response)
      this._handle(cb)
    });
  }

}

const mp = new MyPromise((resolve, rej) => {
  setTimeout(() => {
    rej(1)
  }, 1000);
})

mp
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log("err：", err);
    return 3
  })
  .then((res) => {
    console.log(res);
  })
