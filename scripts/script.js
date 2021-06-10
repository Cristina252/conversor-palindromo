
function palindromo (str){
  
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  let res = str.split("").reverse().join("");
    
  if (res==str){
    return true;
  }
  
  else {
    return false;
  }
}