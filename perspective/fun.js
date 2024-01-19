const currentScript = document.currentScript;

function addScriptAfterCurrent(src) {
    const currentScript = document.currentScript;
    const newScript = document.createElement('script');
    newScript.src = src;

    if (currentScript.nextSibling) {
        currentScript.parentNode.insertBefore(newScript, currentScript.nextSibling);
    } else {
        currentScript.parentNode.appendChild(newScript);
    }
}

addScriptAfterCurrent("https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js");

window.addEventListener('load', () => {
    new Darkmode().showWidget();
});