
export function moveWindow(window, header) {
    
    header.addEventListener('mousedown', (e) => {

        let left = window.offsetLeft 
        let top = window.offsetTop 
        let X = e.clientX 
        let Y = e.clientY

        document.addEventListener('mousemove', startDrag)
        document.addEventListener('mouseup', stopDrag)
            
        function startDrag(e) {
            let offsetX = e.clientX - X
            let offsetY = e.clientY - Y
            window.style.left = offsetX + left + 'px'
            window.style.top =  offsetY + top + 'px'
        }

        function stopDrag() {
            document.removeEventListener('mousemove', startDrag)
        }

    }) 
}
