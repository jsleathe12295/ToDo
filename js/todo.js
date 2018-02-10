//Checking Off list elements when clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Checked off list items can be deleted all at once
$("h1").on("click", ".fa-trash-alt", function(){
	$('.completed').remove();
})

//Removes list element when span is clicked
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	e.stopPropagation();
});

//Append a new list Item using enter key
$("input[type='text']").keypress(function(e){
	if(e.which===13){
		var addToDo = ($(this).val());
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-minus-circle'></i></span>"+ addToDo + "</li>");
	}
});

//Input box is hidden or unhidden 
$("h1").on("click", ".fa-plus", function(){
	$("input[type='text']").fadeToggle(50);
});



