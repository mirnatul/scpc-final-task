function reverseString(demoText) {
    let reversedText = ''

    for (i = demoText.length - 1; i >= 0; i--) {
        reversedText += demoText[i]
    }
    console.log(reversedText);
}

reverseString("hello world");
