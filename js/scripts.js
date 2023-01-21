function newItem() {

    //1. Adding a new item to the list of items: 
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);
    
    if (inputValue === "") {
        alert("You must write something!");
    } else {
        $("#list").append(li);
    }
    
    //2. Crossing out an item from the list of items:   
    li.on("dblclick", () => {
        li.toggleClass("strike");
    });
    
    //3(i). Adding the delete button "X": 
    li.append($("<xButton>X</xButton>").on("click", () => {
        li.addClass("delete");
    }));

    //4. Reordering the items and clear input value: 
    $('#list').sortable();
    $("#input").val("");
}