## 三栏布局

左右固定，中间自适应。

给定结构：

```html
<style>
    .left, .right {
        width: 200px;
        height: 600px;
        background-color: green;
    }
    .main {
        background-color: blue;
    }
</style>
<body>
    <div class="page">
        <div class="left">left</div>
        <div class="main">main</div>
        <div class="right">right</div>
    </div>
</body>
```

### flex

```css
.page {
    display: flex;
}
.main {
    flex: 1;
}
```

### position + margin

```css
.page {
    position: relative;
}
.left {
    position: absolute;
    top: 0;
    left: 0;
}
.right {
    position: absolute;
    top: 0;
    right: 0;
}
.main {
    background-color: blue;
    margin: 0 200px;
}
```

### float + margin

该方法需要将右侧边写在`main`前面，即先写浮动元素，再写内容区元素。因为HTML是自上而下渲染的。

```css
.left {
    float: left;
}
.right {
    float: right;
}
.main {
    margin: 0 200px;
}
```

