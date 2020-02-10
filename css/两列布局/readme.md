## 两列布局

### 侧边栏定宽，右边自适应

给定代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>两类布局——定宽</title>
    <style>
        #header, #footer {
            height: 50px;
            width: 100%;
            background-color: blue;
        }
        #aside {
            height: 200px;
            width: 50px;
            background-color: green;
        }
        #main {
            height: 200px;
            background-color: yellow;
            width: calc(100% - 50px);
        }
    </style>
</head>
<body>
    <div id="page">
        <header id="header">header</header>
        <aside id="aside">aside</aside>
        <main id="main">main</main>
        <footer id="footer">footer</footer>
    </div>
</body>
</html>
```

- 使用`float`来实现

  ```css
  #aside {
      float: left;
  }
  #main {
      overflow: hidden;  /*让main成为一个BFC，float也是一个BFC，两个BFC不会重叠*/
  }
  ```

- 使用绝对定位来实现——麻烦，不推荐

- 使用`flex`来实现

  ```css
  #page {
      display: flex;
      flex-wrap: wrap;  /*超出则换行*/
  }
  ```

- 使用`inline-block`实现

  ```css
  #page {
      font-size: 0;     /*消除html中空格*/
  }
  #aside {
      display: inline-block;
      font-size: 20px;
      vertical-align: top; /*当左右高度不一致时使用*/
  }
  #main {
      display: inline-block;
      font-size: 30px;
  }
  ```

- 使用`absolute`和`margin-left`实现

### 侧边栏不定宽、右边自适应

给定代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>两类布局——不定宽</title>
    <style>
        #aside {
            height: 200px;
            background-color: green;
            float: left;
        }
        #main {
            height: 200px;
            background-color: yellow;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div id="page">
        <aside id="aside">aside</aside>
        <main id="main">main</main>
    </div>
</body>
</html>
```

- 使用`float`+`BFC`来实现

  ```css
  #aside {
      float:left;
  }
  #main {
      overfloat:hidden;
  }
  ```

- 使用`flex`来实现

  ```css
  #page {
      display: flex;
  }
  #main {
      flex: 1;    /*自动分得父元素的宽度减去侧边栏的宽度*/
  }
  ```

