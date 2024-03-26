export function getAttribute(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style)
}
