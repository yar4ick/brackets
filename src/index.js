module.exports = function check(str, bracketsConfig) {

  let closingBrackets = []

  for(let element of str) 
  {
    if (!!(checkBracketType(element, bracketsConfig)) && !(closingBrackets.includes(element)))
    {
      closingBrackets.unshift(getClosingBracket(element, bracketsConfig));
    }
    else if (element === closingBrackets[0]) closingBrackets.shift()
    else return false;
  }

  if (closingBrackets.length > 0) return false;

  return true;
}

function getClosingBracket (char, bracketsConfig)
{
  for (let bracketPair of bracketsConfig)
  {
    if (bracketPair[0] === char) return bracketPair[1]
  }
}

function checkBracketType (char, bracketsConfig)
{
  for (let bracketPair of bracketsConfig)
  {
    if (bracketPair[0] === char) return true;
  }

  return false;
}