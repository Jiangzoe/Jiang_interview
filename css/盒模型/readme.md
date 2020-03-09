## 盒模型

盒模型由`margin + padding + border + content`四个属性组成，分为两种：W3C的标准盒模型和IE模型。

### 标准盒模型

不包括`border+padding`

`width = content`

### IE模型

`width = border + padding + content`

### 相互转换

通过`box-sizing`属性来转换

W3C：`box-sizing:content-box`

IE：`box-sizing:border-box`