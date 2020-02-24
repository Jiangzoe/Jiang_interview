function jsonp(url,data,callback) {
    return new Promise((resovle) => {
        var script = document.createElement('script')
        url += `?jsonpcallback=${callback}`
        if (data) {
            Object.keys(data).forEach(key => {
                url += `&${key}=${data[key]}`
            })
        }
        script.src = url
        document.head.appendChild(script)
        window[callback] = function(data) {
            resovle(data)
        }
        script.parentNode.removeChild(script)
    })
}