var rotten_api = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=zretw2x7n25sqsw6q72x8q98&page_limit=1';

var tries = 0;

$(document).ready(function() {

	$("#BobMovie").watch('display', function() {

		// Don't continue if the tooltip is hidden
		if ( $(this).css('display') == 'none' ) {
			set_rating( '', 'imdb' );
			return false;
		}

		append_row('IMDB Rating:', 'imdb');
		set_rating('Loading...', 'imdb');

		var title = get_title();
		var year = get_year();

		set_imdb_rating( title, year );
	});

});