## 生命周期

### React 16.0

![React16.0](https://user-gold-cdn.xitu.io/2019/12/15/16f0a0b3df44f29c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 初始化阶段

- `setup props and state`：初始化 `props` 和 `state`

  ```js
  import React, { Component } from 'react';
  
  class Test extends Component {
    constructor(props) {
      super(props);
    }
      //constructor用来做一些组件的初始化工作，如定义this.state
      //super(props) 用来调用基类的构造方法，将父组件的props传给子组件，供子组件读取
  }
  ```

### 挂载阶段

- `componentWillMount`：在组件挂在到DOM之前调用，且只调用一次，在此阶段setState不会引起组件重新渲染，所以很少在这个阶段setState，可用`constructor`替换。
- `render`：根据组件的`props`和`state`，`return`一个`React`元素（描述组件，UI）。无论`props`和`state`的重传递还是重赋值，不管值是否有变化，都会引起组件更新。不能在这执行`this.state`，会有改变组件状态的副作用。
- `componentDidMount`：组件挂在到DOM后调用，只执行一次。可以对`DOM`进行操作，这个函数之后`ref`变成实际的`DOM`。可以加载服务器数据，如果使用`redux`之类的服务器，可以触发加载服务器数据的`action`。可以使用`setState`

#### 更新阶段

更新阶段分两种情况：

- 父组件重新`render`
  - `componentWillReceiveProps(nextProps)`：已经挂载的组件接收到新的`props`时触发。如果需要在`props`来更新`state`，需要比较`this.props`和`nextProps`，然后调用`this.setState`来触发当前组件的重新`render`。
  - `shouldComponentUpdate(nextProps, nextState)`：在接收到新的`props`或`state`时触发。在此阶段通过对比`nextProps`、`nextState`及当前组件的`this.props`和`this.state`来确认是否发生重新渲染，默认返回`true`。
  - `componentWillUpdate(nextProps, nextState)`：在`render`前执行。不能调用`this.setState`。
  - `render`：与挂载阶段相同
  - `componentDidUpdate(prevProps, prevState)`：可以对组件中`DOM`进行操作。
- 通过组件自身调用`setState`

### 卸载阶段

`componentWillUnmount`：组件在被卸载前调用，可以执行 一些清理工作，如清除组件中 使用的定时器等。

### React16.4+

![React17.0](https://user-gold-cdn.xitu.io/2019/12/15/16f0a0b3e20fa9aa?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

相对比与`React16.0`及之前的版本。

`React16.4`废弃了（但并未删除）三个生命周期：`ComponentWillMount`、`componentWillReceiveProps`、`componentWillUpdate`。

新增了`getDerivedStateFromProps`、和`getSnapshotBeforeUpdate`两个生命周期。

#### 挂载阶段

- `constructor`：初始化`state`对象或给自定义方法绑定`this`
- `static getDerivedStateFromProps(nextProps,prevState)`：接收到新的属性去修改我们`state`。
- `render`
- `componentDidMount`

#### 更新阶段

- `static getDerivedStateFromProps(nextProps,prevState)`
- `shouldComponentUpdate`
- `render`
- `getSnapshotBeforeUpdate(prevProps,prevState)`：该声明周期会有一个返回值，作为第三个参数传给`componentDidUpdate`，如不想要，可返回`null`。
- `componentDidUpdate`

#### 卸载阶段

`componentWillUnmount`



