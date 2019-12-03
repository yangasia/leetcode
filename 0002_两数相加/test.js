function print(...text){
    console.log(...text);
}
function loopListNode2Array (list){
    let temp = []
    for(;;){
        temp.push(list.val);
        if(list.next!=null){
            list = list.next;
        }
        else{
            return temp;
        }
    }
}
function loopArray2ListNode(arr){
    var temp = [];
    for(let i = 0,len = arr.length;i<len;i++){
        temp.push({
            val:arr[i],
            next:null,
        })
    }
    for(let i = 0,len = temp.length;i<len-1;i++){
        temp[i].next = temp[i+1];
    }
    return temp[0];
}
let l1 = {
    val:2,
    next:{
        val:4,
        next:{
            val:3,
            next:null,
        },
    },
}
// let arr = loopListNode2Array(l1);
// print(arr);
// print(loopArray2ListNode(arr));
let l2 = {
    val:5,
    next:{
        val:6,
        next:{
            val:4,
            next:null,
        },
    },
}
let addTwoNumbers = function(l1, l2) {
    l1 = loopListNode2Array(l1);
    l2 = loopListNode2Array(l2);
    let len = Math.min(l1.length,l2.length);
    for (let i = 0;i<len;i++){
        if(l1.length==len){
            l2[i] += l1[i];
        }
        else{
            l1[i] += l2[i];
        }
    }
    if(l1.length==len){
        l2.forEach((val, i, arr)=>{
            if(val>9){
                arr[i+1] = arr[i+1]!=undefined ? Math.floor([arr[i]]/10) + arr[i+1] : Math.floor([arr[i]]/10);
            }
            arr[i]=arr[i]%10;
        });
        return loopArray2ListNode(l2);
    }
    else{
        l1.forEach((val, i, arr)=>{
            if(val>9){
                arr[i+1] = arr[i+1]!=undefined ? Math.floor([arr[i]]/10) + arr[i+1] : Math.floor([arr[i]]/10);
            }
            arr[i]=arr[i]%10;
        });
        return loopArray2ListNode(l1);
    }
    // let l3 = ((Number(l1)+Number(l2)).toString()).split('').reverse();
    // return loopArray2ListNode(l3);
};
addTwoNumbers = function (l1,l2){
    
}
let result = addTwoNumbers(l1,l2);
print(result);
