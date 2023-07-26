function secondSmallest(demoArray) {
    const sortedArray = demoArray.sort(function (x, y) { return x - y })
    const secondSmallestNumber = sortedArray[1]
    console.log(secondSmallestNumber);
}

secondSmallest([8, 5, 1, 9, 15, 3, 7])
