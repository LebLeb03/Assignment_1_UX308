import { Order } from '../Order.js';

describe("Food Ordering Chatbot Tests", function() {
    let oOrder;

    beforeEach(function() {
        oOrder = new Order("999-999-9999");
    });

    it("should welcome the user", function() {
        const aResults = oOrder.handleInput("");
        expect(aResults[0]).toBe("🍽️ Welcome to Dream Bites! What would you like to order? (Pizza/Burger)");
    });

    it("should prompt for size after selecting Pizza", function() {
        oOrder.handleInput(""); // Welcome step
        const aResults = oOrder.handleInput("pizza");
        expect(aResults[0]).toBe("What size pizza would you like? (small, medium, large)");
    });

    it("should prompt for toppings after selecting size", function() {
        oOrder.handleInput("");
        oOrder.handleInput("pizza");
        const aResults = oOrder.handleInput("medium");
        expect(aResults[0]).toBe("Great! Now, choose a topping for your pizza: (cheese, bacon, mushrooms, onions)");
    });

    it("should offer a drink after selecting toppings", function() {
        oOrder.handleInput("");
        oOrder.handleInput("pizza");
        oOrder.handleInput("medium");
        const aResults = oOrder.handleInput("cheese");
        expect(aResults[0]).toBe("Would you like a drink with your meal? (Coke, Sprite, Water)");
    });

    it("should confirm the order summary", function() {
        oOrder.handleInput("");
        oOrder.handleInput("pizza");
        oOrder.handleInput("medium");
        oOrder.handleInput("cheese");
        const aResults = oOrder.handleInput("coke");
        expect(aResults[0]).toContain("📝 Order Summary: medium pizza with cheese, Drink: coke");
    });
    it("test yes", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("Your rapid test is reserved under the phone number 999-999-9999");
    });
    it("test no", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("no");
        expect(aResults[0]).toBe("Thanks for trying our reservation system");
    });
  });
  
  