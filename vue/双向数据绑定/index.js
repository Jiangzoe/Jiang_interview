function defineReactive (obj, key, val) {
    //为属性添加订阅者
    var dep = new Dep()
    Object.defineProperty(obj, key, {
        get: function() {
            // watcher的实例
            if (dep.target) {
                // 将订阅者添加到Dep实例对象
                dep.addSub(Dep.target)
            }
            return val
        },
        set: function (newVal) {
            if (newVal = val) return
            val = newVal
            // 作为发布者发出通知，然后dep迭代调用各自的update方法来更新视图
            dep.notify()
        }
    })
}
function observe(obj, vm) {
    Object.keys(obj).forEach((key) => {
        defineReactive(vm, key, obj[key])
    })
}