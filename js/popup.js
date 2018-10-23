$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function initializePopup() {
    displayEnvironments();
}

function displayEnvironments() {
    getEnvironments();
}

function getEnvironments() {
    callEventPageMethod("getEnvironments", function (response) {
        console.log('>>> getEnvironments', response);
    });
}

function callEventPageMethod(type, callback) {
    chrome.runtime.sendMessage({type: type}, (response) => {
        callback(response)
    });
}

initializePopup();
