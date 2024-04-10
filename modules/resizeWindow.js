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

                let newHeight 
                let newWidth 
                let newTop 
                let newLeft

                let rightPosition

                if (tackledBorder == 'top'  || tackledBorder == 'corner-1' || tackledBorder == 'corner-2') {
                    newTop = (top + (e.clientY - Y)) 
                    newHeight = (height - (e.clientY - Y)) 
                }

                if (tackledBorder == 'left' || tackledBorder == 'corner-1' || tackledBorder == 'corner-3') {
                    newLeft = (left + (e.clientX - X)) 
                    newWidth = (width - (e.clientX - X)) 
                }
                
                if (tackledBorder == 'bottom' || tackledBorder == 'corner-3' || tackledBorder == 'corner-4') { 
                    newHeight = (height - (Y - e.clientY))    
                }

                if (tackledBorder == 'right' || tackledBorder == 'corner-2' || tackledBorder == 'corner-4') {
                    newWidth = (width - (X - e.clientX))     
                }

                newLeft = newLeft == undefined ? 'px' : newLeft
                newTop = newTop == undefined ? 'px' : newTop
                newHeight = newHeight == undefined ? 'px' : newHeight
                newWidth = newWidth == undefined ? 'px' : newWidth
                rightPosition = parseInt(getAttribute(window, 'right'))
                if (newHeight >= 500 || newWidth >= 500) {  
                   
                    window.style.height = newHeight + 'px'
                    window.style.width = newWidth + 'px'
                    window.style.left = newLeft + 'px'
                    window.style.top = newTop + 'px'
                            
                }
                
            }
            function stopDrag() {
                document.removeEventListener('mousemove', startDrag)
            }
        })
    })
}
