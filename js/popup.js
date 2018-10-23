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
        console.log('>>> getEnvironments', data);
        buildEnvironmentsSelector(data);
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
    Object.keys(environments).forEach(function (key) {
        console.log('Key : ' + key)
    })
}

function callEventPageMethod(type, callback) {
    chrome.runtime.sendMessage({type: type}, (response) => {
        callback(response);
    });
}

initializePopup();
