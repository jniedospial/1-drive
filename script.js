document.getElementById('vehicle-price').addEventListener('input', function () {
    // Pobieranie ceny pojazdu z formularza
    const vehiclePrice = parseFloat(document.getElementById('vehicle-price').value);

    if (isNaN(vehiclePrice) || vehiclePrice <= 0) {
        document.getElementById('auction-costs-display').classList.add('hidden');
        return;
    }

    // Obliczanie kosztów aukcyjnych na podstawie ceny pojazdu
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
        buyerFee = 705.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 4499.99) {
        buyerFee = 725.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 4999.99) {
        buyerFee = 750.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 5499.99) {
        buyerFee = 775.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 5999.99) {
        buyerFee = 800.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 6499.99) {
        buyerFee = 825.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 6999.99) {
        buyerFee = 845.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 7499.99) {
        buyerFee = 880.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 7999.99) {
        buyerFee = 900.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 8499.99) {
        buyerFee = 925.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 8999.99) {
        buyerFee = 945.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 9999.99) {
        buyerFee = 945.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 10499.99) {
        buyerFee = 1000.00;
        virtualBidFee = 0;
    }

    // Zaktualizowanie wyników kosztów aukcyjnych
    const auctionCosts = buyerFee + virtualBidFee + 95 + 15 + 15; // Koszty aukcyjne: Buyer Fee, Virtual Bid Fee, Gate Fee, Title Shipping Fee, Environmental Fee
    const totalSum = auctionCosts + 500 + 1000; // Dodajemy koszty transportu (Dostawa i Frach)

    // Wyświetlenie kosztów
    document.getElementById('auction-costs').textContent = auctionCosts.toFixed(2);
    document.getElementById('total-sum').textContent = totalSum.toFixed(2);

    document.getElementById('auction-costs-display').classList.remove('hidden');
});

document.getElementById('customs-value').addEventListener('input', function () {
    // Pobieranie wartości celnej
    const customsValue = parseFloat(document.getElementById('customs-value').value);

    if (isNaN(customsValue) || customsValue <= 0) {
        document.getElementById('customs-results').classList.add('hidden');
        return;
    }

    // Obliczanie cła i VATu
    const customsDuty = customsValue * 0.1; // Cło 10%
    const customsVAT = customsValue * 0.21; // VAT 21%

    // Suma odprawy celnej
    const customsTotal = customsDuty + customsVAT + 500; // Dodajemy koszt agencji celnej i rozładunku (500 euro)

    // Wyświetlenie wyników
    document.getElementById('customs-duty').textContent = customsDuty.toFixed(2);
    document.getElementById('customs-vat').textContent = customsVAT.toFixed(2);
    document.getElementById('customs-total').textContent = customsTotal.toFixed(2);

    document.getElementById('customs-results').classList.remove('hidden');
});
