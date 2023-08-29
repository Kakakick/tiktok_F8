
import { useEffect, useState, useLayoutEffect, useRef, memo } from "react"


function Content({count}) {
    console.log('render');
    return (
        <h1>Hello World {count}</h1>
    )
}

export default memo(Content);
