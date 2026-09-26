/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0;
    let right= height.length-1;
    let max_area=0;
    let current_height=0;
    let current_area=0;
    let width=0;

    while(left < right){
        width=right - left;
        current_height= Math.min(height[left], height[right]);
        current_area = width*current_height;
        max_area= Math.max(current_area,max_area);
         if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max_area;
    
};