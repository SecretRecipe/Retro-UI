document.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementById('Windows-button');
    const menu = document.getElementsByClassName('Windows-menu');
    
    /* PAINT */ 
    const paint = document.getElementById('Paint');
    const paintWindow = document.getElementById('Paint-window');
    paintWindow.style.display = 'none';
    let paintClick = false
    /* PAINT */ 

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

    paint.addEventListener('click', () => {
        if (paintClick === false) {
            showWindow(paintWindow)
            paintClick = true
        }
        else {
            hideWindow(paintWindow)
            paintClick = false
        }
    })


    function hideWindow(element, button) {
        element.style.display = 'none'
        button = true
    }

    function showWindow(element) {
        element.style.display = 'block'
    }
})
