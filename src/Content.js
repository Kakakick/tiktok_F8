
import { useEffect, useState } from "react"


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
// => Cleanup function luôn đc gọi trước khi callback được gọi (trừ lần mounted)

const lessons = [
    {
        id: 1,
        name: 'NodeJS'
    },
    {
        id: 2,
        name: 'ReactJS'
    },
    {
        id: 3,
        name: 'MongoDB'
    }
]

function Content() {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {

        const handleComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment);
        
        return () => (
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        )
    }, [lessonId])

    return (
        <div>
            {
                lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={
                            {
                                color: lessonId === lesson.id ?
                                    'red' :
                                    '#333'
                            }
                        }
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))
            }
        </div>
    )
}

export default Content;
