## 清除浮动

主要目的：防止父元素坍塌

给定结构：

```html
<style>
    .page {
        background-color: green;
    }
    .content {
        width: 100px;
        height: 100px;
        background-color: blue;
        float: left;
    }
</style>
<body>
    <div class="page clearfix">
        <div class="content">content</div>
    </div>
</body>
```

### 伪类

```css
.clearfix::after {
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
}
```

### 额外加div

在浮动元素后加一个`div`，添加一个`clear:both`属性

### 父容器BFC

```css
.page {
    overflow: hidden;
}
```
