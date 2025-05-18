function debounce(func, wait) {
    let timeoutId;

    return function (...args) {
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}
