export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export function throttle(fn, delay) {
    let time = Date.now();
    return () => {
        if ((time + delay - Date.now()) <= 0) {
            fn();
            time = Date.now();
        }
    };
}