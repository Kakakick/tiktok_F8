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


function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [currentTab, setCurrentTab] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + tabs[currentTab])
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            })
    }, [currentTab]);

    
    useEffect(() => {
        const handleScroll = () => {
            let scrollBtn = document.getElementById('scrollButton');
            if (window.scrollY >= 250) {
                scrollBtn.style.display = 'block';
            }
            else {
                scrollBtn.style.display = 'none';
            }
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    const upToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <div>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    style={tabs[currentTab] === tab ? {
                        color: '#fff',
                        backgroundColor: 'black'
                    } : {

                    }}
                    onClick={() => setCurrentTab(index)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)} // Sửa a thành e
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {currentTab === 1 ? post.name : post.title}
                    </li>
                ))}
            </ul>
            
                
                <button
                    id="scrollButton"
                    onClick={upToTop}
                    style={{ position: 'fixed', bottom: '20px', right: '20px', display: "none"}}
                >
                    Up
                </button>
            
        </div>
    )
}

export default Content;
