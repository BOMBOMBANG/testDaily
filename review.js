class MyPromise {
  constructor(fn) {
    this.state = "pending"
    this.value = null
    this.callBacks = []
    fn(
      res => {
        this.state = "fulFilled"
        this.thenHandle(res)
      },
      err => {
        this.state = "rejected"
        this.thenHandle(err)
      }
    )
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const defaultCb = () => {
        return this.value
      }
      this._handle({
        onFulfilled: onFulfilled || defaultCb, 
        onRejected: onRejected || defaultCb,
        resolve,
        reject
      })
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  finally(cb) {
    return this.then(cb, cb)
  }

  _handle(cb) {
    const handleError = (e) => {
      cb.reject(e || cb.onRejected(this.value) || this.value)
    }
    const
      pending = () => {
        this.callBacks.push(cb)
      },
      fulFilled = () => {
        try {
          cb.resolve(cb.onFulfilled(this.value) || this.value)
        } catch (e) {
          handleError(e)
        }
      },
      rejected = () => {
        handleError()
      }
    const delMap = {
      pending,
      fulFilled,
      rejected
    }
    delMap[this.state]()
  }

  thenHandle(value) {
    this.value = value
    this.callBacks.forEach(i => {
      this._handle(i)
    })
  }
}


const p = new MyPromise((res, rej) => {
  setTimeout(() => {
    rej(1)
  }, 1000)
})

p.then((res) => {
  console.log(res);
  return res + 1
}).catch((res) => {
  console.log(res);
  return res + 1
}).then((res) => {
  console.log(res);
  return res + 1
}).then((res) => {
  console.log(res);
  return res + 1
}).then((res) => {
  console.log(res);
  return res + 1
}).finally(() => {
  console.log("finally");
})