## null

### null与undefined区别

- `undefined`代表定义未赋值
- `null`定义了并赋值了，只是值为`null`

### 什么时候给变量赋值为null

- 初始赋值，表明将要赋值为对象
- 结束前，让对象成为垃圾对象（被垃圾回收器回收）

```js
var b = null
b = [1， 12]
b = null
```
