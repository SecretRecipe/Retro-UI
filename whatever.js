
function getAttribute(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style)
}

function getID(cell) {
    return cell.id
}

class Window {

    constructor(tackledWindow, tackledHeader, footer, id) {
        this.tackledWindow = tackledWindow
        this.tackledHeader = tackledHeader
        this.footer = footer
        this.id = id
    }

    getYSpan(e, y1, y2) {
        return e, y1 - y2
    }

    getXSpan(e, x1, x2) {
        return e, x1 - x2
    }

    close(tackledElement) {
        tackledElement.style.display = 'none'
    }

    open(tackledElement) {
        tackledElement.style.display = 'block'
    }

    distantiateLeft(tackledElement, newPosition) {
        tackledElement.style.left = newPosition + 'px'
    }

    distantiateTop(tackledElement, newPosition) {
        tackledElement.style.top = newPosition + 'px'
    }

    changeHeight(tackledElement, newHeight) {
        tackledElement.style.height = newHeight + 'px'
    }

    changeWidth(tackledElement, newWidth) {
        tackledElement.style.width = newWidth + 'px'
    }

}

var openWindows = []
var directions = []

/* INTERACTING WITH MENU */
document.addEventListener('DOMContentLoaded', () => {

    var desktop = document.getElementById('desktop')
    var footer = document.getElementById('footer-bar')

    var menuPrograms = Array.from(document.querySelectorAll('session'))
    var menuFooter = document.getElementById('footer-bar')

    menuPrograms.forEach((menuCell) => {
        menuCell.addEventListener('click', () => {
            createNewWindow(menuCell, footer)
            startWindowEvents(openWindows)
        })
    })
})



function startWindowEvents(windows) {
    
    windows.forEach((window) => {

        let appState = document.getElementById(window.id)   

        window.tackledHeader.addEventListener('mousedown', getHeaderEvents)
        window.tackledWindow.addEventListener('mousedown', elementDrag)

        function getHeaderEvents(event) {

            if (event.target.id == 'close-button') {
                window.close(window.tackledWindow)
                window.close(window.footer)
                appState.className = appState.className.replace('Open', 'Closed')
            }

            if (event.target.id == 'full-button') {
                window.tackledWindow.style.width = '100%'
                window.tackledWindow.style.height = '95%'
            }

            if (event.target.id == 'minimize-button') {
                window.close(window.tackledWindow)
            }
        }
  
        window.footer.addEventListener('mousedown', () => {
            window.open(window.tackledWindow)
        })

        function elementDrag(event) {

            let X = event.clientX
            let Y = event.clientY

            let left = window.tackledWindow.offsetLeft
            let top = window.tackledWindow.offsetTop
            let height = parseInt(getAttribute(window.tackledWindow, 'height'))
            let width = parseInt(getAttribute(window.tackledWindow, 'width'))

            
            document.addEventListener('mousemove', dragEvent)
            document.addEventListener('mouseup', stopEvent)
            
            let tackledElement = event.target.className

            function dragEvent(event) {

                let offSetX = window.getXSpan(event, event.clientX, X)
                let offSetY = window.getYSpan(event, event.clientY, Y)
                
                if (tackledElement == 'Window Header') {
                    window.tackledHeader.style.cursor = 'move'
                    window.distantiateLeft(window.tackledWindow,  offSetX + left)
                    window.distantiateTop(window.tackledWindow, offSetY + top)
                }

                if (tackledElement == 'Window Border') {

                    let tackledBorder = event.target.id

                    if (tackledBorder == 'top' || tackledBorder == 'corner-1' || tackledBorder == 'corner-2') {
                        let newOffsetTop = top + offSetY
                        let newHeight = height - offSetY
                        window.distantiateTop(window.tackledWindow, newOffsetTop)
                        window.changeHeight(window.tackledWindow, newHeight)    
                    }
                    
                    if (tackledBorder == 'left' || tackledBorder == 'corner-1' || tackledBorder == 'corner-3') {
                        let newOffsetLeft = left + offSetX
                        let newWidth = width - offSetX
                        window.distantiateLeft(window.tackledWindow, newOffsetLeft)
                        window.changeWidth(window.tackledWindow, newWidth)
                    }

                    if (tackledBorder == 'bottom' || tackledBorder == 'corner-3' || tackledBorder == 'corner-4') { 
                        let newHeight = height - window.getYSpan(event, Y, event.clientY)
                        window.changeHeight(window.tackledWindow, newHeight)     
                    }

                    if (tackledBorder == 'right' || tackledBorder == 'corner-2' || tackledBorder == 'corner-4') {
                        let newWidth = width - window.getXSpan(event, X, event.clientX)
                        window.changeWidth(window.tackledWindow, newWidth)
                    }
        
                }
            }

            function stopEvent() {
                document.removeEventListener('mousemove', dragEvent)
                window.tackledHeader.style.cursor = 'default'
            }

        }
    })
}
