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
    var openWindows = []
    menuPrograms.forEach((menuCell) => {

        menuCell.addEventListener('click', (e) => {    

            createNewWindow(desktop, menuCell)
            openWindow = document.getElementById('new-window')

            openWindows.push(new WindowManager(getAttribute(openWindow, 'width'), getAttribute(openWindow, 'height')))

            openWindow.firstChild.addEventListener('mouse down', function(e) {
                let offsetY = e.clientY 
                let offsetX = e.clientX
                openWindow.firstChild.addEventListener('mousemove', (e) => {
                    let newOffsetX = e.clientX - offsetX 
                    let newOffsetY = e.clientY - offsetY
                    openWindow.style.left = newOffsetX + 'px'
                    openWindow.style.top = newOffsetY + 'px'
                    
                })
            })
       
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

function activateWindowDynamic(window, e) {
    e.preventDefault()
    return window.MousePosition(e.clientX, e.clientY)
}

function getAttribute(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style)
}



