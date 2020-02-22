function deepCopy(target) {
    if (typeof target === ('string' || 'number')) {
        return target
    }
    if (!target || typeof target !== 'object') {
        throw new Error('参数错误')
    }

    var newTarget = target.constructor === Array ? [] : {}
    for (var key in target) {
        if (target.hasOwnProperty(key)) {
            if (typeof target[key] !== 'object') {
                newTarget[key] = target[key]
            } else {
                newTarget[key] = deepCopy(target[key])
            }
        }
    }
    return newTarget
}
