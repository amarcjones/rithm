
$(function() {


	$('#searchBtn').click(function(event) {
		$('#moviePoster').empty();
		$('#movieDetails').empty();

		event.preventDefault();

	var qryString = ""
	function addParams(qryString, strToAdd){
	  if(qryString.length === 0) {
	    qryString = strToAdd;
	  } else {
	    qryString = qryString + '&' + strToAdd;
	  }
	  return qryString;
	}

		// Create a new variables: 1) HTML request,  and 2) API URL
		var request = new XMLHttpRequest();
		var URL = "https://netflixroulette.net/api/api.php?";

		// Use input field values and addParams function to build query string
		var titleParam = $('#title').val()
		var actorParam = $('#actor').val()
		var directorParam = $('#director').val()

		if(titleParam.length > 0) {
			if(titleParam.indexOf(" ") === -1) {
				paramAdd = "title=" + titleParam;
				console.log(paramAdd);
	            qryString = addParams(qryString, paramAdd);
	          console.log(qryString);
			} else {
	            paramFormatted = titleParam.replace(/ /g, "+");
	            console.log(paramFormatted);
				paramAdd = "title=" + paramFormatted;
				console.log(paramAdd);
	            qryString = addParams(qryString, paramAdd);
	          console.log(qryString);

			}
		}
		if(actorParam.length > 0) {
			if(actorParam.indexOf(" ") === -1) {
				paramAdd = "actor=" + actorParam;
				console.log(paramAdd);
	            qryString = addParams(qryString, paramAdd);
	          console.log(qryString);
			} else {
	            paramFormatted = titleParam.replace(/ /g, "+");
				paramAdd = "actor=" + paramFormatted;
				console.log(paramAdd);
	            qryString = addParams(qryString, paramAdd);
	          console.log(qryString);

			}
		}
		if(directorParam.length > 0) {
			if(directorParam.indexOf(" ") === -1) {
				paramAdd = "director=" + directorParam;
				console.log(paramAdd);
	            qryString = addParams(qryString, paramAdd);
	          console.log(qryString);
			} else {
	            paramFormatted = titleParam.replace(/ /g, "+");
				paramAdd = "director=" + paramFormatted;
				console.log(paramAdd);
	            qryString = addParams(qryString, paramAdd);
	          console.log(qryString);

			}
		}		




		// var queryTitle = "title=" + $('#title').val();
		// var queryActor = "actor=" + $('#actor').val();
		// var queryDirector = "director=" + $('#director').val();



		// console.log(queryActor);

		request.open('GET', URL + qryString, true);
		console.log(URL + qryString);

		request.addEventListener("load", function() {
			var response = JSON.parse(request.responseText);
			console.log(response);
			// console.log(typeof(response));

	
		var min = 0
		var max = (response.length);
		console.log('max:' + max);
		var movieIndex = 0;
		console.log('type: ' + typeof(response));

		// If 1 element is returned, it is a standalone Object.
		// If 2 or more elements are returned, they are returned as an array of Objects.
		if(Array.isArray(response)){
			movieIndex = Math.floor(Math.random() * max);
				$("#moviePoster").append('<div id="img"> <img src ="' + response[movieIndex].poster + '" alt ="There is no poster for this movie..." > </div>');
				$("#movieDetails").append('Title: ' + response[movieIndex].show_title  + '<br>');
				$("#movieDetails").append('Category: ' + response[movieIndex].category  + '<br>');
				$("#movieDetails").append('Rating: ' + response[movieIndex].rating  + '<br>');
				$("#movieDetails").append('Director: ' + response[movieIndex].director  + '<br>');
				$("#movieDetails").append('Release Year: ' + response[movieIndex].release_year  + '<br>');
				$("#movieDetails").append('Summary: ' + response[movieIndex].summary  + '<br>');
		} else {
			movieIndex = 0;

				$("#moviePoster").append('<div id="img"> <img src ="' + response.poster + '" alt ="There is no poster for this movie..." > </div>');
				$("#movieDetails").append('Title: ' + response.show_title  + '<br>');
				$("#movieDetails").append('Category: ' + response.category  + '<br>');
				$("#movieDetails").append('Rating: ' + response.rating  + '<br>');
				$("#movieDetails").append('Director: ' + response.director  + '<br>');
				$("#movieDetails").append('Release Year: ' + response.release_year  + '<br>');
				$("#movieDetails").append('Summary: ' + response.summary  + '<br>');			
		}

				
		});
		request.send(null);
	});

})