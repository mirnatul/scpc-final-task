function findFrequentNumber(demoArray) {
    const containerObj = {}
    for (num of demoArray) {
        if (containerObj[num] === undefined) {
            containerObj[num] = 1;
        }
        else {
            containerObj[num] += 1
        }
    }
    const valuesOfObject = []
    for (item in containerObj) {
        valuesOfObject.push(containerObj[item])
    }
    const highestValue = Math.max(...valuesOfObject)
    for (item in containerObj) {
        if (containerObj[item] === highestValue) {
            console.log(`The most frequent element is ${item}`);
        }
    }
}

findFrequentNumber([3, 5, 2, 5, 3, 3, 1, 4, 5])
