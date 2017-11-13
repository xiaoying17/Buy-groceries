$(function() {
  

  function updateCount(){
		//var count = $('li:not('.complete')').length;
		var items = $('li[class!=complete]').length;
		$('#counter').text(items);
	}
	updateCount();
	//var count = $('li').length;
	//$('h2').append(count);
	$('li').hide().each(function(index){
		$(this).delay(700 * index).fadeIn(700);
	});
  	$('#newItemButton').show();
  	$('#newItemForm').hide();
	$('#newItemButton').on('click',function(){
		$('#newItemButton').hide();
		$('#newItemForm').show();
		
	})


	$('#newItemForm').on('submit',function(e){
		e.preventDefault();
		var newText = $('input:text').val();
		$('li:last').after('<li>' + newText + '</li>');
		updateCount();
		//count++;
		//$('#newItemForm').hide();
		//$('#newItemButton').show();
		$('input:text').val('');
	})

	//$('ul').on('click','li',function(){
$('li').on('click',function(){
		if($(this).hasClass('complete')){
			$(this).remove();
			//count--;
		}else{
			$(this).addClass('complete');
		var item = $(this).text();
		$(this).remove();
		//$detQuote.appendTo($('ul'));
		$('ul').append('<li class="complete">'  + item + '</li>');
		updateCount();
		
		}

		

	})

	
	
});