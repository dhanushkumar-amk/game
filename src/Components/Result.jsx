import React from 'react';const Result = ({secreteNumber, term}) => {
  let result;
  if (term) {
    if (term > secreteNumber) {
      result = 'Higher';
    } else if (term < secreteNumber) {
      result = 'lower';
    } else if (term == secreteNumber) {
      result = 'Congratulation , Correct answer';
    } else {
      result = 'Enter valid Value';
    }
  }
  return (
    <>
      <h3>You Guessed : {result} </h3>
    </>
  );
};

export default Result;
