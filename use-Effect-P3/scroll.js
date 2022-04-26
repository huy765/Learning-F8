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

//  1. useEffect(callback)
// - gọi callback mỗi khi component re-render
// - gọi callback khi element được thêm vào DOM

//  2. useEffect(callback,[])
//  - chỉ gọi callback 1 lần sau khi compoonent mount
//  3. useEffect(callback,[deps])
//  - vẫn gọi callback khi component được mount

/*----------------------------------
1. Callback luôn được gọi sau khi component mounted
2. Cleanup function luôn được gọi trước khi component unmounted
*/

const tabs = ['posts','comments','albums']

function Content() {
    const [title,setTitle] = useState('')
    const [posts,setPosts] = useState([])
    const [type,setType] = useState('posts')
    const [showGoToTop,setShowGoToTop] = useState(false)

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
        })
    },[type])

    useEffect(() => {

        const handleScroll = () =>  {
            if (window.scrollY >= 300)  {
                setShowGoToTop(true)
            } else   {
                setShowGoToTop(false)
            }
        }

        window.addEventListener('scroll',handleScroll)
        console.log('addEventListener');

        return () => {
            window.removeEventListener('scroll',handleScroll)
            console.log('removeEventListener')
        }

    },[])

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
            {posts.map(post => (
                <li key={post.id}>
                    {post.title || post.name}
                </li>
            ))}
            {showGoToTop && (
                <button
                    style={{
                        position:'fixed',
                        right:20,
                        bottom:20,
                    }}
                >Go To Top</button>
            )}    
        </div>
    )
}

export default Content