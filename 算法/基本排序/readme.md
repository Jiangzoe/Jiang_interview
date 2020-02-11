## 基本排序

### 冒泡排序

原理：把一组数组的元素两两比较，交换位置，从而实现排序。

```js
function bubbleSort (arr) {
    let i,j,temp;
    // 外层循环控制比较的轮数
    for (i = 0; i < arr.length-1 ; i++) {
        // 里层循环控制每一轮比较的次数
        for (j = 0; j < arr.length-1-i; j++) {
            // 当前项大于后一项时交换
            if (arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr [j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
```

### 插入排序

原理：扑克牌玩法

```js
function insertSort(arr) {
    // 准备一个新数组，用来存放抓到的牌
    let handle = []
    handle.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        // 新抓的牌
        let A = arr[i]
        for (let j = handle.length-1; j>=0; j--) {
            let B = handle[j]
            if (A > B) {
                handle.splice(j+1, 0, A)
                break
            } 
            if (j === 0) {
                handle.unshift(A)
            }
        }
    }
    return handle
}
```

### 快速排序

原理：选取出数组的中间项，在原数组中进行比较，大于基数放右边，小于基数放左边。

```js
function quickSort(arr) {
    // 当arr小于等于一项时，不处理
    if ( arr.length <= 1) {
        return arr
    }
    let midIndex = Math.floor(arr.length/2)
    // splice 返回的是一个数组
    let mid = arr.splice(midIndex,1)[0] 
    let left = [],
        right = []
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        item < mid ? left.push(item) : right.push(item)
    }
    return quickSort(left).concat(mid, quickSort(right))
}
```

