function romanToInteger(roman) {
    const romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    let integerValue = 0;
    for (let i = 0; i < roman.length; i++) {
        const romanCharacter = roman[i];
        // console.log(romanCharacter);

        const romanValue = romanValues[romanCharacter];
        // console.log(romanValue);

        // If the next character has a higher value, subtract the current value from the integer value.
        if (i < roman.length - 1 && romanValues[roman[i + 1]] > romanValue) {
            integerValue -= romanValue;
        } else {
            // Otherwise, add the current value to the integer value.
            integerValue += romanValue;
        }
    }
    return integerValue;
}

const integerValue = romanToInteger("XXIX")
console.log(integerValue)