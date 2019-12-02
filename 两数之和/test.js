global.print = function (...text){
    console.log(...text);
}
const nums = [2,7,11,15];
const target = 9;
var twoSum = function(nums, target){
    let len = nums.length;
    // var numst =  nums.concat();//数组深拷贝
    // var numst =  nums.slice(0);//数组深拷贝
    var [...numst] =  nums;//数组深拷贝
    // var numst =  nums;//数组深拷贝
    // print(numst == nums);
    numst.sort(function(v1, v2){
        return v1-v2;//负数交换位置  从小到大
    });
    // numst = Array.from(new Set(...numst));//数组去重
    var obj ={};//数组去重
    var result = [];//
    for(let i of numst){//数组去重
        if(!obj[i]){
            result.push(i);
            obj[i] = 1;
        }
    }
    let a = 0;
    let b = 0;
    for(let i=0,len=result.length;result[i]<target&&i<len;i++){
        let c = target - result[i];
        if(result.includes(c)){
            a = result[i];
            b = c;
            return [nums.indexOf(a),nums.indexOf(b)];
        }
    }
    // print(numst);
}
print(twoSum(nums,target));