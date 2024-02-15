
function getAttribute(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style)
}

function getID(cell) {
    return cell.id
}

var openWindows = []

class Window {

    constructor(tackledWindow, tackledHeader, footer, id, width, height) {
        this.tackledWindow = tackledWindow
        this.tackledHeader = tackledHeader
        this.footer = footer
        this.id = id
        this.width = width
        this.height = height
    }

    getYSpan(e, y) {
        return e, e.clientY - y
    }

    getXSpan(e, x) {
        return e, e.clientX - x
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


function createNewWindow(cellClicked, footer, size = 20) {

    if (cellClicked.className.includes('Closed')) {

        let cellClickedID = getID(cellClicked)

        let newWindow = document.createElement('div')
        newWindow.className = 'Open Window'
        newWindow.id = cellClickedID

        const top = document.createElement('div')
        top.style.width = '100%';
        top.style.height = size + 'px';
        top.style.backgroundColor = 'transparent';
        top.style.position = 'absolute';
        top.style.top = - (size / 2) + 'px';
        top.style.left = '0px';
        top.style.cursor = 'n-resize';
        top.id = 'top'

        const bottom = document.createElement('div');
        bottom.style.width = '100%';
        bottom.style.height = size + 'px';
        bottom.style.backgroundColor = 'transparent';
        bottom.style.position = 'absolute';
        bottom.style.bottom = - (size / 2) + 'px';
        bottom.style.left = '0px';
        bottom.style.cursor = 'n-resize';
        bottom.id = 'bottom'

        const left = document.createElement('div');
        left.style.width = size + 'px';
        left.style.height = '100%';
        left.style.backgroundColor = 'transparent';
        left.style.position = 'absolute';
        left.style.top = '0px';
        left.style.left = - (size / 2) + 'px';
        left.style.cursor = 'e-resize';
        left.id = 'left'

        const right = document.createElement('div');
        right.style.width = size + 'px';
        right.style.height = '100%';
        right.style.backgroundColor = 'transparent';
        right.style.position = 'absolute';
        right.style.top = '0px';
        right.style.right = - (size / 2) + 'px';
        right.style.cursor = 'e-resize';
        right.id = 'right'

        const corner1 = document.createElement('div');
        corner1.style.width = size + 'px';
        corner1.style.height = size + 'px';
        corner1.style.backgroundColor = 'transparent';
        corner1.style.position = 'absolute';
        corner1.style.top = - (size / 2) + 'px';
        corner1.style.left = - (size / 2) + 'px';
        corner1.style.cursor = 'nw-resize';
        corner1.id = 'corner-1'

        const corner2 = document.createElement('div');
        corner2.style.width = size + 'px';
        corner2.style.height = size + 'px';
        corner2.style.backgroundColor = 'transparent';
        corner2.style.position = 'absolute';
        corner2.style.top = - (size / 2) + 'px';
        corner2.style.right = - (size / 2) + 'px';
        corner2.style.cursor = 'ne-resize';
        corner2.id = 'corner-2'

        const corner3 = document.createElement('div');
        corner3.style.width = size + 'px';
        corner3.style.height = size + 'px';
        corner3.style.backgroundColor = 'transparent';
        corner3.style.position = 'absolute';
        corner3.style.bottom = - (size / 2) + 'px';
        corner3.style.left = - (size / 2) + 'px';
        corner3.style.cursor = 'sw-resize';
        corner3.id = 'corner-3'

        const corner4 = document.createElement('div');
        corner4.style.width = size + 'px';
        corner4.style.height = size + 'px';
        corner4.style.backgroundColor = 'transparent';
        corner4.style.position = 'absolute';
        corner4.style.bottom = - (size / 2) + 'px';
        corner4.style.right = - (size / 2) + 'px';
        corner4.style.cursor = 'se-resize';
        corner4.id = 'corner-4'

        newWindow.append(top)
        newWindow.append(bottom)
        newWindow.append(left)
        newWindow.append(right)
        newWindow.appendChild(corner1);
        newWindow.appendChild(corner2);
        newWindow.appendChild(corner3);
        newWindow.appendChild(corner4);

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

        minimizeButton.id = 'minimize-button'
        minimizeButton.innerHTML = '_'
        closeButton.id = 'close-button'
        closeButton.innerHTML = 'X'
        fullButton.id = 'full-button'
        fullButton.innerHTML = '<i class="bx bx-window"></i>'

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

        openWindows.push(new Window(newWindow, windowHeader, footerWindow, newWindow.id, getAttribute(newWindow, 'width'), getAttribute(newWindow, 'height')))

    }
}

function startWindowEvents(windows) {

    windows.forEach((window) => {

        let appState = document.getElementById(window.id)

        window.tackledHeader.addEventListener('mousedown', getHeaderEvents)

        function getHeaderEvents(event) {

            let offSetX = event.clientX
            let offSetY = event.clientY

            let offsetLeft = window.tackledWindow.offsetLeft
            let offsetTop = window.tackledWindow.offsetTop

            window.tackledHeader.style.cursor = 'move'

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

            document.addEventListener('mousemove', elementDrag)
            document.addEventListener('mouseup', stopEvent)

            function elementDrag(event) {
                let newOffsetX = window.getXSpan(event, offSetX) + offsetLeft
                let newOffsetY = window.getYSpan(event, offSetY) + offsetTop

                window.distantiateLeft(window.tackledWindow, newOffsetX)
                window.distantiateTop(window.tackledWindow, newOffsetY)

            }

            function stopEvent() {
                document.removeEventListener('mousemove', elementDrag)
                window.tackledHeader.style.cursor = 'default'
            }

        }

        window.footer.addEventListener('mousedown', () => {
            window.open(window.tackledWindow)
        })

        /*
        window.close.addEventListener('mousedown',() => {
            window.hide(window.tackledWindow)
            window.hide(window.footer)
            appState.className = appState.className.replace('Open', 'Closed')
        })

        window.minimize.addEventListener('mousedown',() => {
            window.hide(window.tackledWindow)
        })

        window.full.addEventListener('mousedown', () => {
            window.tackledWindow.style.width = '100%'
            window.tackledWindow.style.height = '95%'
        })

        window.footer.addEventListener('click', () => {
            if (getAttribute(window.tackledWindow, 'display') == 'none') {
                window.show(window.tackledWindow)
            }
        })

        window.tackledHeader.addEventListener('mousedown', elementDrag) 

        function elementDrag(e) {
            
            let offSetX = e.clientX
            let offSetY = e.clientY 
          
            document.addEventListener('mousemove', moveWindow)
            document.addEventListener('mouseup', stopEvent)

            function moveWindow(e) {
                

                window.tackledWindow.style.left = newOffsetX + 'px'
                window.tackledWindow.style.top = newOffsetY + 'px'
            }

            function stopEvent() {
                document.removeEventListener('mousemove', moveWindow)
            }
        }
        */

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


