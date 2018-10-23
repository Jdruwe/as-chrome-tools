let environments = {};

function initializePopup() {
    console.log(environments);
    getEnvironments();
}

function toggleTooltips() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
}

//TODO: rename this function
function getEnvironments() {

    callEventPageMethod("getFascias", function (data) {
        $("#nav-sites").append(buildFasciaSelector(data));

        //TODO: move this call?
        toggleTooltips();
    });

    callEventPageMethod("getEnvironments", function (data) {
        $("#nav-sites").append(buildEnvironmentsSelector(data));
        environments = data;
    });
}

function buildFasciaSelector(fascias) {
    const group = buildFasciaSelectorButtonGroup();
    appendFasciaSelectorItems(fascias, group);
    return group;
}

function buildFasciaSelectorButtonGroup() {
    const group = document.createElement("div");
    group.className = "btn-group btn-group-toggle";
    group.dataset.toggle = "buttons";
    return group;
}

function appendFasciaSelectorItems(fascias, group) {
    fascias.forEach(function (fascia) {
        const item = buildFasciaSelectorItem(fascia);
        const parsedItem = $.parseHTML(item);
        $(group).append(parsedItem);
    });
}

function buildFasciaSelectorItem(fascia) {
    return `<label class="btn btn-light" data-toggle="tooltip" data-placement="top" title="${capitalizeFirstLetter(fascia)}">
                <img class="fascia-image" src="images/fascia/${fascia}.png" alt="">
                <input type="radio" name="options" id="${fascia}" autocomplete="off">
            </label>`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function buildEnvironmentsSelector(environments) {
    const group = buildEnvironmentsButtonGroup();
    appendEnvironmentSelectorItems(environments, group);
    return group;
}

function buildEnvironmentsButtonGroup() {
    const group = document.createElement("div");
    group.className = "btn-group btn-group-toggle environment-selector";
    group.dataset.toggle = "buttons";
    return group;
}

function appendEnvironmentSelectorItems(environments, group) {
    Object.keys(environments).forEach(function (environment) {
        const item = buildEnvironmentSelectorItem(environment);
        const parsedItem = $.parseHTML(item);
        $(group).append(parsedItem);
    });
}

function buildEnvironmentSelectorItem(environment) {
    return `<label class="btn btn-light">
                <input type="radio" name="options" id="${environment}" autocomplete="off">${environment}
            </label>`;
}

function callEventPageMethod(type, callback) {
    chrome.runtime.sendMessage({type: type}, (response) => {
        callback(response);
    });
}

initializePopup();
