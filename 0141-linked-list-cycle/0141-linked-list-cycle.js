/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let current = head;
    let visited = new Set();

    while (current !== null) {
        if(visited.has(current)){
            return true;
        }
        visited.add(current)
        current = current.next;
    }
    return false;
};