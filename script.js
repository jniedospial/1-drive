document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const vehiclePrice = parseFloat(document.getElementById('vehicle-price').value);

    if (isNaN(vehiclePrice) || vehiclePrice <= 0) {
        alert('Proszę wprowadzić prawidłową cenę pojazdu.');
        return;
    }

    const buyerFee = calculateBuyerFee(vehiclePrice);
    const virtualBidFee = calculateVirtualBidFee(vehiclePrice);
    const gateFee = 95;
    const titleShippingFee = 15;
    const environmentalFee = 15;
    const deliveryFee = 500;

    const totalAdditionalCost = buyerFee + virtualBidFee + gateFee + titleShippingFee + environmentalFee + deliveryFee;
    const totalCost = vehiclePrice + totalAdditionalCost;

    document.getElementById('buyer-fee').textContent = buyerFee.toFixed(2);
    document.getElementById('virtual-bid-fee').textContent = virtualBidFee.toFixed(2);
    document.getElementById('gate-fee').textContent = gateFee.toFixed(2);
    document.getElementById('title-shipping-fee').textContent = titleShippingFee.toFixed(2);
    document.getElementById('environmental-fee').textContent = environmentalFee.toFixed(2);
    document.getElementById('delivery-fee').textContent = deliveryFee.toFixed(2);
    document.getElementById('total-additional-cost').textContent = totalAdditionalCost.toFixed(2);
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
    if (price <= 1799.99) return 485
::contentReference[oaicite:0]{index=0}
 
