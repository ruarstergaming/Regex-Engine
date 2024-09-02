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

function match(pattern, text){
    if(!pattern || pattern === "") return true; //Base case - if the pattern is empty any inputted text is a match
    if(!text) return false;
    else {
        return (matchOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1)));
    }

}
