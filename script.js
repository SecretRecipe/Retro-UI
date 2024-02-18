
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

/* OPENING NEW WINDOW */
function createNewWindow(cellClicked, footer, size = 20) {
    if (cellClicked.className.includes('Closed')) {

        let cellClickedID = getID(cellClicked)

        let newWindow = document.createElement('div')
        newWindow.className = 'Open Window'
        newWindow.id = cellClickedID

        const top = document.createElement('div')
        top.style.width = '100%';
        top.style.height = size + 'px';
        top.style.backgroundColor = 'red';
        top.style.position = 'absolute';
        top.style.top = - (size / 2) + 'px';
        top.style.left = '0px';
        top.style.cursor = 'n-resize';
        top.className = 'Window Border'
        top.id = 'top'

        const bottom = document.createElement('div');
        bottom.style.width = '100%';
        bottom.style.height = size + 'px';
        bottom.style.backgroundColor = 'transparent';
        bottom.style.position = 'absolute';
        bottom.style.bottom = - (size / 2) + 'px';
        bottom.style.left = '0px';
        bottom.style.cursor = 'n-resize';
        bottom.className = 'Window Border'
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
        left.className = 'Window Border'

        const right = document.createElement('div');
        right.style.width = size + 'px';
        right.style.height = '100%';
        right.style.backgroundColor = 'transparent';
        right.style.position = 'absolute';
        right.style.top = '0px';
        right.style.right = - (size / 2) + 'px';
        right.style.cursor = 'e-resize';
        right.id = 'right'
        right.className = 'Window Border'

        const corner1 = document.createElement('div');
        corner1.style.width = size + 'px';
        corner1.style.height = size + 'px';
        corner1.style.backgroundColor = 'transparent';
        corner1.style.position = 'absolute';
        corner1.style.top = - (size / 2) + 'px';
        corner1.style.left = - (size / 2) + 'px';
        corner1.style.cursor = 'nw-resize';
        corner1.id = 'corner-1'
        corner1.className = 'Window Border'

        const corner2 = document.createElement('div');
        corner2.style.width = size + 'px';
        corner2.style.height = size + 'px';
        corner2.style.backgroundColor = 'pink';
        corner2.style.position = 'absolute';
        corner2.style.top = - (size / 2) + 'px';
        corner2.style.right = - (size / 2) + 'px';
        corner2.style.cursor = 'ne-resize';
        corner2.id = 'corner-2'
        corner2.className = 'Window Border'

        const corner3 = document.createElement('div');
        corner3.style.width = size + 'px';
        corner3.style.height = size + 'px';
        corner3.style.backgroundColor = 'transparent';
        corner3.style.position = 'absolute';
        corner3.style.bottom = - (size / 2) + 'px';
        corner3.style.left = - (size / 2) + 'px';
        corner3.style.cursor = 'sw-resize';
        corner3.id = 'corner-3'
        corner3.className = 'Window Border'

        const corner4 = document.createElement('div');
        corner4.style.width = size + 'px';
        corner4.style.height = size + 'px';
        corner4.style.backgroundColor = 'transparent';
        corner4.style.position = 'absolute';
        corner4.style.bottom = - (size / 2) + 'px';
        corner4.style.right = - (size / 2) + 'px';
        corner4.style.cursor = 'se-resize';
        corner4.id = 'corner-4'
        corner4.className = 'Window Border'

        newWindow.append(top)
        newWindow.append(bottom)
        newWindow.append(left)
        newWindow.append(right)
        newWindow.appendChild(corner1);
        newWindow.appendChild(corner2);
        newWindow.appendChild(corner3);
        newWindow.appendChild(corner4);

        /* HEADER */

        let windowHeader = document.createElement('div')
        windowHeader.className = 'Window Header'
        windowHeader.id = 'header'

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

        openWindows.push(new Window(newWindow, windowHeader, footerWindow, newWindow.id))

    }
}

function startWindowEvents(windows) {
    
    windows.forEach((window) => {

        let appState = document.getElementById(window.id)   
        window.tackledHeader.addEventListener('mousedown', getHeaderEvents)
        window.tackledHeader.addEventListener('mousedown', elementDrag)
        document.addEventListener('mousedown', elementDrag)

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

            let tackledElement = event.target.className

            document.addEventListener('mousemove', dragEvent)
            document.addEventListener('mouseup', stopEvent)

            function dragEvent(event) {

                let offSetX = window.getXSpan(event, event.clientX, X)
                let offSetY = window.getYSpan(event, event.clientY, Y)
                
                if (tackledElement == 'Window Header') {
                    window.tackledHeader.style.cursor = 'move'
                    window.distantiateLeft(window.tackledWindow,  offSetX + left)
                    window.distantiateTop(window.tackledWindow, offSetY + top)
                }

                if (tackledElement == 'Window Border') {

                    tackledBorder = event.target.id

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
                
                    window.distantiateTop(window.tackledWindow, newOffsetTop)
                    window.distantiateLeft(window.tackledWindow, newOffsetLeft)
                }
            }

            function stopEvent() {
                document.removeEventListener('mousemove', dragEvent)
                window.tackledHeader.style.cursor = 'default'
            }

        }
    })
}
