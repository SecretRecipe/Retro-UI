function createBorders(window) {
    for (i = 0; i < window.length; i++) {
        (function (tackledWindow, size = 10) {

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

            tackledWindow.append(top)
            tackledWindow.append(bottom)
            tackledWindow.append(left)
            tackledWindow.append(right)
            tackledWindow.appendChild(corner1);
            tackledWindow.appendChild(corner2);
            tackledWindow.appendChild(corner3);
            tackledWindow.appendChild(corner4);
        }(window[i]))
    }
}

export default createBorders
