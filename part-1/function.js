
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
  return monthArr[dateMonth];

}

console.log(month( "2017, 8 , 17" ));


module.exports = 'month';
