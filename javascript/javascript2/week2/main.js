// step 1

/* function threeFive( startIndex, stopIndex, threeCallback, fiveCallback) {
    let array = [];
    for ( let i = startIndex; i => stopIndex; i--) {
      array.push(i);
    }
  
  array.map(function(x) {
    if (element % 3 == 0) {
      threeCallback(x);
    }
    if (element % 5 == 0) {
      fiveCallback(x);
    }
  });
}
function threeCallback(num) {
  console.log( num + "  can be divided 3");
}
function fiveCallback(num) {
  console.log( num + " can be divided 5");
}

threeFive (20, 6, threeCallback, fiveCallback);
 */
function threeFive( startIndex, stopIndex, threeCallback, fiveCallback) {
  let array = [];
  for ( i  = startIndex; i >= stopIndex; i--  ) {
    if ( i % 3 === 0) {
      threeCallback(i);
    } if ( i % 5 === 0) {
      fiveCallback (i)
    }if ( i % 3 === 0 && i % 5 ===0 ) {
      threeCallback(i);
      fiveCallback(i);
    } 
      /* else {
      for  ( i  = startIndex; i <= stopIndex; i++  ){
         if ( i % 3 === 0) {
      threeCallback(i);
    } if ( i % 5 === 0) {
      fiveCallback (i)
    }if ( i % 3 === 0 && i % 5 ===0 ) {
      threeCallback(i);
      fiveCallback(i);
      } 
  }*/
    array.push(i);
  }
}
function threeCallback (num) { console.log(num + " is divided by 3");}
function fiveCallback(num) { console.log(num + " is divided by 5");}

threeFive( 15, 6, threeCallback, fiveCallback);


/////1.2

function repeatStringNumTimes(str, num) {
  let newStr = '';

  if (num <= 0) {
    return '';
  }

  for (let i = num; i > 0; i--) {
    newStr += str;
  }

  return newStr;
}