**给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。**

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

#### 示例：

>输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)  
>输出：7 -> 0 -> 8  
>原因：342 + 465 = 807  

##### 推荐实现方式
```javascript
class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
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
let addTwoNumbers = function (l1,l2){
    if(!l1) return l2;
    if(!l2) return l1;
    l1.val += l2.val;
    if(l1.val > 9){
        l1.val-=10;
        if (l1.next !== null && l2.next !== null){
            l1.next.val++;
        }
        else if (l1.next === null){
            l1.next = new ListNode(1);
        }
        else if (l2.next === null){
            l2.next = new ListNode(1);
        }
    }
    l1.next = addTwoNumbers(l1.next,l2.next);
    return l1;
}
let result = addTwoNumbers(l1,l2);
```