var API_BASE_URL = "http://api.themoviedb.org/3";
var USERNAME = "Bayolante";
var api_key = "f89cb8a74132874e179d2e2b135eaf5f";


$("#button_get_movie_ID").click(function(e) {
	e.preventDefault();
	getMovieID($("#ID").val());
});

function getMovieID(ID) {
	var url = API_BASE_URL + '/movie/' + ID + "?api_key=" + api_key;
	$("#get_repo_result").text('');

	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
	}).done(function(data, status, jqxhr) {

				var repo = data;

				$("#get_repo_result").text('');
				$('<strong> Name: ' + repo.original_title + '</strong>').appendTo($('#get_repo_result'));

			}).fail(function() {
				$('<div class="alert alert-danger"> <strong>Oh!</strong> Repository not found </div>').appendTo($("#get_repo_result"));
	});
    
  $("#button_create_list").click(function(e) {
	e.preventDefault();
	createList($("#ID").val());
});


    function createList(ID) {
	var url = API_BASE_URL + '/list'+ID+'add_item'+ "?api_key=" + api_key;
	var data = JSON.stringify(repository);

	$("#create_result").text('');

	$.ajax({
		url : url,
		type : 'POST',
		crossDomain : true,
		dataType : 'json',
		data : data,
	}).done(function(data, status, jqxhr) {
		$('<div class="alert alert-success"> <strong>Ok!</strong> Repository Created</div>').appendTo($("#create_result"));				
  	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#create_result"));
	});

}

}