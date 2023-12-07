//Ejercicio 4 - FUNCIONES -  Grados Celsius a fahrenheit
console.log("Ejercicio 4 - FUNCIONES -  Grados Celsius a fahrenheit");
console.log("");

const Celsius = [12, 25, 5, 30, 42];

// Función para convertir Celsius a Fahrenheit
function celsiusToFahrenheit(temperatura){
    return temperatura * 9 / 5 + 32;
}

const temperaturas = new Map();
temperaturas.set(Celsius[0], celsiusToFahrenheit(Celsius[0]));
temperaturas.set(Celsius[1], celsiusToFahrenheit(Celsius[1]));
temperaturas.set(Celsius[2], celsiusToFahrenheit(Celsius[2]));
temperaturas.set(Celsius[3], celsiusToFahrenheit(Celsius[3]));
temperaturas.set(Celsius[4], celsiusToFahrenheit(Celsius[4]));


for (let [key,value] of temperaturas){
    console.log("Temp. Celsius: " + key + " Temp. Fahrenheit: "+ value);
}

//----------------------------------------------------------------------------------

console.log("");
console.log("Version con ayuda de chatGPT");
console.log("");

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// Function to get initial values, apply conversion, and print results
function convertTemperatures(celsiusTemperatures) {
    // Map to convert Celsius temperatures to Fahrenheit
    const fahrenheitTemperatures = celsiusTemperatures.map(celsiusToFahrenheit);

    // Print original Celsius temperatures
    console.log("Original Celsius Temperatures: " + celsiusTemperatures.join(", "));

    // Print converted Fahrenheit temperatures
    console.log("Converted Fahrenheit Temperatures: " + fahrenheitTemperatures.join(", "));
}

// Example usage
const celsiusTemperatures = [12, 25, 5, 30, 42];
convertTemperatures(celsiusTemperatures);