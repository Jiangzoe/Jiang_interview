## 画三角形

### border

```html
<style>
    .triangle {
        height: 0;
        width: 0;
        border-color: green transparent transparent transparent;
        border-style: solid;
        border-width: 100px;
    }
</style>
<body>
    <div class="triangle"></div>
</body>
```

### clip-path

创建一个只有元素的部分区域可以显示的裁剪区域，区域内的部分监视，区域外的隐藏

```css
.triangle {
    width: 30px;
    height: 30px;
    background: red;
    clip-path: polygon(0px 0px, 0px 30px, 30px 0px);
    transform: rotate(225deg); // 旋转225，变成下三角
}

```
