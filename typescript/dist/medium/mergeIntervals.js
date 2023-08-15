/*
 *
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/
function mergeInt(intervals) {
    const len = intervals.length;
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals = [intervals[0]];
    for (let i = 1; i < len; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        }
        else {
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;
}
;
// time complexity: O(n log n) because of the sorting
console.log(mergeInt([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log(mergeInt([[1, 4], [4, 5]])); // [[1,5]]
