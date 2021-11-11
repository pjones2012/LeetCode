/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null) return null;
    var beforeDup = null;
    var prev = head;
    var current = head.next;
    var dup = [];
    while(current !== null){
        if(current.val === prev.val){
            dup.push(current.val)
            if (beforeDup === null) {
                head = current.next; 
            } else {
                beforeDup.next = current.next; 
            }
            prev = current;
            current = current.next;
        } else if( dup.indexOf(prev.val) > -1){
            prev = current;
            current = current.next;
        } else {
            beforeDup = prev;
            prev = current;
            current = current.next;
        }
    }
    return head;
};