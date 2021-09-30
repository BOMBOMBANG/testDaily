/**
 * 提供一个concurrent方法
 * 入参为一个promises(Promise数组)，limit(最大并发数)
 * 控制promises的并发数为limit
 */
function concurrent(promises, limit) {
  let pool = [] // 并发池

  const createTask = (promise) => {
    promise.finally(() => {
      // console.log(pool);
      pool.splice(pool.indexOf(promise), 1)
    })
    return promise
  }

  const race = () => {
    Promise.race(pool)
      .then((res) => {
        // console.log(res);
      })
      .finally(() => {
        check()
      })
  }

  const check = () => { // 检查并发池
    if (promises.length && pool.length < limit) {
      pool.push(createTask(promises.shift()))
      check()
    } else {
      race()
    }
  }
  check()
}

const a = new Promise(res => {
  setTimeout(() => {
    res("a")
  }, 1000)
})
const b = new Promise(res => {
  setTimeout(() => {
    res("b")
  }, 1000)
})
const c = new Promise(res => {
  setTimeout(() => {
    res("c")
  }, 1000)
})
const d = new Promise(res => {
  setTimeout(() => {
    res("d")
  }, 1000)
})
const e = new Promise(res => {
  setTimeout(() => {
    res("e")
  }, 1000)
})
concurrent([a, b, c, d, e], 2)