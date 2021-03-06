//Check off todos
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on x to delete
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text").keypress(function(e){
    if(e.which === 13){
        //taking new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text").fadeToggle();
})