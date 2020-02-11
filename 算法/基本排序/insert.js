let arr = [12,7,24,3,16,1]

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

console.log(insertSort(arr))