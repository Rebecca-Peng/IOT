var process = require('process');
var writeFile = require('write-file');
var a = 0;

var questions =[
	"What is your name?",
	"What is your email?",
	"What is your birthday?"
];

var answers = [];

function ask(i){
	process.stdout.write(`\n\n\n ${questions[i]}`);
	process.stdout.write(":");
}

process.stdin.on('data',function(data){

	answers.push(data.toString().trim());

	if(answers.length < questions.length){
		ask(answers.length);
	}else{
		// process.exit();

		writeFile('Desktop/Homework02/Homework02.txt', answers[0]+'\n'+answers[1]+'\n'+answers[2], function (err) {
  		if (err) return console.log(err);
  			else {console.log('file is written');
  			a = 1;
  			}
		});

		if(a ==1) process.exit();

	}
});



ask(0);
