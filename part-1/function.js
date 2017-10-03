
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





module.exports = { month, reverseSentence };
