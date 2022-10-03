const nameThatNumber = num => {
    let ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen"]
    let tens = [, , "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    let str = String(num)
    return str.length < 2 ? ones[num]
        : +str[0] === 1 ? teens[num - 10]
            : `${tens[+str[0]]}${+str[1] === 0 ? "" : " " + ones[+str[1]]}`
}