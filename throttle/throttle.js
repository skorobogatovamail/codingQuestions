// export default function throttle(func, wait) {
//     let isThrottled = false;

//     return function (...args) {
//         if (!isThrottled) {
//             func.apply(this, args);
//             isThrottled = true;
//             setTimeout(() => (isThrottled = false), wait);
//         }
//     };
// }


function throttle(func, wait) {

    let isThrottled = false;
    let timeoutId;
    let lastArgs;

    return function throttled(...args) {

        if (!isThrottled) {
            if (timeoutId) clearTimeout(timeoutId)

            isThrottled = true;
            func.apply(this, args)

            timeoutId = setTimeout(() => {
                isThrottled = false

                if (lastArgs) {
                    func.apply(this, lastArgs)
                    lastArgs = null
                }

            }, wait)
        } else {
            lastArgs = args
        }
    }
}