const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = function() {
  
//   return tutorials;
// }


// const titleCased = function() {
//       return tutorials.map(function(index) {
//         const words = index.split('');
//         words.charAt(0).toUpperCase() + words.slice(1)
//         words.join('')
//       }
//     }



    // const titleCased = tutorials.map(function(index){
    //   const words = index.split('');
    //   return words.charAt(0).toUpperCase() + words.slice(1)
    // })




function titleCased(){
    return tutorials.map(function(sentence) {
      const words = sentence.split(' ');
      return words.map(function(individualWords){
         return (individualWords[0].toUpperCase() + individualWords.slice(1)).join (' ')
      })
  })
}

titleCased(tutorials)