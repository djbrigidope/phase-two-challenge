const month = date => {
  let d = new Date(date);
  let dateMonth = d.getMonth();
  const monthArr = [
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
//
// console.log(month(2017, 11, 25));
// console.log(month(1980, 08, 19));






module.exports = 'month';
