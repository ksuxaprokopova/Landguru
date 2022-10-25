$(".question_items > div ").on("click", function(){
    $(this).parent(".question_items").toggleClass("change_color");
    $(this).next(".question_icon2").slideToggle(300);
    $(".question_icon1").css("display", "none;");
})

$(".question_items > div >p").on("click", function(){
    $(this).next(".items_text").slideToggle(300);
})



