function getRandomNumber(leftNumber,rightNumber)
//Источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
{
  if ((leftNumber>=0) && (leftNumber<rightNumber))
  {
    return Math.floor(Math.random() * (rightNumber - leftNumber) + leftNumber);
  }
  if(leftNumber>rightNumber)
  {
    return Math.floor(Math.random() * (leftNumber - rightNumber) + rightNumber);
  }
  if (leftNumber===rightNumber)
  {
    return leftNumber;
  }
  return ('error');
}
function getMaxLength(line,maxLength)
{
  return (line.length <= maxLength);
}
console.log(GetMaxLength('Вася', 5));
console.log(1,10);
