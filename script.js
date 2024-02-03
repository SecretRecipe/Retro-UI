document.addEventListener('DOMContentLoaded', () => {

    function getAttribute(element, style) {
        return window.getComputedStyle(element).getPropertyValue(style)
    }

    function activateWindowDynamic(window, e) {
        e.preventDefault()
        console.log(e.clientX, e.clientY)
        return window.MousePosition(e.clientX, e.clientY)
    }
    
    function moveWindow(window, left, top) {
        window.style.left = left + 'px'
        window.style.top = top + 'px'
    }

    class WindowManager {

        constructor(width, height, leftPosition, topPosition, header) {
            this.width = width
            this.height = height
            this.leftPosition = leftPosition
            this.topPosition = topPosition
            this.header = header
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
    let windowsOpened = []

    menuPrograms.forEach((menuCell) => {
        
        menuCell.addEventListener('click', () => {
            
            createNewWindow(desktop, menuCell)
            
            let newWindow = document.getElementById('new-window')
        
            let openWindow = new WindowManager(getAttribute(newWindow, 'width'), getAttribute(newWindow, 'height'), newWindow.offsetLeft, newWindow.offsetTop, newWindow.childNodes[0])

            windowsOpened.push(openWindow)
            
            
            windowsOpened.forEach((window) => {
                console.log("let me in")
                window.addEventListener('click', () => {
                    console.log('sla!')
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

function getAttribute(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style)
}



