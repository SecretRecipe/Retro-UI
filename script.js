import { openWindow } from './modules/createWindow.js'

document.addEventListener('DOMContentLoaded', () => {

    let menuApps = Array.from(document.getElementsByClassName('Cell Closed'))
    let body = document.querySelector('body')

    menuApps.forEach((app) => {
        
        app.addEventListener('mouseenter', () => {
            app.style.background = 'rgb(78, 129, 231)'
            app.style.color = 'white'
            app.style.cursor = 'pointer'
        })
        
        app.addEventListener('mouseleave', () => {
            app.style.color = 'black'
        })
        
        app.addEventListener('click', () => {
            openWindow(app)
        })
        
    })
    
})

