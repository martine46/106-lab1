

function createTodo(){
    var text = $("#txtTodo").val();
    $("#txtTodo").val(" ");

    var li = "<li>" + text + "</li>";
   $("#pendingList").append(li);
}


function init(){
    console.log("Init of ToDo app");

     //by id
    //document.getElementById("btnSave").onclick=createTodo;
    $("#btnSave").click(createTodo);

    /*
    //by tag
    document.getElementsByTagName("button");
    $("button")

    //by class
    document.getElementsByClassName("create-form");
    $(".create-form")
    */

}

window.onload = init;