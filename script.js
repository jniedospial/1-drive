document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const vehiclePrice = parseFloat(document.getElementById('vehicle-price').value);

    if (isNaN(vehiclePrice) || vehiclePrice <= 0) {
        alert('Proszę wprowadzić prawidłową cenę pojazdu.');
        return;
    }

    // Obliczanie poszczególnych opłat
    const buyerFee = calculateBuyerFee(vehiclePrice);
    const virtualBidFee = calculateVirtualBidFee(vehiclePrice);
    const gateFee = 95;
    const titleShippingFee = 15;
    const environmentalFee = 15;

    // Suma kosztów aukcyjnych
    const auctionCosts = buyerFee + virtualBidFee + gateFee + titleShippingFee + environmentalFee;

    // Całkowity koszt pojazdu
    const totalCost = vehiclePrice + auctionCosts;

    // Wyświetlenie wyników
    document.getElementById('buyer-fee').textContent = buyerFee.toFixed(2);
    document.getElementById('virtual-bid-fee').textContent = virtualBidFee.toFixed(2);
    document.getElementById('gate-fee').textContent = gateFee.toFixed(2);
    document.getElementById('title-shipping-fee').textContent = titleShippingFee.toFixed(2);
    document.getElementById('environmental-fee').textContent = environmentalFee.toFixed(2);
    document.getElementById('auction-costs').textContent = auctionCosts.toFixed(2);
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);

    document.getElementById('results').classList.remove('hidden');
});

function calculateBuyerFee(price) {
    if (price <= 49.99) return 25.00;
    if (price <= 99.99) return 45.00;
    if (price <= 199.99) return 80.00;
    if (price <= 299.99) return 130.00;
    if (price <= 349.99) return 137.50;
    if (price <= 399.99) return 145.00;
    if (price <= 449.99) return 175.00;
    if (price <= 499.99) return 185.00;
    if (price <= 549.99) return 205.00;
    if (price <= 599.99) return 210.00;
    if (price <= 699.99) return 240.00;
    if (price <= 799.99) return 270.00;
    if (price <= 899.99) return 295.00;
    if (price <= 999.99) return 320.00;
    if (price <= 1199.99) return 375.00;
    if (price <= 1299.99) return 395.00;
    if (price <= 1399.99) return 410.00;
    if (price <= 1499.99) return 430.00;
    if (price <= 1599.99) return 445.00;
    if (price <= 1699.99) return 465.00;
    if (price <= 1799.99) return 485.00;
    if (price <= 1999.99) return 510.00;
    if (price <= 2399.99) return 535.00;
    if (price <= 2499.99) return 570.00;
    if (price <= 2999.99) return 610.00;
    if (price <= 3499.99) return 655.00;
    if (price <= 3999.99) return 705.00;
    if (price <= 4499.99) return 725.00;
    if (price <= 4999.99) return 750.00;
    if (price <= 5499.99) return 775.00;
    if (price <= 5999.99) return 800.00;
    if (price <= 6499.99) return 825.00;
    if (price <= 6999.99) return 845.00;
    if (price <= 7499.99) return 880.00;
    if (price <= 7999.99) return 900.00;
    if (price <= 8499.99) return 925.00;
    if (price <= 8999.99) return 945.00;
    return 1000.00;
}

function calculateVirtualBidFee(price) {
    if (price <= 99.99) return 0.00;
    if (price <= 499.99) return 50.00;
    if (price <= 999.99) return 65.00;
    if (price <= 1499.99) return 85.00;
    if (price <= 1999.99) return 95.00;
    if (price <= 3999.99) return 110.00;
    if (price <= 5999.99) return 125.00;
    if (price <= 7999.99) return 145.00;
    return 160.00;
}
