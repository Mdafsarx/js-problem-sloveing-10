// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptop,mobile,tablet){
    const laptopPrice=30000;
    const mobilePrice=10000;
    const tabletPrice=5000;

    const totalLaptop=laptopPrice*laptop;
    const totalMobile=mobilePrice*mobile;
    const totalTablet=tabletPrice*tablet;

    const totalPrice=totalLaptop+totalMobile+totalTablet;
    return totalPrice;

}
const output=calculateElectronicsBudget(2,1,1);
console.log(output);