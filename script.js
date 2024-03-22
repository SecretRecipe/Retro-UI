import { openWindow } from './modules/createWindow.js'

document.addEventListener('DOMContentLoaded', () => {

    let menuApps = Array.from(document.getElementsByClassName('Cell Closed'))
    let footer = document.getElementById('taskbar')

    menuApps.forEach((app) => {
        
        let backgroundColor = getAttribute(app, 'background-color')

        app.addEventListener('mouseenter', () => {
            app.style.background = 'rgb(78, 129, 231)'
            app.style.color = 'white'
            app.style.cursor = 'pointer'
        })
        
        app.addEventListener('mouseleave', () => {
            app.style.color = 'black'
            app.style.background = backgroundColor
        })
        
        app.addEventListener('click', () => {
            openWindow(app, footer)
            addEvents(app)
        })
        
    })

    function addEvents(app) {

        let window = document.getElementById('Window' + ' '+ app.id)
        let header = document.getElementById('Header' + ' ' + app.id)
        let borders = Array.from(document.getElementsByClassName('Window Border'))

        header.addEventListener('mousedown', getDragEvents)
        borders.forEach((border) => border.addEventListener('mousedown', getDragEvents))

        function getDragEvents(e) {
          
            let X = e.clientX // Gets initial X offset clicking
            let Y = e.clientY // Gets initial Y offset clicking
            let left = window.offsetLeft // Gets left actual distance
            let top = window.offsetTop // Gets top actual distance
            let height = parseInt(getAttribute(window, 'height'))
            let width = parseInt(getAttribute(window, 'width'))

            if (e.target.id.includes('Header')) {
                
                document.addEventListener('mousemove', moveWindow)
                document.addEventListener('mouseup', stopEvent)

                function moveWindow(e) {
                    let offsetX = e.clientX - X
                    let offsetY = e.clientY - Y
                    window.style.left = offsetX + left + 'px'
                    window.style.top =  offsetY + top + 'px'
                    
                }

                function stopEvent() {
                    document.removeEventListener('mousemove', moveWindow)
                }
                
            }


        
            if (e.target.className.includes('Border')) {
                
                let tackledBorder = e.target.id
                document.addEventListener('mousemove', resizeWindow)
                document.addEventListener('mouseup', stopEvent)

                function resizeWindow(e) {

                    if (tackledBorder == 'top'  || tackledBorder == 'corner-1' || tackledBorder == 'corner-2') {
                        window.style.top = (top + (e.clientY - Y)) + 'px'
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

                function stopEvent() {
                    document.removeEventListener('mousemove', resizeWindow)
                }
            }
            
      
    
        }
    }
})

function getAttribute(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style)
}
