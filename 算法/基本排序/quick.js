let arr = [12,7,24,3,16,1]

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

console.log(quickSort(arr))