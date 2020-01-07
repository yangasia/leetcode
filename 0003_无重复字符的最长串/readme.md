## 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

#### 示例 :

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

##### 推荐实现
* 利用队列的思维
```javascript
const lengthOfLongestSubstring = function(s) {
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
```