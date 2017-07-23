$(document).ready(function() {

	$("#rowAdd").click(function(event){
		event.preventDefault();
		var city = $('#cityNameInput').val();
		var rating = $('#cityRatingInput').val();
	   	$('#cityList').append('<tr><td>' + city + '</td><td>' + rating + '</td><td><button type="button" class="btn btn-danger btn-xs removal"><span class="glyphicon glyphicon-remove"></span></button></td></tr>');
		$('#inputForm')[0].reset();
	})

	$('#cityList').on('click', 'button[type="button"]', function(e){
	   $(this).closest('tr').remove()
	})


});


