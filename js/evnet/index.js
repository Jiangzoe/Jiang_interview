class Event {
    constructor () {
        this._cache = {}
    }
    on(type, callback) {
        let fns = (this._cache[type] = this._cache[type] || [])
        if (fns.indexOf(callback) === -1) {
            fns.push(callback)
        }
        return this
    }
    trigger(type, data) {
        let fns = this._cache[type]
        if (Array.isArray(fns)) {
            fns.forEach((fn) => {
                fn(data)
            })
        }
        return this
    }
    off (type, callback) {
        let fns = this._cache[type]
        if (Array.isArray(fns)) {
            if (callback) {
                let index = fns.indexOf(callback)
                if(index !== -1) {
                    fns.splice(index,1)
                }
            } else {
                fns.length = 0
            }
        }
        return this
    }
}