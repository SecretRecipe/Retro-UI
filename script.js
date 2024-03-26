import { openWindow } from './modules/createWindow.js'
import { getAttribute  } from './modules/getAttribute.js'

document.addEventListener('DOMContentLoaded', () => {

    let menuApps = Array.from(document.getElementsByClassName('Cell Closed'))
    let footer = document.getElementById('taskbar')

    menuApps.forEach((app) => {
        
        let backgroundColor = getAttribute(app, 'background-color')

        app.addEventListener('mouseenter', () => {
            app.style.background = 'rgb(78, 129, 231)'
            app.style.color = 'white'
            app.style.cursor = 'pointer'
        })
        
        app.addEventListener('mouseleave', () => {
            app.style.color = 'black'
            app.style.background = backgroundColor
        })
        
        app.addEventListener('click', () => {
            openWindow(app, footer)
        })
        
    })

})

