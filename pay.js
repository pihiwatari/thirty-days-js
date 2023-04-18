class Pay {
  makePay(quantity) {
    return {
      realized: true,
      quantity: `$${quantity}`,
    };
  }
}

class Card extends Pay {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  makePay(quantity) {
    if (!this.cardNumber.length == 16) {
      return new Error("Card number must be 16 characters");
    }
    return {
      ...super.makePay(quantity),
      lastCardNumbers: this.cardNumber.slice(-4),
    };
  }
}
class Cash extends Pay {
  constructor() {
    super();
  }
}
class PayPal extends Pay {
  constructor(email) {
    super();
    this.email = email;
  }

  makePay(quantity) {
    return {
      ...super.makePay(quantity),
      platform: "Paypal",
      email: this.email,
    };
  }
}

function processPay(method, quantity) {
  // Tu código aquí 👈
  console.log(method.makePay(quantity));
  return method.makePay(quantity);
}

const card = new Card("4913478952471122");

processPay(card, 100);

const paypal = new PayPal("test@mail.com");

processPay(paypal, 240);

const cash = new Cash();

processPay(cash, 400);
