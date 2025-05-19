import React, { useState, useRef } from 'react'
export function usePrevious<T>(value: T): T | undefined {
    const prev = useRef();
    const res = prev.current
    prev.current = value;
    return res
}

// if you want to try your code on the right panel
// remember to export App() component like below

export function App() {
    const [count, setCount] = useState(0)
    const previous = usePrevious(count)

    return (
        <div>
            <div>count: {count} </div>
            < div > prev: {previous} </div>
            < button onClick={() => setCount(prev => prev + 1)
            }> +</button>
        </div>
    )
}