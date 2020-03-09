## 垂直居中

给定结构：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .page {
            width: 200px;
            height: 200px;
            background-color: green;
        }
        .content {
            width: 100px;
            height: 100px;
            background-color: blue;
        }
    </style>
</head>
<body>
    <div class="page">
        <div class="content"></div>
    </div>
</body>
</html>
```

### flex

```css
.page {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### position + margin负值

```css
.page {
     position: relative;
}
.content {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
}
```

### margin: auto

```css
.page {
     position: relative;
}
.content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto
}
```

