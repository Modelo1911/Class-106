function saveTask(){
    console.log("Saving")
    const title  = $("#inputTitle").val();
    const description = $("#inputDescription").val();
    const color = $("#inputColor").val();
    const startdate = $("#inputStartDate").val();
    const budget = $("#inputBudget").val();
    const status = $("#inputStatus").val();

    console.log(title,description,color,startdate,budget,status)

//build the object
let task = new Task(title,description,color,startdate,budget,status);
console.log(task);

//save to server
$.ajax({
    type: "POST",
    url: "http://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(task),
    contentType: "application/json",
    success: function(response){
        console.log(response);
    },
    error: function(error){
        console.log(error);
    }
});
} 
//display the task
function testRequest(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/",
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        }
    });
}


function init(){
console.log("This is the task manager");
    //loading data

    //hooking event
    $("#btnSave").click(saveTask);
    //this is equal to document.getElementById("btnSave")

}

window.onload = init;