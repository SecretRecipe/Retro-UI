document.addEventListener('DOMContentLoaded', () => {

    /* TO DO 
    
    MAKE WINDOW MOVABLE THROUGH HEADER CLICKING

    -> Get clicking event working over window
    */

    class WindowManager {

        constructor(width, height, leftPosition, topPosition) {
            this.width = width
            this.height = height
            this.left = leftPosition
            this.topPosition = topPosition
        }
        /*
        MousePosition(positionX, positionY) {
    
            this.positionX = positionX
            this.positionY = positionY
            const self = this
    
            document.addEventListener('mousemove', moveWindowEvent)
    
    
            function moveWindowEvent(e) {
                e.preventDefault()
                let newOffsetX = e.clientX - self.positionX
                let newOffsetY = e.clientY - self.positionY
    
                self.leftPosition = newOffsetX;
                self.topPosition = newOffsetY;
            }
        }
        */
    }

    const desktop = document.getElementById('desktop')
    const windowsButton = document.getElementById('menu-button')
    const windowsMenu = document.getElementById('menu')
    let openMenu = 0
    //windowsMenu.className = 'Menu Hidden'
    
    windowsButton.addEventListener('click', () => {
        if (openMenu == 0) {
            windowsMenu.className = 'Menu'
            openMenu += 1
        }
        else {
            windowsMenu.className = 'Menu Hidden'
            openMenu -= 1
        }
    })
    
    let menuPrograms = Array.from(document.querySelectorAll('session'))
    menuPrograms.forEach((menuCell) => {

        menuCell.addEventListener('click', () => {    

            createNewWindow(desktop, menuCell)
            openWindows = document.getElementsByClassName('New Window')
            moveWindow(openWindows)
       
        })
    })
})

function createNewWindow(finalLocation, cellClicked) {

    if (cellClicked.className.includes('Closed')) {
        
        let newWindow = document.createElement('div')
        newWindow.id = 'new-window'
        newWindow.className = 'New Window'
        
        let windowHeader = document.createElement('div')
        windowHeader.style.width = '100%'
        windowHeader.style.height = '10%'
        windowHeader.style.background = 'lightblue'
        windowHeader.id = 'window-header'
        
        let windowContent = document.createElement('object')
        windowContent.style.width = '100%'
        windowContent.style.height = '100%'
        
        if (cellClicked.className == 'Paint Cell') {
            windowContent.setAttribute('data', 'pages/paint/paint.html')
        }
        
        newWindow.append(windowHeader)
        newWindow.append(windowContent)
        finalLocation.append(newWindow)
        
        newClassName = cellClicked.className.replace('Closed', 'Open')
        cellClicked.className = newClassName
        
    }   
}

function moveWindow(window) {
    console.log(window)
    for (i=0; i < window.length; i++) {
        (function (currentWindow) {
            currentWindow.firstChild.addEventListener('mousedown', (e) => {
                
                let offsetX = e.offsetX
                let offsetY = e.offsetY
                console.log(offsetX, offsetY)
                
                currentWindow.firstChild.addEventListener('mousemove', newOffset)
                currentWindow.firstChild.addEventListener('mouseup', removingEvents)
                currentWindow.firstChild.addEventListener('mouseleaves', removingEvents)
                
                function newOffset(e) {
                    e.preventDefault()
                    newOffsetX = e.clientX - offsetX
                    newOffsetY = e.clientY - offsetY
                    currentWindow.style.left = newOffsetX + 'px'
                    currentWindow.style.top = newOffsetY + 'px'
                }

                function removingEvents() {
                    currentWindow.firstChild.removeEventListener('mousemove', newOffset)
                    currentWindow.firstChild.removeEventListener('mouseup', removingEvents)
                    currentWindow.firstChild.removeEventListener('mouseleaves', removingEvents)
                }
            })
        })
        (window[i])
    }
}

function getAttribute(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style)
}



