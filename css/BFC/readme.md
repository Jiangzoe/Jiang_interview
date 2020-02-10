## BFC

块级格式化上下文，是一个独立的渲染区域，并且有一定的布局规则。

布局规则：

- 内部的Box会在垂直方向，一个接一个地放置。
- `Box`垂直方向的距离由`margin`决定。属于同一个`BFC`的两个相邻`Box`的`margin`会发生重叠
- `BFC`的区域不会与`float box`重叠。
- `BFC`就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算`BFC`的高度时，浮动元素也参与计算

如何生成`BFC`：

- 根元素
- `float`不为`none`的元素
- `position`为`fixed`和`absolute`的元素
- `display`为`inline-block、table-cell、table-caption，flex，inline-flex`的元素
- `overflow`不为`visible`的元素

参考文章：[BFC原理及其应用](https://blog.csdn.net/wky_csdn/article/details/73554720)
