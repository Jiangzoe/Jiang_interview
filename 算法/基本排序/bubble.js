let arr = [12,7,24,3,16,1]

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

console.log(bubbleSort(arr))