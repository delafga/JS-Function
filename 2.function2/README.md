## requirement 
    
- Create a new main.js file and write a function that does the following: determine whether a string is a palindrome string. (Palindrome, a string read from the beginning as well as from the end. For example, abcba is a palindrome string.)

```
function palindrome(message){
  // wirte your code here
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
```
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