import { logDOM } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums'];

// 1. useEffect(callback)
// - Gọi callback mỗi lần khi component re-render
// - Gọi callback sau khi component thêm element vào DOM

// 2. useEffect(callback, [])
// - Gọi callback đúng 1 lần sau khi component mounted

// 3. useEffect(callback, [deps])
// - Gọi callback sau mỗi lần deps thay đổi

//--------
// => tất cả callback đều đc gọi sau khi component mounted lần đầu tiên
// => Cleanup function luôn đc gọi trước khi component unmouted


function Content() {
    const [time, setTime] = useState(3);

    useEffect(() => {

        const handleTimer = () => {
            if (time === 0) {
                clearInterval(interval);
                alert('Het gio');
            }
            else {
                setTime(pretime => pretime - 1);
            }
        }

        const interval = setInterval(handleTimer, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [time])

    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

export default Content;
