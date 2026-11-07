//Count how many times each word appears in a sentence, using an object.
let sentence="apple mango apple orange mango apple";
let words=sentence.split(" ");
let count={};

for(let word of words){
    if(count[word]){
        count[word]++;
    }else{
        count[word]=1;
    }
}
console.log(count);