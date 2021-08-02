class MyPromise {
  constructor(fn) {
    this.state = "pending"
    this.value = null
    this.callBacks = []
    fn(
      (response) => {
        this.state = "fulfilled"
        this.callBackHandle(response)
      },
      (error) => {
        this.state = "rejected"
        this.callBackHandle(error)
      }
    )
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this._handle({
        onFulfilled: onFulfilled || (() => { return this.value }),
        onRejected: onRejected || (() => { return this.value }),
        resolve,
        reject
      })
    })
  }

  catch(reject) {
    return this.then(null, reject)
  }

  finally(cb) {
    return this.then(cb, cb)
  }

  _handle(cb) {
    const errorHandle = (e) => {
      cb.reject(e || cb.onRejected(this.value))
    }
    if(this.state === "pending") {
      this.callBacks.push(cb)
    }
    else if(this.state === "fulfilled") {
      try {
        cb.resolve(cb.onFulfilled(this.value))
      }catch(e) {
        errorHandle(e)
      }
    }
    else {
      errorHandle()
    }
  }

  callBackHandle(value) {
    this.value = value
    this.callBacks.forEach(i => {
      this._handle(i)
    })
  }
}

const p = new MyPromise((res, rej) => {
  setTimeout(() => {
    res(1)
  },1000)
})

p.then((res) => {
  console.log(res);
  return res+1
}).then((res) => {
  console.log(res);
  return res+1
}).then((res) => {
  console.log(res);
  return res+1
}).then((res) => {
  console.log(res);
  return res+1
}).then((res) => {
  console.log(res);
  return res+1
})