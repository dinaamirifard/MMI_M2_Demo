
exports.celsiusToFahrenheit = function (celsius) {
    return (celsius * 9 / 5) + 32;
};

exports.fahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
};

exports.getGreetingDependOnTime = function (myDate) {
    const hour = myDate.getHours();

    if (hour >= 6 && hour < 12) {
        return "Guten Morgen";
    } else if (hour >= 12 && hour < 18) {
        return "Guten Tag";
    } else if (hour >= 18 && hour < 22) {
        return "Guten Abend";
    } else {
        return "Gute Nacht";
    }
};


exports.increaseTemperature = function (temperature) {
    return temperature + 1;
};

exports.decreaseTemperature = function (temperature) {
    return temperature - 1;
};

