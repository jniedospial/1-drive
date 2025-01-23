function calculateCosts() {
    const vehiclePrice = parseFloat(document.getElementById('vehiclePrice').value);

    if (isNaN(vehiclePrice) || vehiclePrice <= 0) {
        alert('Proszę wprowadzić poprawną cenę pojazdu.');
        return;
    }

    // Buyer Fee
    const buyerFee = calculateBuyerFee(vehiclePrice);

    // Virtual Bid Fee
    const virtualBidFee = calculateVirtualBidFee(vehiclePrice);

    // Stałe opłaty
    const staleGateFee = 95;
    const titleShippingFee = 15;
    const environmentalFee = 15;
    const deliveryFee = 500;

    // Oblicz łączny koszt
    const totalCost = vehiclePrice + buyerFee + virtualBidFee + staleGateFee + titleShippingFee + environmentalFee + deliveryFee;

    // Wyświetl wyniki
    document.getElementById('buyerFee').textContent = buyerFee.toFixed(2);
    document.getElementById('virtualBidFee').textContent = virtualBidFee.toFixed(2);
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
}

function calculateBuyerFee(price) {
    const ranges = [
        { max: 49.99, fee: 25 },
        { max: 99.99, fee: 45 },
        { max: 199.99, fee: 80 },
        { max: 299.99, fee: 130 },
        { max: 349.99, fee: 137.5 },
        { max: 399.99, fee: 145 },
        { max: 449.99, fee: 175 },
        { max: 499.99, fee: 185 },
        { max: 549.99, fee: 205 },
        { max: 599.99, fee: 210 },
        { max: 699.99, fee: 240 },
        { max: 799.99, fee: 270 },
        { max: 899.99, fee: 295 },
        { max: 999.99, fee: 320 },
        { max: 1199.99, fee: 375 },
        { max: 1299.99, fee: 395 },
        { max: 1399.99, fee: 410 },
        { max: 1499.99, fee: 430 },
        { max: 1599.99, fee: 445 },
        { max: 1699.99, fee: 465 },
        { max: 1799.99, fee: 485 },
        { max: 1999.99, fee: 510 },
        { max: 2399.99, fee: 535 },
        { max: 2499.99, fee: 570 },
        { max: 2999.99, fee: 610 },
        { max: 3499.99, fee: 655 },
        { max: 3999.99, fee: 705 },
        { max: 4499.99, fee: 725 },
        { max: 4999.99, fee: 750 },
        { max: 5499.99, fee: 775 },
        { max: 5999.99, fee: 800 },
        { max: 6499.99, fee: 825 },
        { max: 6999.99, fee: 845 },
        { max: 7499.99, fee: 880 },
        { max: 7999.99, fee: 900 },
        { max: 8499.99, fee: 925 },
        { max: 8999.99, fee: 945 },
        { max: 9999.99, fee: 945 },
        { max: 14999.99, fee: 1000 },
    ];

    for (const range of ranges) {
        if (price <= range.max) return range.fee;
    }

    return 1000; // Domyślny koszt dla cen powyżej $14,999.99
}

function calculateVirtualBidFee(price) {
    if (price <= 99.99) return 0;
    if (price <= 499.99) return 50;
    if (price <= 999.99) return 65;
    if (price <= 1499.99) return 85;
    if (price <= 1999.99) return 95;
    if (price <= 3999.99) return 110;
    if (price <= 5999.99) return 125;
    if (price <= 7999.99) return 145;
    return 160; // Dla cen powyżej $8,000
}
