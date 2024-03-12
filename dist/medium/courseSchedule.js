/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses -
1. You are given an array prerequisites where prerequisites[i] = [ai, bi]
indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.



Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0,
and to take course 0 you should also have finished course 1. So it is impossible.
*/
function canFinish(numCourses, prerequisites) {
    // Create an adjacency list using a Map
    const map = new Map();
    for (const [course, prereq] of prerequisites) {
        if (!map.has(prereq)) {
            map.set(prereq, []);
        }
        map.get(prereq).push(course);
    }
    // Set to keep track of visited nodes
    const visited = new Set();
    // Set to keep track of nodes in the current DFS path
    const path = new Set();
    // DFS function to detect cycles
    function hasCycle(node) {
        if (path.has(node))
            return true; // Cycle detected
        if (visited.has(node))
            return false; // Already visited, no cycle
        visited.add(node);
        path.add(node);
        const neighbors = map.get(node) || [];
        for (const neighbor of neighbors) {
            if (hasCycle(neighbor))
                return true;
        }
        path.delete(node);
        return false;
    }
    ;
    // Run DFS from each node
    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i))
            return false;
    }
    return true;
}
;
// time: O(n)
console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false
