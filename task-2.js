function addAllPositive(demoArray) {
    let sumOfPositive = 0;
    for (num of demoArray) {
        if (num > 0) {
            sumOfPositive += num
        }
    }
    console.log(sumOfPositive)
}

addAllPositive([2, -5, 10, -3, 7])
