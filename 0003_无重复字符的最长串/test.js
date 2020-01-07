global.print = (...text)=>{
  console.log(...text);
}

var lengthOfLongestSubstring = function(s) {
  if(!s){
    return 0;
  }
  let arr = s.split('');
  let maxlength = 0 ;
  let queue = [];
  s.split('').forEach((v)=>{
    if(queue.includes(v)){
      if(queue.indexOf(v)==0){
        queue.shift();
      }
      else{
        queue = queue.slice(queue.indexOf(v)+1);
      }
    }
    queue.push(v);
    if(maxlength<queue.length){
      maxlength = queue.length
    }
  });
  return maxlength;
}
var result = lengthOfLongestSubstring("ohvhjdml")
print(result);