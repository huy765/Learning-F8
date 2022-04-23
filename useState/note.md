1. dùng useState 
    khi muốn dữ liệu thay đổi tự động được cập nhật(render thao dữ liệu)
2. cách dùng 
import component()  {
    const [state ,setState] = useState(initState)

    .......
}
initState : chỉ dùng lần đầu sau đó return state ,phần tử số 2 thì setState