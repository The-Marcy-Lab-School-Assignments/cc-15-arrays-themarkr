//write your code here
const findLongestWord = array => {
    let longestWord = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i].length > longestWord.length){
            longestWord = array[i];
        }
    }
    return longestWord;
};

console.log(findLongestWord(["The", "quick", "brown","fox","jumped","over","the","lazy","dog"]))