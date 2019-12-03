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
let nums = [2,7,11,15];
let target = 9;
// var twoSumtest = function(nums, target){
//     let len = nums.length;
//     // var numst =  nums.concat();//数组深拷贝
//     // var numst =  nums.slice(0);//数组深拷贝
//     var [...numst] =  nums;//数组深拷贝
//     // var numst =  nums;//数组深拷贝
//     // print(numst == nums);
//     numst.sort(function(v1, v2){
//         return v1-v2;//负数交换位置  从小到大
//     });
//     // numst = Array.from(new Set(...numst));//数组去重
//     var obj ={};//数组去重
//     var result = [];//
//     for(let i of numst){//数组去重
//         if(!obj[i]){
//             result.push(i);
//             obj[i] = 1;
//         }
//     }
//     let a = 0;
//     let b = 0;
//     for(let i=0,len=result.length;result[i]<target&&i<len;i++){
//         let c = target - result[i];
//         if(result.includes(c)){
//             a = result[i];
//             b = c;
//             return [nums.indexOf(a),nums.indexOf(b)];
//         }
//     }
//     return undefined;
//     // print(numst);
// }
// var twoSum = function(nums, target) {//自己优化优化结果
//     for(let i=0,len=nums.length;i<=len;i++){
//         if(i==len){
//             return ['u1',1];
//         }
//         let c = target - nums[i];
//         if(nums.includes(c)){
//             if(c!=nums[i]){
//                 return [nums.indexOf(nums[i]),nums.indexOf(c)];
//             }
//             else{
//                 c = nums[i];
//                 nums[i] = c+1;
//                 if(nums.includes(c)){
//                     return [i,nums.indexOf(c)]
//                 }
//                 else{
//                     nums[i] = c;
//                 }
//             }
//         }
//     }
//     return ['u2',2];
// };
var twoSum = function(nums, target){//时间最优
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
// var t1 = new Date()
var code = twoSum(nums,target);
// var t2 = new Date()
// print(nums);
// print(t2-t1+' ms');
// print("index:",code);
print(code);
// print(nums.includes(0));
// var test = [];
// test[10] = 100;
// test[0] = 1;
// // new Boolean
// // print(test[1]!=undefined);
// print(test[0]);
// print(test[1]);
// if(test[0]){
//     print('test1');
// }
// if(test[0]!=undefined){
//     print('test2');
// }
// if(test[1]){//存在
//     print('test3');
// }
// if(test[1]!=undefined){//存在
//     print('test4');
// }