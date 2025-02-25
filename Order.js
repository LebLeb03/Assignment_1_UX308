export class Order {
  constructor(sFrom) {
      this.OrderState = {
          WELCOMING: () => {
              let aReturn = [];
              this.stateCur = this.OrderState.SELECTING_ITEM;
              aReturn.push("🍽️ Welcome to Dream Bites! What would you like to order? (Pizza/Burger)");
              return aReturn;
          },
          SELECTING_ITEM: (sInput) => {
              let aReturn = [];
              this.order = { item: "", size: "", toppings: "", drink: "" };

              if (sInput.toLowerCase() === "pizza" || sInput.toLowerCase() === "burger") {
                  this.order.item = sInput.toLowerCase();
                  this.stateCur = this.OrderState.SELECTING_SIZE;
                  aReturn.push(`What size ${this.order.item} would you like? (small, medium, large)`);
              } else {
                  aReturn.push("❌ Invalid choice. Please select either Pizza or Burger.");
              }
              return aReturn;
          },
          SELECTING_SIZE: (sInput) => {
              let aReturn = [];
              const validSizes = ["small", "medium", "large"];

              if (validSizes.includes(sInput.toLowerCase())) {
                  this.order.size = sInput.toLowerCase();
                  this.stateCur = this.OrderState.SELECTING_TOPPINGS;
                  aReturn.push(`Great! Now, choose a topping for your ${this.order.item}: (cheese, bacon, mushrooms, onions)`);
              } else {
                  aReturn.push("❌ Invalid size. Please choose small, medium, or large.");
              }
              return aReturn;
          },
          SELECTING_TOPPINGS: (sInput) => {
              let aReturn = [];
              const validToppings = ["cheese", "bacon", "mushrooms", "onions"];

              if (validToppings.includes(sInput.toLowerCase())) {
                  this.order.toppings = sInput.toLowerCase();
                  this.stateCur = this.OrderState.OFFER_DRINK;
                  aReturn.push(`Would you like a drink with your meal? (Coke, Sprite, Water)`);
              } else {
                  aReturn.push("❌ Invalid topping. Please choose from cheese, bacon, mushrooms, or onions.");
              }
              return aReturn;
          },
          OFFER_DRINK: (sInput) => {
              let aReturn = [];
              const validDrinks = ["coke", "sprite", "water"];

              if (validDrinks.includes(sInput.toLowerCase())) {
                  this.order.drink = sInput.toLowerCase();
              } else {
                  this.order.drink = "No drink";
              }

              this.stateCur = this.OrderState.CONFIRM_ORDER;
              aReturn.push(`📝 Order Summary: ${this.order.size} ${this.order.item} with ${this.order.toppings}, Drink: ${this.order.drink}`);
              aReturn.push("Would you like to confirm your order? (yes/no)");
              return aReturn;
          },
          CONFIRM_ORDER: (sInput) => {
              let aReturn = [];

              if (sInput.toLowerCase() === "yes") {
                  this.isDone = true;
                  aReturn.push("🎉 Your order has been placed! Enjoy your meal!");
              } else {
                  aReturn.push("❌ Order cancelled. Let us know if you change your mind!");
              }
              return aReturn;
          }
      };

      this.stateCur = this.OrderState.WELCOMING;
  }

  handleInput(sInput) {
      return this.stateCur(sInput);
  }
}