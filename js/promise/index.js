// 创建一个新的promise对象
const p = new Promise((resolve, reject) => {  // 执行器函数
    // 执行异步操作任务
    setTimeout(() => {
        const time = Date.now()
        if (time %2 == 0) {
            resolve(time)
        } else {
            reject(time)
        }
    },1000)
})
p.then(
    value => {
        // 接收得到成功的value 数据 onResolved
       console.log(value) 
    },
    reason => {
        // 接收得到失败的reason数据   onRejected
        console.log(reason)
    }
)