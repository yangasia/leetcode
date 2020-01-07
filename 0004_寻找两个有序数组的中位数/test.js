function print(...text){
  console.log(...text);
}

function arrmid (arr){
  if(arr.length&1){
    //奇数
    return arr[Math.floor(arr.length/2)];
  }
  else{
    return (arr[Math.floor(arr.length/2)]+arr[Math.floor(arr.length/2)-1])/2
  }
}
var findMedianSortedArrays = function(nums1, nums2) {
  if(!nums1.length){
    return arrmid(nums2)
  }
  if(!nums2.length){
    return arrmid(nums1)
  }
  nums1 = nums1.concat(nums2);
  // nums1 = [...new Set(nums1)];
  return arrmid(nums1.sort((v1,v2)=>{
    if(v1>v2){
      return -1;
    }
    else if (v1<v2){
      return 1;
    }
    else{
      return 0;
    }
  }));
};

findMedianSortedArrays = function(nums1,nums2) {
  const arr = [...nums1, ...nums2].sort((a,b)=> a-b );
  let length = arr.length;
  return length&1?arr[Math.floor(length/2)]:(arr[length/2]+arr[length/2-1])/2
}

// print(arrmid([-2,-1,3]));
print(findMedianSortedArrays([3],[-2,-1]))
// print(findMedianSortedArrays([1,2],[3,4]))