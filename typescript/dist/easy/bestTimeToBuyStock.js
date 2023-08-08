/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0. */
function maxProfit(prices) {
    const map = new Map();
    let min = prices[0];
    let max = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        map.set(prices[i], i);
        if (prices[i] < min) {
            min = prices[i];
        }
        if (prices[i] > max) {
            max = prices[i];
        }
        const minIndex = map.get(min);
        const maxIndex = map.get(max);
        if (minIndex > maxIndex) {
            max = min;
        }
        if (max - min > profit) {
            profit = max - min;
        }
    }
    return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
