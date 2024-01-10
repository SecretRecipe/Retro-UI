document.addEventListener('DOMContentLoaded', () => {

    /* ========================== Windows BAR: Events  ================================= */

    const windowsButton = document.getElementById('Windows-button');
    const windowsMenu = document.getElementById('Windows-menu');
    const windowsBar_Apps = Array.from(document.getElementsByClassName('App-bar'));

    let windowsMenuIsOpen = false;
    let newAppOpened = 1;

    windowsButton.addEventListener('click', function openWindowsMenu() {

        if (windowsMenuIsOpen == false) {
            windowsMenu.style.display = 'block';
            windowsButton.style.background = 'rgb(0, 94, 14)'
            windowsMenuIsOpen = true;
        }

        else {
            windowsMenu.style.display = 'none';
            windowsButton.style.background = 'green'
            windowsMenuIsOpen = false;
        }
    })

    function App_Display_On_Bar(element, elementIndex, title) {
        element[elementIndex].style.display = 'block';
        element[elementIndex].append(title);
    }

    /* =========================== Windows BAR: Events  ============================== */

    /* =========================================================================================================================== */ 

    /* =========================== Windows MENU: Events  ============================= */

    const leftSide = Array.from(document.getElementsByClassName('Left app container'));
    const rightSide = Array.from(document.getElementsByClassName('Right app container'));

    leftSide.forEach((LeftApp) => {

        LeftApp.addEventListener('mouseenter', () => {
            LeftApp.style.background = 'rgb(55, 94, 204)';
            LeftApp.style.color = 'white';
        })

        LeftApp.addEventListener('mouseleave', () => {
            LeftApp.style.background = 'white';
            LeftApp.style.color = 'black';
        })
    })

    rightSide.forEach((rightApp) => {

        rightApp.addEventListener('mouseenter', () => {
            rightApp.style.background = 'rgb(55, 94, 204)';
            rightApp.style.color = 'white';
        })

        rightApp.addEventListener('mouseleave', () => {
            rightApp.style.background = 'rgb(215, 231, 248)';
            rightApp.style.color = 'black';
        })
    })

    /* ================== MENU: Window Events  =================== */

    const minimizeButton = document.getElementById('Minimize-window');
    const fullButton = document.getElementById('Full-window');
    const closingButton = document.getElementById('Close-window');

    function hideWindow(element) {
        element.style.display = 'none'
    }

    function showWindow(element) {
        element.style.display = 'block'
    }

    function makeDraggable(headerName, windowName) {

        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        headerName.onmousedown = dragMouseDown;

        function dragMouseDown(e) {

            e.preventDefault();

            pos3 = e.clientX;
            pos4 = e.clientY;

            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;

            headerName.style.cursor = 'move';
        }

        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            windowName.style.top = (windowName.offsetTop - pos2) + "px";
            windowName.style.left = (windowName.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function makeResizable(element, minH = 100, minW = 100, size = 10) {

        /* ============ creating the borders ============== */

        const top = document.createElement('div');
        top.style.width = '100%';
        top.style.height = size + 'px';
        top.style.backgroundColor = 'transparent';
        top.style.position = 'absolute';
        top.style.top = - (size / 2) + 'px';
        top.style.left = '0px';
        top.style.cursor = 'n-resize';

        
        const bottom = document.createElement('div');
        bottom.style.width = '100%';
        bottom.style.height = size + 'px';
        bottom.style.backgroundColor = 'transparent';
        bottom.style.position = 'absolute';
        bottom.style.bottom = - (size / 2) + 'px';
        bottom.style.left = '0px';
        bottom.style.cursor = 'n-resize';
        
        const left = document.createElement('div');
        left.style.width = size + 'px';
        left.style.height = '100%';
        left.style.backgroundColor = 'transparent';
        left.style.position = 'absolute';
        left.style.top = '0px';
        left.style.left = - (size / 2) + 'px';
        left.style.cursor = 'e-resize';
        
        const right = document.createElement('div');
        right.style.width = size + 'px';
        right.style.height = '100%';
        right.style.backgroundColor = 'transparent';
        right.style.position = 'absolute';
        right.style.top = '0px';
        right.style.right = - (size / 2) + 'px';
        right.style.cursor = 'e-resize';
        
        const corner1 = document.createElement('div');
        corner1.style.width = size + 'px';
        corner1.style.height = size + 'px';
        corner1.style.backgroundColor = 'green';
        corner1.style.position = 'absolute';
        corner1.style.top = - (size / 2) + 'px';
        corner1.style.left = - (size / 2) + 'px';
        corner1.style.cursor = 'nw-resize';
        
        const corner2 = document.createElement('div');
        corner2.style.width = size + 'px';
        corner2.style.height = size + 'px';
        corner2.style.backgroundColor = 'transparent';
        corner2.style.position = 'absolute';
        corner2.style.top = - (size / 2) + 'px';
        corner2.style.right = - (size / 2) + 'px';
        corner2.style.cursor = 'ne-resize';
        
        const corner3 = document.createElement('div');
        corner3.style.width = size + 'px';
        corner3.style.height = size + 'px';
        corner3.style.backgroundColor = 'transparent';
        corner3.style.position = 'absolute';
        corner3.style.bottom = - (size / 2) + 'px';
        corner3.style.left = - (size / 2) + 'px';
        corner3.style.cursor = 'sw-resize';
        
        const corner4 = document.createElement('div');
        corner4.style.width = size + 'px';
        corner4.style.height = size + 'px';
        corner4.style.backgroundColor = 'transparent';
        corner4.style.position = 'absolute';
        corner4.style.bottom = - (size / 2) + 'px';
        corner4.style.right = - (size / 2) + 'px';
        corner4.style.cursor = 'se-resize';
        
        element.appendChild(top);
        element.appendChild(left);
        element.appendChild(bottom);
        element.appendChild(right);
        element.appendChild(corner1);
        element.appendChild(corner2);
        element.appendChild(corner3);
        element.appendChild(corner4);
        
        /* ============ creating the borders ============== */
        
        /* ============ adding the events  ============== */

        corner1.addEventListener('mousedown', resizeDiagonal_one);
        corner2.addEventListener('mousedown', resizeDiagonal_two);
        corner3.addEventListener('mousedown', resizeDiagonal_three);
        corner4.addEventListener('mousedown', resizeDiagonal_four);

        top.addEventListener('mousedown', resizeYNegative);
        left.addEventListener('mousedown', resizeXNegative);
        right.addEventListener('mousedown', resizeXPositive);
        bottom.addEventListener('mousedown', resizeYPositive);

        /* ============ adding the events  ============== */


        function gettingStyle(key) {
            return parseInt(window.getComputedStyle(element).getPropertyValue(key));
        }

        function resizeXPositive(e) {

            e.preventDefault();

            let windowWidth = gettingStyle('width');
            let offsetX = e.clientX - windowWidth;

            document.addEventListener('mousemove', elementDrag);
            document.addEventListener('mouseup', stopDragging);

            function elementDrag(e) {

                e.preventDefault();

                widthResize = e.clientX - offsetX;

                if (widthResize > 500) {
                    element.style.width = widthResize + 'px';
                }
            }

            function stopDragging() {
                document.removeEventListener('mousemove', elementDrag);
                document.removeEventListener('mouseup', stopDragging);
            }
        }

        function resizeYPositive(e) {

            e.preventDefault();

            let windowHeight = gettingStyle('height');
            let offsetY = e.clientY - windowHeight;


            document.addEventListener('mousemove', elementDrag);
            document.addEventListener('mouseup', stopDragging);

            function elementDrag(e) {

                e.preventDefault();

                let heightResize = e.clientY - offsetY;

                if (heightResize > 400) {
                    element.style.height = heightResize + 'px';
                }
            }

            function stopDragging() {
                document.removeEventListener('mousemove', elementDrag);
                document.removeEventListener('mouseup', stopDragging);
            }
        }

        function resizeXNegative(e) {

            let windowsWidth = gettingStyle('width');
            let leftPosition = gettingStyle('left');
            let offsetX = e.clientX;

            document.addEventListener('mousemove', elementDrag);
            document.addEventListener('mouseup', stopDragging);

            function elementDrag(e) {
                
                e.preventDefault();

                widthResize = windowsWidth - (e.clientX - offsetX);
                x_Positioning = leftPosition + (e.clientX - offsetX)

                if (widthResize > 500) {
                    element.style.width = widthResize + 'px';
                    element.style.left = x_Positioning + 'px';
                }
            }

            function stopDragging() {
                document.removeEventListener('mousemove', elementDrag);
                document.removeEventListener('mouseup', removeEventListener);
            }
        }

        function resizeYNegative(e) {

            e.preventDefault();

            let windowsHeight = gettingStyle('height');
            let topPosition = gettingStyle('top');
            let offsetY = e.clientY;

            document.addEventListener('mousemove', elementDrag);
            document.addEventListener('mouseup', stopDragging);

            function elementDrag(e) {

                e.preventDefault();

                heightResize = windowsHeight - (e.clientY - offsetY);
                y_Positioning = topPosition + (e.clientY - offsetY);

                if (heightResize > 400) {
                    element.style.height = heightResize + 'px';
                    element.style.top = y_Positioning + 'px';
                }
            }

            function stopDragging() {
                document.removeEventListener('mousemove', elementDrag);
                document.removeEventListener('mouseup', removeEventListener);
            }
        }

        function resizeDiagonal_one(e) {

            e.preventDefault();
            
            let windowsHeight = gettingStyle('height');
            let topPosition = gettingStyle('top');
            let offsetY = e.clientY;
            
            let windowsWidth = gettingStyle('width');
            let leftPosition = gettingStyle('left');
            let offsetX = e.clientX 
            
            document.addEventListener('mousemove', elementDrag);
            document.addEventListener('mouseup', stopDragging);
            
            function elementDrag(e) {

                e.preventDefault();
                
                heightResize = windowsHeight - (e.clientY - offsetY);
                y_Positioning = topPosition + (e.clientY - offsetY)
                
                widthResize = windowsWidth - (e.clientX - offsetX);
                x_Positioning = leftPosition + (e.clientX - offsetX);
     
                if (heightResize > 400 && widthResize > 500) {

                    element.style.height = heightResize + 'px';
                    element.style.top = y_Positioning + 'px';

                    element.style.width = widthResize + 'px';
                    element.style.left = x_Positioning + 'px';
                }
            }

            function stopDragging() {
                document.removeEventListener('mousemove', elementDrag);
                document.removeEventListener('mouseup', stopDragging);
            }
        }

        
        function resizeDiagonal_two(e) {

            e.preventDefault()

            let windowsHeight = gettingStyle('height');
            let topPosition = gettingStyle('top');
            let offsetY = e.clientY;

            let windowsWidth = gettingStyle('width');
            let offsetX = e.clientX - windowsWidth;

            document.addEventListener('mousemove', elementDrag);
            document.addEventListener('mouseup', stopDragging);

            function elementDrag(e) {

                e.preventDefault();

                heightResize = windowsHeight - (e.clientY - offsetY);
                y_Positioning = topPosition + (e.clientY - offsetY);
               
                widthResize = e.clientX - offsetX;

                if (heightResize > 400 && widthResize > 500) {

                    element.style.height = heightResize + 'px';
                    element.style.top = y_Positioning + 'px';

                    element.style.width = widthResize + 'px';
                }
            }

            function stopDragging() {
                document.removeEventListener('mousemove', elementDrag);
                document.removeEventListener('mouseup', stopDragging);
            }
        }

        function resizeDiagonal_three(e) {

            e.preventDefault()

            let windowsHeight = gettingStyle('height');
            let offsetY = e.clientY - windowsHeight;

            let windowsWidth = gettingStyle('width');
            let leftPosition = gettingStyle('left');
            let offsetX = e.clientX;

            document.addEventListener('mousemove', elementDrag);
            document.addEventListener('mouseup', stopDragging);

            function elementDrag(e) {

                e.preventDefault();

                heightResize = e.clientY - offsetY;
                
                widthResize = windowsWidth - (e.clientX - offsetX);
                x_Positioning = leftPosition + (e.clientX - offsetX);

                if (heightResize > 400 && widthResize > 500) {
                    
                    element.style.width = widthResize + 'px';
                    element.style.left = x_Positioning + 'px';

                    element.style.height = heightResize + 'px';
                }
            }

            function stopDragging() {
                document.removeEventListener('mousemove', elementDrag);
                document.removeEventListener('mouseup', stopDragging);
            }
        }

        function resizeDiagonal_four(e) {

            e.preventDefault()

            windowWidth = gettingStyle('width');
            windowHeight = gettingStyle('height');

            let offsetX = e.clientX - windowWidth;
            let offsetY = e.clientY - windowHeight;

            document.addEventListener('mousemove', elementDrag);
            document.addEventListener('mouseup', stopDragging);

            function elementDrag(e) {

                e.preventDefault();
                let widthResize = e.clientX - offsetX;
                let heightResize = e.clientY - offsetY;

                if (heightResize > 400 && widthResize > 500) {
                    element.style.height = heightResize + 'px';
                    element.style.width = widthResize + 'px';
                }
            }

            function stopDragging() {
                document.removeEventListener('mousemove', elementDrag)
                document.removeEventListener('mouseup', stopDragging)
            }
        }
    }
    

    // ****** MENU: Paint EVENTS **********

    const paint = document.getElementById('Paint');
    const paintWindow = document.getElementById('Paint-window');
    const paintHeader = document.getElementById('Paint-header');
    const paintCanvas = document.getElementById('Canvas');

    let isPaintWindowOpen = false;

    paint.addEventListener('click', () => {

        if (isPaintWindowOpen === false) {
            
            showWindow(paintWindow);
            isPaintWindowOpen = true;

            makeDraggable(paintHeader, paintWindow);
            makeResizable(paintWindow);

            App_Display_On_Bar(windowsBar_Apps, newAppOpened, "Paint")
            
            closingButton.addEventListener('click', () => {

                hideWindow(paintWindow)

                windowsBar_Apps[newAppOpened].style.display = 'none';
                isPaintWindowOpen = false;
            
            })
        }

        windowsBar_Apps.forEach((AppDisplayed) => {
            AppDisplayed.addEventListener('click', () => {
                if (isPaintWindowOpen == false) {
                    paintWindow.style.display = 'block';
                }
            })
        })

        minimizeButton.addEventListener('click', () => {
            hideWindow(paintWindow);
            isPaintWindowOpen = false;
        })

        fullButton.addEventListener('click', () => {
            paintWindow.style.width = '100%';
            paintWindow.style.height = '95%';
            paintWindow.style.left = '0px';
            paintWindow.style.top = '0px';
        })

     
    })

    // ****** MENU: Internet Explorer EVENTS **********

    const internetButton = document.getElementById('Internet-explorer');
    const internetWindow = document.getElementById('Internet-window');
    const internetHeader = document.getElementById('Internet-header');

    let isInternetExplorerOpen = false 
    internetButton.addEventListener('click', () => {

        if (isInternetExplorerOpen === false) {
            showWindow(internetWindow)
            isInternetExplorerOpen = true;

            makeDraggable(internetHeader, internetWindow);
            makeResizable(internetWindow);
        }

    })


})

