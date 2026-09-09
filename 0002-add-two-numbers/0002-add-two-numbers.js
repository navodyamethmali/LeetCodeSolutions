var addTwoNumbers = function(l1, l2) {
    let res = null;
    let curr = null;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        let newNode = new ListNode(sum % 10);

        carry = Math.floor(sum / 10);

        if (res === null) {
            res = newNode;
            curr = newNode;
        } else {
            curr.next = newNode;
            curr = curr.next;
        }
    }
    return res;
};