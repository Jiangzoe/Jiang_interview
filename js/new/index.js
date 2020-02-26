function mockNew () {
    // 创建一个新的对象
    const obj = {}
    // 取出构造函数
    const Constructor = [].shift.call(arguments)
    // 对象继承构造函数原型属性方法
    obj.__proto__ = Constructor.prototype
    Constructor.apply(obj, arguments)
    return obj
}