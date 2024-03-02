function saveTask(){
    console.log("Saving")
    const title  = $("#inputTitle").val();
    const description = $("#inputDescription").val();
    const color = $("#inputColor").val();
    const startdate = $("#inputStartDate").val();
    const budget = $("#inputBudget").val();
    const status = $("#inputStatus").val();

    console.log(title,description,color,startdate,budget,status,)
}


function init(){
    console.log("this is the task manager")
    //loading data

    //hooking event
    $("#btnSave").click(saveTask)
    //this is equal to document.getElementById("btnSave")

}

window.onload = init;