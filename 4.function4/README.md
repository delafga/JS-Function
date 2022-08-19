## requirement 
    
- Create a new main.js file and write a function that calculates how many words a string contains.

```
function countWords(message){
  // wirte your code here
}
countWords('Good morning, I love JavaScript.'); // should return 5
```
//Function 4
function countWords(message){
	return message.split(' ').length;
}