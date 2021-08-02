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

const mp = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 1000);
})

mp
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log("err：", err);
  })
  .finally(() => {
    console.log("我最后祝你发大财");
  })
