export function getButtonElements(app, window, footer, minimize, full, close) {
    
    let isClosed = false 

    minimize.addEventListener('click', () => {
        window.style.display = 'none'
        isClosed = true

        footer.addEventListener('click', () => {
            if (isClosed) {
                window.style.display = 'block'
            }
        })

    })

    full.addEventListener('click', () => {
        window.style.height = '95%'
        window.style.width = '100%'
    })

    close.addEventListener('click', () => {
        window.remove()
        footer.remove()
        app.className = app.className.replace('Open', 'Closed')
    })
    
}
