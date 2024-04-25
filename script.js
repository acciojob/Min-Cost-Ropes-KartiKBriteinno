function mincost(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  
  // Sort the array of rope lengths
  arr.sort((a, b) => a - b);
  
  // Initialize minCost to store the total minimum cost
  let minCost = 0;
  
  // Iterate over the sorted array of rope lengths
  while (arr.length > 1) {
    // Connect the two shortest ropes
    const currentCost = arr[0] + arr[1];
    minCost += currentCost;
    
    // Add the combined rope length back to the array
    arr = arr.slice(2).concat([currentCost]);
    
    // Sort the array after adding the combined rope length
    arr.sort((a, b) => a - b);
  }
  
  return minCost;
}

module.exports = mincost;