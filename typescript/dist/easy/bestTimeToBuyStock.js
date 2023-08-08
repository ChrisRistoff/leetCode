/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/
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
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
// faster solution
function maxProfit2(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        // Calculate the potential profit by selling at the current price
        const potentialProfit = currentPrice - minPrice;
        // Update the maximum profit if the potential profit is greater
        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
        }
        // Update the minimum price if a lower price is encountered
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
    }
    return maxProfit;
}
