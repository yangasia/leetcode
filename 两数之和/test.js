global.print = function (...text){
    console.log(...text);
}
function makearr(len,max){
    var result = [];
    for(let i = 0;i<len;i++){
        var temp=Math.floor(Math.random()*max);
        if(temp == 0){
            i--;
        }else{
            result.push(temp);
        }
    }
    return result;
}
// makearr(10000,8951);
const nums = makearr(10000,8951);
const target = 5476;
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
    return undefined;
    // print(numst);
}
var t1 = new Date()
var code = twoSum(nums,target);
var t2 = new Date()
print(nums);
print(t2-t1+' ms');
print("index:",code);
print("nums:",nums[code[0]],nums[code[1]]);
// print(nums.includes(0));