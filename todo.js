$(document).ready(function() {
 
	// Adds a list item to the top of the to-do list when the button is pressed.  
    $('#newLI').click(function(e) {
		e.preventDefault()
        var add = $('input[name=listItem]').val();
        $('.list').prepend('<li class="item">' + add + '</li>')
    });
    
	// Switches list items to bold when hovered over.
	$(document).on('mouseenter', '.item', function() {
		$(this).css('font-weight', 'bold');
	});
	
	// Returns list items to normal when not hovered over. 
	$(document).on('mouseleave', '.item', function() {
		$(this).css('font-weight', 'normal');
	});
	
	// Removes clicked list items. 
    $(document).on('click', '.item', function() {
        $(this).remove();
    });
});
