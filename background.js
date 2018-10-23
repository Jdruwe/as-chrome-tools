chrome.runtime.onInstalled.addListener(function () {
    setPageRules();
    showWelcomeMessage();
    setInitialData();
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

function setInitialData() {
    chrome.storage.sync.set({
        environments: {
            "prd001": {
                "asadventure": [
                    "https://www.asadventure.com",
                    "https://www.asadventure.nl",
                    "https://www.asadventure.co.uk",
                    "https://www.asadventure.fr",
                    "https://www.asadventure.lu",
                    "https://shop.asadventure.com",
                    "https://shop.asadventure.nl",
                    "https://shop.asadventure.co.uk",
                    "https://shop.asadventure.fr",
                    "https://shop.asadventure.lu"
                ],
                "juttu": [
                    "https://www.juttu.be",
                    "https://shop.juttu.be"
                ],
                "yaya": [
                    "https://www.yaya.be",
                    "https://shop.yaya.be"
                ],
                "runnersneed": [
                    "https://www.runnersneed.com",
                    "https://shop.runnersneed.com"
                ],
                "bever": [
                    "https://www.bever.nl",
                    "https://shop.bever.nl"
                ],
                "cyclesurgery": [
                    "https://www.cyclesurgery.com",
                    "https://shop.cyclesurgery.com"
                ],
                "snowandrock": [
                    "https://www.snowandrock.com",
                    "https://shop.snowandrock.com"
                ],
                "cotswold": [
                    "https://www.cotswoldoutdoor.com",
                    "https://www.cotswoldoutdoor.ie",
                    "https://www.cotswoldoutdoor.us",
                    "https://www.cotswoldoutdoor.com.au",
                    "https://shop.cotswoldoutdoor.com",
                    "https://shop.cotswoldoutdoor.ie"
                ],
                "mctrek": [
                    "https://www.mctrek.de",
                    "https://shop.mctrek.de"
                ]
            },
            "prp001": {
                "asadventure": [
                    "https://prp-asadventure-fr.foxandcat.eu",
                    "https://prp-asadventure-co-uk.foxandcat.eu",
                    "https://prp-asadventure-lu.foxandcat.eu",
                    "https://prp-asadventure-nl.foxandcat.eu",
                    "https://prp-asadventure-com.foxandcat.eu",
                    "https://prp-shop-asadventure-com.foxandcat.eu",
                    "https://prp-shop-asadventure-fr.foxandcat.eu"
                ],
                "juttu": [
                    "https://prp-juttu-be.foxandcat.eu",
                    "https://prp-shop-juttu-be.foxandcat.eu"
                ],
                "yaya": [
                    "https://prp-yaya-be.foxandcat.eu",
                    "https://prp-shop-yaya-be.foxandcat.eu"
                ],
                "runnersneed": [
                    "https://prp-runnersneed-com.foxandcat.eu",
                    "https://prp-shop-runnersneed-com.foxandcat.eu"
                ],
                "bever": [
                    "https://prp-bever-nl.foxandcat.eu",
                    "https://prp-shop-bever-nl.foxandcat.eu"
                ],
                "cyclesurgery": [
                    "https://prp-cyclesurgery-com.foxandcat.eu",
                    "https://prp-shop-cyclesurgery-com.foxandcat.eu"

                ],
                "snowandrock": [
                    "https://prp-snowandrock-com.foxandcat.eu",
                    "https://prp-shop-snowandrock-com.foxandcat.eu"

                ],
                "cotswold": [
                    "https://prp-cotswoldoutdoor-ie.foxandcat.eu",
                    "https://prp-cotswoldoutdoor-com.foxandcat.eu",
                    "https://prp-shop-cotswoldoutdoor-com.foxandcat.eu",
                    "https://prp-shop-cotswoldoutdoor-ie.foxandcat.eu"

                ],
                "mctrek": [
                    "https://prp-mctrek-de.foxandcat.eu",
                    "https://prp-shop-mctrek-de.foxandcat.eu"
                ]
            },
            "acc001": {
                "asadventure": [
                    "https://acc-asadventure-fr.foxandcat.eu",
                    "https://acc-asadventure-co-uk.foxandcat.eu",
                    "https://acc-asadventure-lu.foxandcat.eu",
                    "https://acc-asadventure-nl.foxandcat.eu",
                    "https://acc-asadventure-com.foxandcat.eu",
                    "https://acc-shop-asadventure-fr.foxandcat.eu",
                    "https://acc-shop-asadventure-com.foxandcat.eu"
                ],
                "juttu": [
                    "https://acc-juttu-be.foxandcat.eu",
                    "https://acc-shop-juttu-be.foxandcat.eu"
                ],
                "yaya": [
                    "https://acc-yaya-be.foxandcat.eu",
                    "https://acc-shop-yaya-be.foxandcat.eu"
                ],
                "runnersneed": [
                    "https://acc-runnersneed-com.foxandcat.eu",
                    "https://acc-shop-runnersneed-com.foxandcat.eu"
                ],
                "bever": [
                    "https://acc-bever-nl.foxandcat.eu",
                    "https://acc-shop-bever-nl.foxandcat.eu"
                ],
                "cyclesurgery": [
                    "https://acc-cyclesurgery-com.foxandcat.eu",
                    "https://acc-shop-cyclesurgery-com.foxandcat.eu"
                ],
                "snowandrock": [
                    "https://acc-snowandrock-com.foxandcat.eu",
                    "https://acc-shop-snowandrock-com.foxandcat.eu"
                ],
                "cotswold": [
                    "https://acc-cotswoldoutdoor-ie.foxandcat.eu",
                    "https://acc-cotswoldoutdoor-com.foxandcat.eu",
                    "https://acc-shop-cotswoldoutdoor-ie.foxandcat.eu",
                    "https://acc-shop-cotswoldoutdoor-com.foxandcat.eu"
                ],
                "mctrek": [
                    "https://acc-mctrek-de.foxandcat.eu",
                    "https://acc-shop-mctrek-de.foxandcat.eu"
                ]
            },
            "tst001": {
                "asadventure": [
                    "https://tst-asadventure-nl.foxandcat.eu",
                    "https://tst-asadventure-com.foxandcat.eu"
                ],
                "juttu": [
                    "https://tst-juttu-be.foxandcat.eu"
                ],
                "yaya": [
                    "https://tst-yaya-be.foxandcat.eu"
                ],
                "runnersneed": [
                    "https://tst-runnersneed-com.foxandcat.eu"
                ],
                "bever": [
                    "https://tst-bever-nl.foxandcat.eu"
                ],
                "cyclesurgery": [
                    "https://tst-cyclesurgery-com.foxandcat.eu"
                ],
                "snowandrock": [
                    "https://tst-snowandrock-com.foxandcat.eu"
                ],
                "cotswold": [
                    "https://tst-cotswoldoutdoor-com.foxandcat.eu"
                ],
                "mctrek": [
                    "https://tst-mctrek-de.foxandcat.eu"
                ]
            }
        }
    });
}

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    switch (msg.type) {
        case "getEnvironments":
            getEnvironments(response);
            break;
    }
    return true;
});

function getEnvironments(response) {
    chrome.storage.sync.get("environments", (data) => {
        response(data.environments);
    });
}
