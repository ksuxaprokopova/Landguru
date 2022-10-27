
$(".question_items > div ").on("click", function(){
    $(this).parent(".question_items").toggleClass("change_color"); 
    $(".question_icon").toggleClass("question_rotate_icon");
})

$(".question_items > div >p").on("click", function(){
    $(this).next(".items_text").slideToggle(300);
})