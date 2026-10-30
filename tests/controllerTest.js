const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')
const assert = require("node:assert/strict");

//TODO Unit Tests to implement

// Fahrenheit to Celsius tests
describe("fahrenheitToCelsius()", function () {

    it('should convert 32°F to 0°C', function () {
        expect(apiTemperature.fahrenheitToCelsius(32)).to.equal(0);
    });

    it('should convert 212°F to 100°C', function () {
        expect(apiTemperature.fahrenheitToCelsius(212)).to.equal(100);
    });

    it('should convert -40°F to -40°C', function () {
        expect(apiTemperature.fahrenheitToCelsius(-40)).to.equal(-40);
    });

    it('should convert 98.6°F to approximately 37°C', function () {
        expect(apiTemperature.fahrenheitToCelsius(98.6)).to.be.closeTo(37, 0.001);
    });
});

// Celsius to Fahrenheit tests
describe("celsiusToFahrenheit()", function () {

    it('should convert 0°C to 32°F', function () {
        expect(apiTemperature.celsiusToFahrenheit(0)).to.equal(32);
    });

    it('should convert 100°C to 212°F', function () {
        expect(apiTemperature.celsiusToFahrenheit(100)).to.equal(212);
    });

    it('should convert -40°C to -40°F', function () {
        expect(apiTemperature.celsiusToFahrenheit(-40)).to.equal(-40);
    });

    it('should convert 37°C to approximately 98.6°F', function () {
        expect(apiTemperature.celsiusToFahrenheit(37)).to.be.closeTo(98.6, 0.001);
    });
});

// Greeting tests
describe("getGreetingDependOnTime()", function () {

    it('should return Guten Morgen at 08:00', function () {
        const date = new Date(2026, 0, 1, 8, 0);
        expect(apiTemperature.getGreetingDependOnTime(date)).to.equal("Guten Morgen");
    });

    it('should return Guten Tag at 14:00', function () {
        const date = new Date(2026, 0, 1, 14, 0);
        expect(apiTemperature.getGreetingDependOnTime(date)).to.equal("Guten Tag");
    });

    it('should return Guten Abend at 20:00', function () {
        const date = new Date(2026, 0, 1, 20, 0);
        expect(apiTemperature.getGreetingDependOnTime(date)).to.equal("Guten Abend");
    });

        it('should return Gute Nacht at 23:00', function () {
        const date = new Date(2026, 0, 1, 23, 0);
        expect(apiTemperature.getGreetingDependOnTime(date)).to.equal("Gute Nacht");
    });

}); // Close describe("getGreetingDependOnTime()")


// Temperature increase tests
describe("increaseTemperature()", function () {

    it('should increase temperature by 1', function () {
        expect(apiTemperature.increaseTemperature(21)).to.equal(22);
    });

    it('should increase temperature from 0 to 1', function () {
        expect(apiTemperature.increaseTemperature(0)).to.equal(1);
    });

    it('should increase negative temperature', function () {
        expect(apiTemperature.increaseTemperature(-5)).to.equal(-4);
    });
});

describe("decreaseTemperature()", function () {

    it('should decrease temperature by 1', function () {
        expect(apiTemperature.decreaseTemperature(21)).to.equal(20);
    });

    it('should decrease temperature from 0 to -1', function () {
        expect(apiTemperature.decreaseTemperature(0)).to.equal(-1);
    });

    it('should decrease negative temperature', function () {
        expect(apiTemperature.decreaseTemperature(-5)).to.equal(-6);
    });
});
describe("getNextLevel()", function () {
    it("should cycle through levels 0 to 3", function () {
        let level = 0;

        const expectedLevels = [1, 2, 3, 0, 1];

        expectedLevels.forEach(expected => {
            level = apiTemperature.getNextLevel(level);
            expect(level).to.equal(expected);
        });
    });
});