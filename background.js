chrome.runtime.onInstalled.addListener(function () {
    setPageRules();
    showWelcomeMessage();
});

function setPageRules() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {urlMatches: '.*'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
}

function showWelcomeMessage() {
    notify("A.S.Adventure Chrome Tools has been successfully installed.")
}

function notify(message) {
    chrome.notifications.create(null, {
        type: "basic",
        iconUrl: "images/icon128.png",
        title: "Image Flusher",
        message: message
    });
}