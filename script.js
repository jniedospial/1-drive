// Obsługa kalkulatora kosztów aukcyjnych
document.getElementById('vehicle-price').addEventListener('input', function () {
    const vehiclePrice = parseFloat(document.getElementById('vehicle-price').value);

    if (isNaN(vehiclePrice) || vehiclePrice <= 0) {
        document.getElementById('auction-costs-display').classList.add('hidden');
        return;
    }

    // Koszty aukcyjne
    let buyerFee, virtualBidFee;

    if (vehiclePrice <= 4999.99) {
        buyerFee = 750.00;
        virtualBidFee = 95.00;
    } else {
        buyerFee = 950.00;
        virtualBidFee = 150.00;
    }

    const gateFee = 95.00;
    const titleShippingFee = 15.00;
    const environmentalFee = 15.00;

    const auctionCosts = buyerFee + virtualBidFee + gateFee + titleShippingFee + environmentalFee;
    const deliveryCost = 500.00;
    const freightCost = 1000.00;

    // Suma bazowa: Koszt aukcji + cena pojazdu + dostawa + fracht
    const baseSum = vehiclePrice + auctionCosts + deliveryCost + freightCost;

    // Zaktualizowanie wyników
    document.getElementById('auction-costs').textContent = auctionCosts.toFixed(2);
    document.getElementById('base-sum').textContent = baseSum.toFixed(2);
    document.getElementById('auction-costs-display').classList.remove('hidden');

    // Aktualizacja szczegółów
    document.getElementById('buyer-fee').textContent = buyerFee.toFixed(2);
    document.getElementById('virtual-bid-fee').textContent = virtualBidFee.toFixed(2);
    document.getElementById('gate-fee').textContent = gateFee.toFixed(2);
    document.getElementById('title-shipping-fee').textContent = titleShippingFee.toFixed(2);
    document.getElementById('environmental-fee').textContent = environmentalFee.toFixed(2);
});

// Obsługa kalkulatora celnego
document.getElementById('customs-value').addEventListener('input', function () {
    const customsValue = parseFloat(document.getElementById('customs-value').value);
    const vehicleType = document.getElementById('vehicle-type').value;
    const vatPort = document.getElementById('vat-port').value;

    if (isNaN(customsValue) || customsValue <= 0) {
        return;
    }

    const exchangeRate = 1.1; // Przykładowy kurs USD do EUR
    const usdToPlnRate = 4.2; // Przykładowy kurs USD do PLN

    const customsValueEUR = customsValue / exchangeRate;

    let customsFee, vatFee;

    if (vehicleType === 'car') {
        customsFee = customsValue * 0.10;
    } else if (vehicleType === 'motorcycle') {
        customsFee = customsValue * 0.06;
    }

    if (vatPort === 'rotterdam') {
        vatFee = customsValue * 0.21;
    } else if (vatPort === 'bremerhaven') {
        vatFee = customsValue * 0.19;
    }

    const customsFeeEUR = customsFee / exchangeRate;
    const vatFeeEUR = vatFee / exchangeRate;

    const customsSum = customsFeeEUR + vatFeeEUR + 500; // €500 agencja celna
    document.getElementById('customs-fee').textContent = customsFeeEUR.toFixed(2) + ' €';
    document.getElementById('vat-fee').textContent = vatFeeEUR.toFixed(2) + ' €';
    document.getElementById('customs-sum').textContent = customsSum.toFixed(2) + ' €';

    const baseSum = parseFloat(document.getElementById('base-sum').textContent) || 0;
    const finalSum = customsSum * exchangeRate + baseSum;
    const finalSumPLN = finalSum * usdToPlnRate;
    document.getElementById('total-sum').textContent = finalSumPLN.toFixed(2) + ' PLN';
});

// Obsługa przycisku "Pokaż szczegóły"
document.getElementById('show-auction-details').addEventListener('click', function () {
    const details = document.getElementById('auction-details');
    details.classList.toggle('hidden');
});
