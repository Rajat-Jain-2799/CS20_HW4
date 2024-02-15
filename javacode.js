const itemPrices = {
    "Hotdog": 4.65,
    "Fries": 3.75,
    "Soda": 1.89
};
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

let subtotal = (numDogs * itemPrices["Hotdog"]) + (numFries * itemPrices["Fries"]) + (numSoda * itemPrices["Soda"]);
let discount = (subtotal >= 25) ? subtotal * 0.1 : 0;
subtotal -= discount;
let tax = subtotal * TAX_RATE;
let total = subtotal + tax;

document.getElementById('orderDetails').innerHTML = `
    <p>Hotdogs Ordered: ${numDogs} ($${showMoney(numDogs * itemPrices["Hotdog"])})</p>
    <p>Fries Ordered: ${numFries} ($${showMoney(numFries * itemPrices["Fries"])})</p>
    <p>Sodas Ordered: ${numSoda} ($${showMoney(numSoda * itemPrices["Soda"])})</p>
    <p>Subtotal (Before Discount): $${showMoney(subtotal + discount)}</p>
    <p>Discount: $${showMoney(discount)}</p>
    <p>Subtotal (After Discount): $${showMoney(subtotal)}</p>
    <p>Tax: $${showMoney(tax)}</p>
    <p>Total: $${showMoney(total)}</p>
`;

