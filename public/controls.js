$(function() {

    $.get("/api/lists", function(lists) {
        toggleTaskList.empty();
        selTaskList.empty();
        for(list of lists) {
            toggleTaskList.append(createListPlate(list));
            selTaskList.append(createListPlate(list));
        }
    });

    $.get("/api/tasks", {listname: "Default List"}, function(tasks) {
        taskElements.empty();
        for(task of tasks) {
            taskElements.append(createTaskPlate(task));
        }
    });

    $('#btnGetTasks').click(function() {
        $.get("/api/tasks", {
            listname: toggleTaskList.val()
        }, function(tasks) {
            displayListName.html(toggleTaskList.val());
            taskElements.empty();
            for(task of tasks) {
                taskElements.append(createTaskPlate(task));
            }
        });
    });

    $('#btnAddList').click(function() {
        $.post("/api/lists", {
            listName: inpListName.val()
        }, function(list) {
            toggleTaskList.append(createListPlate(list));
            selTaskList.append(createListPlate(list));
        });
    });

    $('#btnAddTask').click(function() {
        $.post("/api/tasks", {
            listName: selTaskList.val(),
            taskName: discription.val()
        }, function(task) {
            if(toggleTaskList.val() === task.listName)
                taskElements.append(createTaskPlate(task));
        });
    });

});