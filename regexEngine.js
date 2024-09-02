/**
 * Checks if a given pattern and text match
 * @param {*} pattern 1 character pattern, '.' is considered a wild card 
 * @param {*} text the text to check if matched
 * @returns Boolean representing if the character match or not
 */
function matchOne(pattern, text){
    if(!pattern) return true;
    if(!text) return false;
    if (pattern === ".") return true;
    return pattern === text;
}

/**
 * Recursive function that uses the match one function over and over 
 * checking each character matches the pattern
 * @param {*} pattern any length pattern
 * @param {*} text 
 * @returns boolean if the pattern and text match
 */
function match(pattern, text){
    if(!pattern || pattern === "") {
        return true; //Base case - if the pattern is empty any inputted text is a match
    }

    else if(pattern === "$" && text === ""){
        return true; //$ allows matching the end of a string, a simple other base case in implementation
    }

    else if(!text) return false;

    else if (pattern[1] === "?") {
        return matchQuestion(pattern, text);
    } 

    else if (pattern[1] === "*") {
        return matchStar(pattern, text);
    } 

    else {
        return (matchOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1)));
    }
}

/**
 * IMplementation of ? syntax
 * @param {*} pattern 
 * @param {*} text 
 * @returns 
 */
function matchQuestion(pattern, text) {
    //Case 1: Where the character before the ? is not matched but the text matches the remainder of the pattern (everything after the ?)
    if (matchOne(pattern[0], text[0]) && match(pattern.slice(2), text.slice(1))) {
      return true;
    } 
    //Case 2: Where the character before the ? is matched and the rest of the text (minus the 1 matched character) matches the remainder of the pattern.
    else {
      return match(pattern.slice(2), text);
    }
}

/**
 * Implementation of * syntax
 * @param {*} pattern 
 * @param {*} text 
 * @returns 
 */
function matchStar(pattern, text) {
    return (
      (matchOne(pattern[0], text[0]) && match(pattern, text.slice(1))) ||
      match(pattern.slice(2), text)
    );
  }

/**
 * For now only allows ^ integration, forcing the user to preface patterns with ^ searching to see if any of the text contains the pattern
 * @param {*} pattern 
 * @param {*} text 
 */
function search(pattern, text){
    if(pattern && pattern[0] ==="^") {
        return match(pattern.slice(1), text);
    }
    else{
        //This runs match on every index of the text, meaning the pattern is tested against every starting point of text
        return text.split("").some((_, index) => {
            return match(pattern, text.slice(index));
        });
    }
}

