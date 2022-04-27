import { useEffect, useState } from 'react'

// useEffect khi thực hiện side effects
/*
1.  Update DOM
    -F8 blog title
2.  Call API
3.  Listen DOM events
    - Scroll
    - Resize 
4.  Cleanup
    - Remove listener / Unsubscribe 
    - Clear timer
*/

//  useEffect(callback)
// - gọi callback mỗi khi component re-render
// - gọi callback khi element được thêm vào DOM

//  useEffect(callback,[])
//  - chỉ gọi callback 1 lần sau khi compoonent mount
//  useEffect(callback,[deps])
//  - vẫn gọi callback khi component được mount

const tabs = ['posts','comments','albums']

function Content() {
    const [title,setTitle] = useState('')
    const [posts,setPosts] = useState([])
    const [type,setType] = useState('posts')

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
        })
    },[type])

    return (
        <div>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333',
                    } : {}}
                    onClick={() =>setType(tab )}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange = {e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title || post.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content