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

function Content() {
    const [title,setTitle] = useState('')
    const [posts,setPosts] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
            // console.log(posts);
        })
        // document.title = title
        // console.log('Re-render',title);
    },[])

    return (
        <div>
            <input
                value={title}
                onChange = {e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content