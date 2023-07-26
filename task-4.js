function addFromArray(demoArray, demoSum) {
    for (let num of demoArray) {
        for (let num2 of demoArray) {
            if (num + num2 === demoSum) {
                return [demoArray.indexOf(num), demoArray.indexOf(num2)]
            }
        }
    }
}

const output = addFromArray([1, 3, 6, 8, 11, 15], 9)
console.log(output);