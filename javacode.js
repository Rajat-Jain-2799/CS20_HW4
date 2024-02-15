//these are all the constant values
document.addEventListener('DOMContentLoaded', function() {
    const PRICE_HOTDOG = 4.65;
    const PRICE_FRIES = 3.75;
    const PRICE_SODA = 1.89;
    const TAX_RATE = 0.0625; 

    function showMoney(value) {
        let rounded = Math.round(value * 100) / 100;
        let valueStr = rounded.toString();
        if (valueStr.indexOf('.') === -1) {
            valueStr += ".00";
        } else {
            let parts = valueStr.split('.');
            if (parts[1].length === 1) {
                valueStr += "0";
            }
        }
        return valueStr;
    }

    let numDogs = parseInt(prompt("How many hotdogs do you want?"), 10) || 0;
    let numFries = parseInt(prompt("How many fries do you want?"), 10) || 0;
    let numSoda = parseInt(prompt("How many sodas do you want?"), 10) || 0;

    let subtotal = (numDogs * PRICE_HOTDOG) + (numFries * PRICE_FRIES) + (numSoda * PRICE_SODA);
    let discount = (subtotal >= 25) ? subtotal * 0.1 : 0;
    subtotal -= discount;
    let tax = subtotal * TAX_RATE;
    let total = subtotal + tax;

    document.getElementById('orderDetails').innerHTML = `
        <p>Hotdogs Ordered: ${numDogs} ($${showMoney(numDogs * PRICE_HOTDOG)})</p>
        <p>Fries Ordered: ${numFries} ($${showMoney(numFries * PRICE_FRIES)})</p>
        <p>Sodas Ordered: ${numSoda} ($${showMoney(numSoda * PRICE_SODA)})</p>
        <p>Subtotal (Before Discount): $${showMoney(subtotal + discount)}</p>
        <p>Discount: $${showMoney(discount)}</p>
        <p>Subtotal (After Discount): $${showMoney(subtotal)}</p>
        <p>Tax: $${showMoney(tax)}</p>
        <p>Total: $${showMoney(total)}</p>
    `;
});
