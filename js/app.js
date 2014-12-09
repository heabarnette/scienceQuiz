$(document).ready(function () {
	
// initial, hide all .questions and .answers
//	$('.questions').hide();
//	$('.answers').hide();
//	$('.response').hide();
	$('#correct').hide();
	$('#wrong').hide();
	$('.next').hide();
//	$('#tally').hide();
//	$('.again').hide();
	var score = 0;
	var questionNum = 0;

// question and answer array
	var questionArray = [{
        question: "What is the saltiest body of water on Earth?",
        choices: ["Don Juan Pond, Antarctica", "Dead Sea", "Great Salt Lake", "Mono Lake", "Black Sea"],
        qNum : 0,
        correct : 0,
        },
        {
        question: "What is the largest species of extant (living) organisms?",
        choices: ["African bush elephant", "Saltwater crocodile", "Blue whale", "Colossal squid", "Common ostrich"],
        qNum : 1,
        correct : 2,
        },
        {
        question: "Which hiberating vertebrate can survive the lowest body temperature?",
        choices: ["Box turtle", "Arctic ground squirrel", "Black bear", "Garter snake", "Brown bats"],
        qNum : 2,
        correct : 1,
        },
        {
        question: "Which animal has the longest migration?",
        choices: ["Sooty shearwater", "Leatherback turtle", "Monarch butterflies", "Humpback whales", "Arctic terns"],
        qNum : 3,
        correct : 4,
        },
        {
        question: "Which is the tallest living tree?",
        choices: ["Montezuma Cypress", "General Sherman, Giant Sequoia", "Te Matua Ngahere, kauri", "Hyperion, Coast Redwood", "Great Basin Bristlecone Pine"],
        qNum : 4,
        correct : 3,
        
    }]

// click .start to start game, show questions and answers 
   	$('.main').on ('click', '.start', function() {
//		score: 0;
//		questionNum: 0;
		// next question function
		var nextQuestion = '<div class="questions"><span>'+questionArray[questionNum].question+'</span></div><div class="answers"><input type="radio" name="option" value="0"><span>'+questionArray[questionNum].choices[0]+'</span><br><input type="radio" name="option" value="1"><span>'+questionArray[questionNum].choices[1]+'</span><br><input type="radio" name="option" value="2"><span>'+questionArray[questionNum].choices[2]+'</span><br><input type="radio" name="option" value="3"><span>'+questionArray[questionNum].choices[3]+'</span><br><input type="radio" name="option" value="4"><span>'+questionArray[questionNum].choices[4]+'</span><br></div><button class="next">Next</button>'
		$('.main').append(nextQuestion);
		$('.next').show();
		$('.start').hide();
	});  
// tally function
var tally = function () {
	var answer = $('input:radio[name="option"]:checked').val();
	if (answer == questionArray[questionNum].correct) {
		score++;
		$('#correct').show();
		} 
	else {
		$('#wrong').show();
		}
	console.log(answer);
	console.log(score);
	};
//  click for next question, repeat for next questions
	$('.main').on('click', '.next', function() {
		$('.questions').remove();
		$('.answers').remove();
		$('.next').remove();
		tally();
		$('#correct').hide();
		$('#wrong').hide();
		if (questionNum < 4) {
			questionNum++;
//			var nextQ = function () {
			var nextQuestion = '<div class="questions"><span>'+questionArray[questionNum].question+'</span></div><div class="answers"><input type="radio" name="option" value="0"><span>'+questionArray[questionNum].choices[0]+'</span><br><input type="radio" name="option" value="1"><span>'+questionArray[questionNum].choices[1]+'</span><br><input type="radio" name="option" value="2"><span>'+questionArray[questionNum].choices[2]+'</span><br><input type="radio" name="option" value="3"><span>'+questionArray[questionNum].choices[3]+'</span><br><input type="radio" name="option" value="4"><span>'+questionArray[questionNum].choices[4]+'</span><br></div><button class="next">Next</button>'
			$('.main').append(nextQuestion);
//			}
//			nextQ();
			}
//  show end tally
		else {
			if (score == 1) {
                var finalScore = '<div id="tally"><span>Congratulations! You got '+score+' question correct.</span></div><br><button class="again">Try Again?</button>'
                $('.main').append(finalScore);
            	}
            else {
                var finalScore = '<div id="tally"><span>Congratulations! You got '+score+' questions correct.</span></div><br><button class="again">Try Again?</button>'
                $('.main').append(finalScore);
            	}
// click to restart game
            $('.again').click(function(){
				location.reload();
			alert("restarting quiz");
				});
            }
		});
})