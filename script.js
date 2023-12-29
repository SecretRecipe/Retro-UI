document.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementById('Windows-button');
    const menu = document.getElementsByClassName('Windows-menu');

    menu[0].style.display = 'block';
    buttonClick = false
    
    const leftSide = Array.from(document.getElementsByClassName('Left app container'))
    const rightSide = Array.from(document.getElementsByClassName('Right app container'))

    /*
    button.addEventListener('click', () => {
        if (buttonClick == false) {
            menu[0].style.display = 'block';
            button.style.background = 'rgb(0, 94, 14)'
            buttonClick = true;
        }
        else {
            menu[0].style.display = 'none';
            button.style.background = 'green'
            buttonClick = false;
        }
    })
    */

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

    /* APPS AREA */

    // PAINT
    const paint = document.getElementById('Paint');
    const paintWindow = document.getElementById('Paint-window');
    const paintHeader = document.getElementById('Paint-header');
    paintWindow.style.display = 'none';
    let paintClick = false

    paint.addEventListener('click', () => {
        if (paintClick === false) {
            showWindow(paintWindow)
            dragElement(paintHeader, paintWindow)
            paintClick = true
        }
        else {
            hideWindow(paintWindow)
            paintClick = false
        }
    })
   
    

    

    /* FUNCTIONS */

    function hideWindow(element, button) {
        element.style.display = 'none'
        button = true
    }

    function showWindow(element) {
        element.style.display = 'block'
    }

    function dragElement(headerName, windowName) {
        
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        headerName.onmousedown = dragMouseDown;

      
        function dragMouseDown(e) {
          e.preventDefault();
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
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
})
