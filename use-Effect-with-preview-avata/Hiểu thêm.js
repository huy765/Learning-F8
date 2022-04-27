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

//--------------------------------
//  1. Callback luôn được gọi khi component mounted
//  2. Cleanup func luôn được gọi khi component unmounted
//  3. Cleanup function luôn được gọi trước khi callback được gọi 
function Content() {
    const [count,setCount] = useState(1)

    useEffect(() => {
        console.log('Mounted or Re-render');

        //cleanup fuc
        return () => {
            console.log('Cleanup');
        }
    },[count])


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    )
}

export default Content