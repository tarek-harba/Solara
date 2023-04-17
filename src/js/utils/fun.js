export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


export function isInParent(element) {
    const rect = element.getBoundingClientRect();
    const parentRect = element.parentElement.getBoundingClientRect();
    const elementCenterPoint = (rect.left + rect.right) / 2
    return (
        elementCenterPoint >= parentRect.left &&
        elementCenterPoint <= parentRect.right
    );
}

export function elementFromHTML(html) {
    const template = document.createElement('template')
    template.innerHTML = html.trim()
    return template.content.firstElementChild
}

// export function isInParentReverted(element) {
//     const rect = element.getBoundingClientRect();
//     const parentRect = element.parentElement.getBoundingClientRect();
//     return (
//         rect.left <= parentRect.right &&
//         rect.right >= parentRect.left
//     );
// }