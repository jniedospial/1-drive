document.getElementById('vehicle-price').addEventListener('input', function () {
    const vehiclePrice = parseFloat(document.getElementById('vehicle-price').value);

    if (isNaN(vehiclePrice) || vehiclePrice <= 0) {
        document.getElementById('auction-costs-display').classList.add('hidden');
        return;
    }

    // Koszty aukcyjne
    let buyerFee, virtualBidFee;

    if (vehiclePrice <= 49.99) {
        buyerFee = 25.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 99.99) {
        buyerFee = 45.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 199.99) {
        buyerFee = 80.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 299.99) {
        buyerFee = 130.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 349.99) {
        buyerFee = 137.50;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 399.99) {
        buyerFee = 145.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 449.99) {
        buyerFee = 175.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 499.99) {
        buyerFee = 185.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 549.99) {
        buyerFee = 205.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 599.99) {
        buyerFee = 210.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 699.99) {
        buyerFee = 240.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 799.99) {
        buyerFee = 270.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 899.99) {
        buyerFee = 295.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 999.99) {
        buyerFee = 320.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 1199.99) {
        buyerFee = 375.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 1299.99) {
        buyerFee = 395.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 1399.99) {
        buyerFee = 410.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 1499.99) {
        buyerFee = 430.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 1599.99) {
        buyerFee = 445.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 1699.99) {
        buyerFee = 465.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 1799.99) {
        buyerFee = 485.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 1999.99) {
        buyerFee = 510.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 2399.99) {
        buyerFee = 535.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 2499.99) {
        buyerFee = 570.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 2999.99) {
        buyerFee = 610.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 3499.99) {
        buyerFee = 655.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 3999.99) {
        buyerFee = 695.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 4999.99) {
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

    // Suma: Koszt aukcji + cena pojazdu + dostawa + fracht
    const totalSum = vehiclePrice + auctionCosts + deliveryCost + freightCost;

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

// Kalkulator celny
document.getElementById('customs-value').addEventListener('input', function () {
    const customsValue = parseFloat(document.getElementById('customs-value').value);
    const vehicleType = document.getElementById('vehicle-type').value;
    const vatPort = document.getElementById('vat-port').value;

    if (isNaN(customsValue) || customsValue <= 0) {
        return;
    }

    // Kurs wymiany (przykładowy, można pobrać dynamicznie)
    const exchangeRate = 1.1; // Przykładowy kurs USD do EUR

    const customsValueEUR = customsValue / exchangeRate; // Przeliczenie wartości na EUR

    // Cło
    const customsDutyRate = vehicleType === 'car' ? 0.10 : 0.06; // 10% dla samochodów, 6% dla motocykli
    const customsDuty = customsValueEUR * customsDutyRate;

    // VAT
    const vatRate = vatPort === 'rotterdam' ? 0.21 : 0.19; // 21% VAT dla Rotterdamu, 19% dla Bremerhaven
    const vat = customsValueEUR * vatRate;

    // Agencja celna
    const customsAgencyFee = 500.00; // Agencja celna w EUR

    // Suma odprawy celnej
    const customsSum = customsDuty + vat + customsAgencyFee;

    // Zaktualizowanie wyników odprawy celnej
    document.getElementById('customs-fee').textContent = customsDuty.toFixed(2);
    document.getElementById('vat-fee').textContent = vat.toFixed(2);
    document.getElementById('customs-sum').textContent = customsSum.toFixed(2);

    // Zaktualizowanie sumy wszystkich kosztów (z uwzględnieniem odprawy celnej)
    const finalTotal = totalSum + customsSum; // Dodajemy do sumy wszystkich kosztów
    document.getElementById('total-sum').textContent = finalTotal.toFixed(2);
});

document.getElementById('show-auction-details').addEventListener('click', function () {
    const auctionDetails = document.getElementById('auction-details');
    auctionDetails.classList.toggle('hidden');
});
