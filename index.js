function calculateTax(amount) {
    if ((amount > 0) || (amount < 0) ){
        const taxPercentage = (10/100)
        let taxAmount = amount * taxPercentage
        return taxAmount
    
        
    } else {
        return 0
    }
    
    

}

function convertToUpperCase(text) {
    let textIsUpper = text.toUpperCase()

    return textIsUpper
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

function isPalindrome(word) {
    const wordStr = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverseWord = wordStr.split('').reverse().join('');

    if (wordStr === reverseWord) {
        return true
    } else {
        return false
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100)

    const totalAmount = originalPrice - discountAmount

    return totalAmount

}





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };


