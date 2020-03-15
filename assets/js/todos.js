//Check off todos
$("li").click(function(){
    $(this).toggleClass("completed");
});

//Click on x to delete
$("span").click(function(e){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    e.stopPropagation();
});