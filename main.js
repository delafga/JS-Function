//Function 1
function reverseString(message){
	return message.split('').reverse().join('');
}
//document.write(reverseString("coffee"));


//Function 2
function palindrome(message){
	for(let ctr = 0; ctr < message.length; ctr++){
		if(message[ctr] == message[message.length-(ctr+1)]){
			if(ctr == message.length-1){
				return true;
			}
			continue;
		}
		else{
			return false;
		}
	}
}
//document.write(palindrome("hello"));


//Function 3
function alphabetSort(message){
  return message.split('').sort().join('');
}
//document.write(alphabetSort("hello"));


//Function 4
function countWords(message){
	return message.split(' ').length;
}
//document.write(countWords('The quick brown fox jumps over the lazy dog'));