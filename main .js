
function generateRandomHumidity() {
    return Math.floor(Math.random() * 100) + 1;
}

function updateDisplay(humidity) {
    var displayElement = document.getElementById('humidityDisplay');
    var message, image;

    if (humidity >= 1 && humidity <= 35) {
        message = "Humidity is OK. I can grow";
        image = "IMAGES-7.PNG";
    } else if (humidity >= 36 && humidity <= 75) {
        message = "Humidity is GOOD. I feel powerful";
        image = "IMAGES-6.PNG";
    } else if (humidity >= 76 && humidity <= 100) {
        message = "Humidity is HIGH. I cannot grow";
        image = "IMAGES-8.PNG";
    }


   displayElement.innerHTML = '<p>' + message + '</p><img src="' + image + '" alt="IMAGES-9.PNG" style="width:100%;height:auto;">'; 
}


function simulateTemperatureSensor() {
    var humidityData = generateRandomHumidity(); 
    updateDisplay(humidityData); 
}

window.onload = function() {
    simulateTemperatureSensor();
};
