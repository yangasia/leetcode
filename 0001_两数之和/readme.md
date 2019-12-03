**给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。**

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

##### 示例:

>给定 nums = [2, 7, 11, 15], target = 9  
>因为 nums[0] + nums[1] = 2 + 7 = 9,所以返回 [0, 1]

##### 推荐实现方式
```javascript
let nums = [2,7,11,15];
let target = 9;
let twoSum = function(nums, target){//时间最优
    let temp = [];
    for(let i = 0,len=nums.length;i<len;i++){
        let c = target - nums[i];
        // if(temp[c]){//temp[c]有可能为0
        if(temp[c]!=undefined){
            console.log(temp[c]);
            return [temp[c],i];
        }
        temp[nums[i]] = i;
    }
    return '不存在';
}
let result = twoSum(nums,target);
```