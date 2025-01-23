document.getElementById('calculator-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Pobranie ceny pojazdu z formularza
    const vehiclePrice = parseFloat(document.getElementById('vehicle-price').value);

    if (isNaN(vehiclePrice) || vehiclePrice <= 0) {
        alert('Proszę podać poprawną cenę pojazdu!');
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
    } else if (vehiclePrice <= 10999.99) {
        buyerFee = 1000.00;
        virtualBidFee = 0;
    } else if (vehiclePrice <= 11499.99) {
        buyerFee = 1000.00;
        virtualBidFee = 0;
    } else {
        buyerFee = 1000.00;
        virtualBidFee = 0;
    }

    // Obliczanie kosztów całkowitych
    const gateFee = 95.00;
    const titleShippingFee = 15.00;
    const environmentalFee = 15.00;
    const portShippingFee = 500.00;
    const freightFee = 1000.00;

    // Suma kosztów
    const auctionCosts = buyerFee + virtualBidFee + gateFee + titleShippingFee + environmentalFee;
    const totalSum = vehiclePrice + auctionCosts + portShippingFee + freightFee;

    // Wyświetlanie wyników
    document.getElementById('auction-costs').textContent = auctionCosts.toFixed(2);
    document.getElementById('total-sum').textContent = totalSum.toFixed(2);

    // Pokazywanie wyników
    document.getElementById('results').classList.remove('hidden');
});

// Kalkulator Celny
document.getElementById('customs-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const customsValue = parseFloat(document.getElementById('customs-value').value);

    if (isNaN(customsValue) || customsValue <= 0) {
        alert('Proszę podać poprawną wartość celna!');
        return;
    }

    // Pobieranie kursu wymiany USD do EUR (używamy Twojego klucza API)
    const apiKey = '16f7455b55dc8d1d21691a59';  // Twój klucz API
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
        .then(response => response.json())
        .then(data => {
            const usdToEur = data.conversion_rates.EUR;

            // Obliczanie wartości celnej w EUR
            const customsValueInEur = customsValue * usdToEur;

            // Obliczanie cła (10%) i VAT (21%)
            const customsDuty = customsValueInEur * 0.10;
            const customsVat = customsValueInEur * 0.21;

            // Koszt agencji celnej
            const customsAgency = 500;

            // Suma odprawy celnej
            const customsTotal = customsDuty + customsVat + customsAgency;

            // Wyświetlanie wyników
            document.getElementById('customs-duty').textContent = customsDuty.toFixed(2);
            document.getElementById('customs-vat').textContent = customsVat.toFixed(2);
            document.getElementById('customs-total').textContent = customsTotal.toFixed(2);

            // Pokazywanie wyników
            document.getElementById('customs-results').classList.remove('hidden');
        })
        .catch(error => {
            alert('Błąd pobierania kursu wymiany waluty.');
        });
});
