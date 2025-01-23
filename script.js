document.getElementById('vehicle-price').addEventListener('input', function () {
    const vehiclePrice = parseFloat(document.getElementById('vehicle-price').value);

    if (isNaN(vehiclePrice) || vehiclePrice <= 0) {
        document.getElementById('auction-costs-display').classList.add('hidden');
        return;
    }

    // Koszty aukcyjne
    let buyerFee, virtualBidFee;
    if (vehiclePrice <= 4999.99) {
        buyerFee = 250.00;
        virtualBidFee = 95.00;
    } else {
        buyerFee = 500.00;
        virtualBidFee = 150.00;
    }

    const gateFee = 95.00;
    const titleShippingFee = 15.00;
    const environmentalFee = 15.00;

    const auctionCosts = buyerFee + virtualBidFee + gateFee + titleShippingFee + environmentalFee;
    const deliveryCost = 500.00;
    const freightCost = 1000.00;

    // Suma: Koszt aukcji + dostawa + fracht
    const totalSum = auctionCosts + deliveryCost + freightCost;

    // Zaktualizowanie wyników
    document.getElementById('auction-costs').textContent = auctionCosts.toFixed(2);
    document.getElementById('total-sum').textContent = totalSum.toFixed(2);

    // Zaktualizowanie szczegółów
    document.getElementById('buyer-fee').textContent = buyerFee.toFixed(2);
    document.getElementById('virtual-bid-fee').textContent = virtualBidFee.toFixed(2);
    document.getElementById('gate-fee').textContent = gateFee.toFixed(2);
    document.getElementById('title-shipping-fee').textContent = titleShippingFee.toFixed(2);
    document.getElementById('environmental-fee').textContent = environmentalFee.toFixed(2);

    document.getElementById('auction-costs-display').classList.remove('hidden');
});

document.getElementById('show-auction-details').addEventListener('click', function () {
    const auctionDetails = document.getElementById('auction-details');
    auctionDetails.classList.toggle('hidden');
});

document.getElementById('customs-value').addEventListener('input', function () {
    const customsValue = parseFloat(document.getElementById('customs-value').value);

    if (isNaN(customsValue) || customsValue <= 0) {
        document.getElementById('customs-results').classList.add('hidden');
        return;
    }

    const customsDuty = customsValue * 0.1; // Cło 10%
    const customsVAT = customsValue * 0.21; // VAT 21%
    const customsTotal = customsDuty + customsVAT + 500.00; // Suma odprawy celnej + agencja celna

    document.getElementById('customs-duty').textContent = customsDuty.toFixed(2);
    document.getElementById('customs-vat').textContent = customsVAT.toFixed(2);
    document.getElementById('customs-total').textContent = customsTotal.toFixed(2);

    document.getElementById('customs-results').classList.remove('hidden');
});
