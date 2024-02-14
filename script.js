
function getAttribute(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style)
}

function getID(cell) {
    return cell.id
}

var openWindows = []

class Window {

    constructor(tackledWindow, tackledHeader, footer, id, minimize, close, full, width, height) {
        this.tackledWindow = tackledWindow
        this.tackledHeader = tackledHeader
        this.footer = footer
        this.id = id
        this.minimize = minimize
        this.close = close 
        this.full = full
        this.width = width 
        this.height = height
    }

    getYSpan(e, y) {
        let newY = e.clientY - y
        return e, newY
    }

    getXSpan(e, x) {
        let newX = e.clientX - x
        return e, newX
    }

}


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


function createNewWindow(cellClicked, footer) {

    if (cellClicked.className.includes('Closed')) {

        let cellClickedID = getID(cellClicked)

        let newWindow = document.createElement('div')
        newWindow.className = 'Open Window'
        newWindow.id = cellClickedID 

        let windowHeader = document.createElement('div')
        windowHeader.className = 'Window Header'

        let appTitle = document.createElement('p')
        appTitle.className = 'App Title'
        appTitle.innerHTML = `<img src = "images/icons/${cellClickedID}.ico">`
        appTitle.append(document.createTextNode(cellClickedID))

        let buttonContainer = document.createElement('div')
        buttonContainer.className = 'Button Container'
        let minimizeButton = document.createElement('button')
        let closeButton = document.createElement('button')
        let fullButton = document.createElement('button')

        minimizeButton.innerHTML = '<img src = "images/icons/minimize-window.png">'
        minimizeButton.id = 'minimize-button'
        closeButton.innerHTML = '<img src = "images/icons/close-window.png">'
        closeButton.id = 'close-button'
        fullButton.innerHTML = '<img src = "images/icons/full-window.jpg">'
        fullButton.id = 'full-button'

        let footerWindow = document.createElement('div')
        footerWindow.className = 'Footer Open'
        footerWindow.innerHTML = `<img src = "images/icons/${cellClickedID}.ico">`
        footerWindow.append(document.createTextNode(cellClickedID))

        buttonContainer.append(minimizeButton, fullButton, closeButton)
        windowHeader.append(appTitle)
        windowHeader.append(buttonContainer)
        newWindow.append(windowHeader)
        desktop.append(newWindow)
        footer.append(footerWindow)

        cellClicked.className = cellClicked.className.replace('Closed', 'Open')

        openWindows.push(new Window(newWindow, windowHeader, footerWindow, newWindow.id, minimizeButton, closeButton, fullButton, getAttribute(newWindow, 'width'), getAttribute(newWindow, 'height')))

    }
}

function startWindowEvents(windows) {

    windows.forEach((window) => {

        let appState = document.getElementById(window.id)
        let width = window.width 
        let height = window.height
        let isFull = false 

        window.close.addEventListener('mousedown',() => {
            window.tackledWindow.style.display = 'none'
            window.footer.style.display = 'none'
            appState.className = appState.className.replace('Open', 'Closed')
        })

        window.minimize.addEventListener('mousedown',() => {
            window.tackledWindow.style.display = 'none'
        })

        window.full.addEventListener('mousedown', () => {
            if (isFull == true) {
                window.tackledWindow.style.width = window.width
                window.tackledWindow.style.height = window.height
                isFull = true
            }
            else {
                window.tackledWindow.style.width = '100%'
                window.tackledWindow.style.height = '100%'
                isFull = false
            }
        })

    
        
    })
}






/*
function moveWindowEvent(window) {
    for (i = 0; i < window.length; i++) {
        (function (currentWindow) {
            currentWindow.firstChild.addEventListener('mousedown', (e) => {

                let offsetX = e.offsetX
                let offsetY = e.offsetY

                document.addEventListener('mousemove', newOffset)
                document.addEventListener('mouseup', removingEvents)

                function newOffset(e) {
                    e.preventDefault()
                    newOffsetX = e.clientX - offsetX
                    newOffsetY = e.clientY - offsetY
                    currentWindow.style.left = newOffsetX + 'px'
                    currentWindow.style.top = newOffsetY + 'px'
                }

                function removingEvents() {
                    document.removeEventListener('mousemove', newOffset)
                    document.removeEventListener('mouseup', removingEvents)
                }

            })
        })
            (window[i])
    }
}

function resizableWindowEvent(window) {
   

            top.addEventListener('mousedown', resizeWindow);
            left.addEventListener('mousedown', resizeWindow);
            right.addEventListener('mousedown', resizeWindow);
            bottom.addEventListener('mousedown', resizeWindow);
            corner1.addEventListener('mousedown', resizeWindow);
            corner2.addEventListener('mousedown', resizeWindow);
            corner3.addEventListener('mousedown', resizeWindow);
            corner4.addEventListener('mousedown', resizeWindow);

            function resizeWindow(e) {
                
                let offsetTop = tackledWindow.offsetTop
                let offsetLeft = tackledWindow.offsetLeft
                let windowsHeight = parseInt((getAttribute(tackledWindow, 'height')))
                let windowsWidth = parseInt((getAttribute(tackledWindow, 'width')))
                let offsetY = e.clientY
                let offsetX = e.clientX
                let newHeight, newWidth, newOffsetTop, newOffsetLeft

                let tackledBorder = document.getElementById(this.id).id

                document.addEventListener('mousemove', startDrag)
                document.addEventListener('mouseup', stopDragging)

                function startDrag(e) {

                    if (tackledBorder == 'top' || tackledBorder == 'corner-1' || tackledBorder == 'corner-2') {
                        newOffsetTop = offsetTop + (e.clientY - offsetY)
                        newHeight = windowsHeight - (e.clientY - offsetY)
                    }

                    if (tackledBorder == 'bottom' || tackledBorder == 'corner-3' || tackledBorder == 'corner-4') {
                        newHeight = windowsHeight - (offsetY - e.clientY)
                    }

                    if (tackledBorder == 'left' || tackledBorder == 'corner-1' || tackledBorder == 'corner-3') {
                        newOffsetLeft = offsetLeft + (e.clientX - offsetX)
                        newWidth = windowsWidth - (e.clientX - offsetX)
                    }

                    if (tackledBorder == 'right' || tackledBorder == 'corner-2' || tackledBorder == 'corner-4') {
                        newWidth = windowsWidth - (offsetX - e.clientX)
                    }

                    tackledWindow.style.height = newHeight + 'px'
                    tackledWindow.style.top = newOffsetTop + 'px'
                    tackledWindow.style.left = newOffsetLeft + 'px'
                    tackledWindow.style.width = newWidth + 'px'

                }

                function stopDragging() {
                    document.removeEventListener('mousemove', startDrag);
                }

            }

        }
            (window[i]))
    }
}
*/
 

