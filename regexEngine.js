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

console.log(matchOne('a', 'a'));
console.log(matchOne('.', 'z'));
console.log(matchOne('', 'h'));
console.log(matchOne('a', 'b'));
console.log(matchOne('p', ''));
