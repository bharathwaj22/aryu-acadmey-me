// import React, { useEffect, useState } from 'react';

// function FloatingWords() {
//   const words = [
//     { class: 'wisteria', text: 'tasty.' },
//     { class: 'belize', text: 'wonderful.' },
//     { class: 'pomegranate', text: 'fancy.' },
//     { class: 'green', text: 'beautiful.' },
//     { class: 'midnight', text: 'cheap.' }
//   ];

//   const [currentWord, setCurrentWord] = useState(0);
//   const [letterState, setLetterState] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWord(prev => (prev + 1) % words.length);
//       setLetterState([]);
//     }, 4000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [words.length]);

//   // Split word into individual letters for animation
//   const splitLetters = (wordText) => {
//     return wordText.split('').map((letter, index) => (
//       <span key={index} className={`letter ${letterState[index] || ''}`}>{letter}</span>
//     ));
//   };

//   // Trigger animation by updating the letter state
//   useEffect(() => {
//     const letters = [];
//     const word = words[currentWord].text;

//     word.split('').forEach((_, index) => {
//       letters.push('float'); // Mark all letters as 'float' when word is active
//     });

//     setLetterState(letters);

//     // After animation, reset the state after 1 second to prepare for next word
//     setTimeout(() => {
//       setLetterState([]);
//     }, 1000); // Duration matches the floating animation time
//   }, [currentWord, words]);

//   return (
//     <div className="text">
//       <p>Nachos are</p>
//       <p>
//         {words.map((word, index) => (
//           <span
//             key={index}
//             className={`word ${word.class} ${index === currentWord ? 'visible' : 'hidden'}`}
//           >
//             {splitLetters(word.text)}
//           </span>
//         ))}
//       </p>
//     </div>
//   );
// }

// export default FloatingWords;
