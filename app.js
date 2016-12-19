$(document).ready(function(event){
	'use strict';



$('form').on('submit', function(event){
	event.preventDefault();

  var textString = $('#user-text').val();
  var splitOnSentenceArray = textString.split('\n');
  var splitOnWordArray = textString.replace(/\n/g,' ').split(' ');
  

 
  
// a function declaration to generate an object that holds all the names and their count

  function namesAndCount(textArray){
  	var names = {};
  	for (var i = 0; i < textArray.length; i++){
  		if(names[textArray[i]]){

  			names[textArray[i]]++;
  		}

  		else {

  			names[textArray[i]] = 1;

  		}


  	}


return names;


  };



// a function declaration to find out unique words

function uniqueWords(namesObject){
		var uniqueWordsArray = [];
		for (var name in namesObject){
			if(namesObject[name] === 1){
				uniqueWordsArray.push(name);

			}


	}

return uniqueWordsArray.length;

}  

// a function declaration to find average word length

function avgWordLength(namesArray){
	var names = {},
	totalLength = 0;
	for (var i = 0; i < namesArray.length; i++){
		if(!names[namesArray[i]]){
		names[namesArray[i]] = namesArray[i].length;	
		}
		else{

		names[namesArray[i] + i] = namesArray[i].length;		
		}
		


	}

for (var name in names){
	totalLength += names[name];

}
return totalLength / namesArray.length;

}

// a function declaration for average sentence length
var avgSentenceLength = function(){
return  splitOnWordArray.length / splitOnSentenceArray.length;



}();



var allNamesWithCount = namesAndCount(splitOnWordArray);

var allUniqueNamesCount = uniqueWords(allNamesWithCount);

var avgWLength = avgWordLength(splitOnWordArray);

//console.log(textString);
//console.log(splitOnWordArray);
//console.log(splitOnSentence);


 //console.log('Word Count: ' + splitOnWordArray.length + '\nUnique Words Count: ' + allUniqueNamesCount + '\nAverage Word Length: ' + avgWLength + '\nAverage Sentence Length: ' + avgSentenceLength + ' Words');

 $('.js-wordcount').text(splitOnWordArray.length);
 $('.js-uniqueword').text(allUniqueNamesCount);
 $('.js-avgwlength').text(avgWLength + ' characters');
 $('.js-avgsenlength').text(avgSentenceLength + ' words');
 $('dl').removeClass('hidden');

});





});