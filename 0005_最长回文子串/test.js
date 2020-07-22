//我自己的实现，超时
let longestPalindrome = function(s) {
    let length = s.length;
    if(length<=1){
        return s;
    }
    while (length>=2) {
        for (let i=0; i+length-1 < s.length; i++) {
            let temp = s.substr(i,length);
            if (temp.split('').reverse().join('') === temp) {
                return temp;
            }
        }
        length--;
    }
}

//中心扩展算法
longestPalindrome = function(s) {
    let length = s.length;
    if(length<=1){
        return s;
    }
    let start = 0;
    let end = 0;
    let centerExpend = function(left, right) {
        while(left >= 0 && right < length && s[left] === s[right]){
            left--;
            right++;
        }
        return right-left-1;
    }
    for(let i = 0; i < length; i++){
        let len1 = centerExpend(i,i);
        let len2 = centerExpend(i,i+1);
        let maxlen = Math.max(len1, len2);
        if(maxlen > end - start){
            start = i-((maxlen-1)>>1);
            end = i+(maxlen>>1);
        }
    }
    return s.substring(start, end+1);
}

let param = "bb"; 
console.log(longestPalindrome(param) === "bb")