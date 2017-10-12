// function repeat3x(str) {
//   return str.repeat(3);
// }


// function month (year, month, day) {
//
//   let d = new Date( year, month, day );
//   let dateMonth = d.getMonth();
// // console.log(dateMonth);
//   let monthArr = [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sept',
//     'Oct',
//     'Nov',
//     'Dec'
//   ];
//
//   if( typeof year === 'string' ||
//        typeof month === 'string' ||
//        typeof day === 'string' ||
//        d === undefined){
//      throw new Error('please use "####, ##, ##" format')
//    } else{
//      return monthArr[dateMonth];
//    } // could put this at top. if err no run code
//  }

function month(obj) {
  if(typeof obj !== 'object'){
    throw new TypeError('plaese to pass date object')
  } else {

    // let d = new Date(obj);
    let dateMonth = obj.getMonth();
    monthArray = [
       'Jan',
       'Feb',
       'Mar',
       'Apr',
       'May',
       'Jun',
       'Jul',
       'Aug',
       'Sept',
       'Oct',
       'Nov',
       'Dec'
    ];
    return(monthArray[dateMonth]);
  };
  };

let bmonth = new Date (1980, 9, 19);
console.log(month(bmonth));

// let cmonth = new Date ();
// console.log(month());

// console.log(month('high'));
//
//



function reverseSentence (string) {
    if( typeof string !== "string" ){
      throw new Error('please to use "quotes" and sentence w spaces')
    } else {
      return string.split(' ').reverse().join(' ');
    };
};

console.log(reverseSentence('there high'));

let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

function nameProps(obj) {
  if(typeof obj !== "object"){
  throw new Error('gimmie obj blud');
  }else{
    return Object.keys(obj);
  };
};

let high = [4,2,0]

// console.log(nameProps(high))
// console.log(typeof nameProps(high));


function filterBetween(array,min,max) {
  if(!Array.isArray(array)){
    throw new Error('gimmie array blud')
  } else {
  let filtered = array.filter(function(x){
    return x > min && x < max;
  })
  return filtered
 }
 }
let arr2 = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

console.log(filterBetween(arr2, 'chimp', 'lobster'));


module.exports = { month, reverseSentence, nameProps, filterBetween };
