const currentScript = document.currentScript;

function addScriptAfterCurrent(src, optionalCallback = null) {
    const currentScript = document.currentScript;
    const newScript = document.createElement('script');
    newScript.src = src;

    if ( optionalCallback ) {
        newScript.onload = () => {
            optionalCallback();
        }
    }

    if ( !currentScript ) {
        document.body.appendChild(newScript);
    } else if (currentScript.nextSibling) {
        currentScript.parentNode.insertBefore(newScript, currentScript.nextSibling);
    } else {
        currentScript.parentNode.appendChild(newScript);
    }
}

function addStyle(styles) {
    const newStyle = document.createElement('style');
    newStyle.innerText = styles;
    document.head.append(newStyle);
}

function executeOnLoad(callback) {
    if (document.readyState === 'complete') {
        callback();
    } else {
        window.addEventListener('load', callback);
    }
}

addScriptAfterCurrent("https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js", () => {
    executeOnLoad(() => {
        new Darkmode({
            saveInCookies: false,
            label: '🌓',
            autoMatchOsTheme: true,
        }).showWidget();
    });
});

addStyle(`
    * {
        transition: transform 0.2s ease;
    }
    
    *:not(:has(div)):not(:has(a)):hover {
        transform: scale(1.05);
    }
`);