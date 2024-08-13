var celsius = document.getElementById("celsius")
var fahrenheit = document.getElementById("fahrenheit")
var kelvin = document.getElementById("kelvin")

function convertTemp(event) {
    let currentValue = +event.target.value;
    switch (event.target.name) {
        case "celsius":
            kelvin.value = (currentValue + 273.32).toFixed(2)
            fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2)
            break;
        case "fahrenhiet":
            celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celsius.value = (currentValue - 273.32).toFixed(2);
            fahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            break;
    }
}