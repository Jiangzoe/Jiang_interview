function jsonp (url) {
    let json
    let script = document.createElement('script')
    script.src = url + '?callback = fn'
    window.fn = function (data) {
        json = data
    }
    document.body.appendChild(script)
    return new Promise((resolve, reject) => {
        script.onload = function (e) {
            resolve(json)
        }
        script.onerror = function (e) {
            reject(json)
        }

    })
}

jsonp('http://localhost:8082').then(data => {
    console.log(data)
    throw('err')
}).catch(err => {
    console.log(err)
})