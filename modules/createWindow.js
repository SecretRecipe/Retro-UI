
import { getButtonElements } from './buttons.js'
import { moveWindow } from './moveWindow.js'
import { resizeWindow } from './resizeWindow.js'

export function openWindow(app, footer, size = 20) {
    
    if (app.className.includes('Closed')) {
        let newWindow = document.createElement('div')
        newWindow.className = 'Open Window' 
        newWindow.id = 'Window' + ' ' + app.id

        const top = document.createElement('div')
        top.style.width = '100%';
        top.style.height = size + 'px';
        top.style.backgroundColor = 'transparent';
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
        corner2.style.backgroundColor = 'transparent';
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
        
        let header = document.createElement('div')
        header.className = 'Header'
        header.id = 'Header' + ' ' + app.id
        
        let appTitle = document.createElement('div')
        appTitle.className = 'App Title'
        let icon = document.createElement('img')
        icon.setAttribute('src', `images/icons/${app.id}.ico`)
        let span = document.createElement('span')
        span.innerHTML = app.id 
        appTitle.append(icon, span)
        
        let buttonContainer = document.createElement('div')
        buttonContainer.className =  'Window Buttons'
        buttonContainer.id = 'window-buttons'

        let closeButton = document.createElement('button')
        closeButton.innerHTML = `<img src = "images/icons/close-window.png" id = "close-window" class = "Btn ${app.id}">`
        closeButton.id = 'close-button'

        let minimizeButton = document.createElement('button')
        minimizeButton.innerHTML = `<img src = "images/icons/minimize-window.png" id = "minimize-window" class = "Btn ${app.id}">`
        minimizeButton.id = 'minimize-button'
        
        let fullButton = document.createElement('button')
        fullButton.innerHTML = `<img src = "images/icons/full-window.jpg" id =  "full-window" class = "Btn ${app.id}">`
        fullButton.id = 'full-button'

        buttonContainer.append(minimizeButton, fullButton, closeButton)
        
        let innerContent = document.createElement('object')
        innerContent.setAttribute('data', `pages/${app.id}/${app.id}.html`)
        
        let openFooter = document.createElement('div')
        openFooter.className = 'Open Footer'
        openFooter.id = 'footer' + '-' + app.id
        
        let footerIcon = document.createElement('img')
        footerIcon.setAttribute('src', `images/icons/${app.id}.ico`)
        let footerSpan = document.createElement('span')
        footerSpan.innerHTML = app.id 
        openFooter.append(footerIcon, footerSpan)
        footer.append(openFooter)
        
        header.append(appTitle)
        header.append(buttonContainer)
        newWindow.append(header)
        newWindow.append(innerContent)
 
        document.body.append(newWindow)

        app.className = app.className.replace('Closed', 'Open')
        
        getButtonElements(app, newWindow, openFooter, minimizeButton, fullButton, closeButton)
        moveWindow(newWindow, header)
        resizeWindow(newWindow, top, bottom, right, left, corner1, corner2, corner3, corner4)

    }
    
}


