import { getAttribute } from './getAttribute.js'

export function resizeWindow(window, top, bottom, right, left, corner1, corner2, corner3, corner4) {

    let borders = [top, bottom, right, left, corner1, corner2, corner3, corner4]
    
    borders.forEach((border) => {

        border.addEventListener('mousedown', (e) => {
            
            let left = window.offsetLeft 
            let top = window.offsetTop 
            let X = e.clientX 
            let Y = e.clientY
            let width = parseInt(getAttribute(window, 'width'))
            let height = parseInt(getAttribute(window, 'height'))

            document.addEventListener('mousemove', startDrag)
            document.addEventListener('mouseup', stopDrag)
            
            function startDrag(e) {
                
                let tackledBorder = border.id 
                console.log(tackledBorder)
                if (tackledBorder == 'top'  || tackledBorder == 'corner-1' || tackledBorder == 'corner-2') {
                    window.style.top = (top + (e.clientY - Y)) + 'px'
                    console.log(height)
                    window.style.height = (height - (e.clientY - Y)) + 'px'
                }

                if (tackledBorder == 'left' || tackledBorder == 'corner-1' || tackledBorder == 'corner-3') {
                    window.style.left = (left + (e.clientX - X)) + 'px'
                    window.style.width = (width - (e.clientX - X)) + 'px'
                }
                
                if (tackledBorder == 'bottom' || tackledBorder == 'corner-3' || tackledBorder == 'corner-4') { 
                    window.style.height = (height - (Y - e.clientY)) + 'px'     
                }

                if (tackledBorder == 'right' || tackledBorder == 'corner-2' || tackledBorder == 'corner-4') {
                    window.style.width = (width - (X - e.clientX)) + 'px'         
                }
            }

            function stopDrag() {
                document.removeEventListener('mousemove', startDrag)
            }
        })
    })
}
