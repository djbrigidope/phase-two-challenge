
function month (date) {

  let d = new Date( date );
  let dateMonth = d.getMonth();
// console.log(dateMonth);
  let monthArr = [
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

  if( date == 'date in words' || date == undefined){
    throw new Error('please use "####, ##, ##" format')
  } else{
    return monthArr[dateMonth];
  }
}

console.log(month( "2017, 8 , 17" ));


function reverseSentence (string) {
    if( typeof string == "string" ){
    return string.split(' ').reverse().join(' ');
    } else {
    throw new Error('please to use "quotes" and sentence w spaces')
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
  // let keys = Object.keys(obj);
  // return keys;
};


function filterBetween(array,min,max) {
  return;
}


module.exports = { month, reverseSentence, nameProps, filterBetween };
