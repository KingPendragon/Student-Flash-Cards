<?php
	function get_data($table_name)
	{
		$conn = mysqli_connect("localhost", "root", "", "flashcards_demo");
	
		if (!$conn)
		{ return "Connection failed"; }
		$query = "SELECT * FROM $table_name ORDER BY Name";
		$result = mysqli_query($conn, $query);
		$cards = "";
		while($row = mysqli_fetch_array($result))
		{
			$name = explode(" ",$row["Name"]);

			$filename = "flashcards/content/images/".$table_name."/".$row["StudentID"].".jpg";
			if (file_exists($filename)) {
				$cards .= '{"answer": "'.$name[0].'", "image": {"path": "images/'.$table_name.'/'.$row["StudentID"].'.jpg", "width": 889, "height": 594}, "tip": "'.$row["Name"].'"},';
			} else {
				$cards .= '{"answer": "'.$name[0].'", "image": {"path": "images/anon.jpg", "width": 889, "height": 594}, "tip": "'.$row["Name"].'"},';
			}

			
		}
		
		return '{"cards": ['.rtrim($cards, ',').'],
		"progressText": "Card @card of @total",
		"next": "Next",
		"previous": "Previous",
		"checkAnswerText": "Check",
		"showSolutionsRequiresInput": true,
		"defaultAnswerText": "Your answer",
		"correctAnswerText": "Correct",
		"incorrectAnswerText": "Incorrect",
		"showSolutionText": "Correct answer",
		"results": "Results",
		"ofCorrect": "@score of @total correct",
		"showResults": "Show results",
		"answerShortText": "A:",
		"retry": "Retry",
		"caseSensitive": false,
		"description": "'.ucfirst($table_name).'",
		"cardAnnouncement": "Incorrect answer. Correct answer was @answer",
		"correctAnswerAnnouncement": "@answer is correct.",
		"pageAnnouncement": "Page @current of @total"}';


	}

	function create_config($table_name)
	{
		file_put_contents("flashcards/content/content.json", get_data($table_name), FILE_USE_INCLUDE_PATH);
	}
	
?>