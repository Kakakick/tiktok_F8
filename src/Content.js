
import { useEffect, useState, useLayoutEffect, useRef, memo } from "react"


function Content({ onIncrease }) {
    console.log('render');
    return (
        <div>
            <h1>Hello World </h1>
            <button onClick={onIncrease}>Click me2!</button>
        </div>
    )
}

export default memo(Content);
