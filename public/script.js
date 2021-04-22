let toggleTaskList = $('#toggleTaskList');
let taskElements = $('.taskElements');
let inpListName = $('#inpListName');
let selTaskList = $('#selTaskList');
let discription = $('#discription');
let displayListName = $('#displayListName');

function createTaskPlate(task) {
    return $(`
    <div class="taskPlate">
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">${task.taskName}</label>
        </div>
        <button id="btnPlate1" type="button" class="btn-close" aria-label="Close"></button>
    </div>
    `);
}

function createListPlate(list) {
    return $(`<option>${list.listName}</option>`);
}