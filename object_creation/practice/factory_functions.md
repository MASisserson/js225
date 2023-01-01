# Problem 1

1. Each object created has a distinct copy of every method, which is redundant.
2. You can't reference the "type" of parents of objects created this way.

# Problem 2

```javascript
function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}
```

# Problem 3

```javascript
function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,

    total() {
      return this.phone + this.internet;
    },
  };
}
```

# Problem 4

```javascript
function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,

    total() {
      return this.amount || (this.phone + this.internet);
    },
  };
}
```

# Problem 5

```javascript
function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],

    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.payments.push(payment);
    },

    addPayments(payments) {
      this.payments = this.payments.concat(payments);
    },

    paymentTotal() {
      return this.payments.reduce((sum, payment) => {
        return sum + payment.total();
      }, 0);
    },

    amountDue() {
      return this.total() - this.paymentTotal();
    },
  };
}

function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,

    total() {
      return this.amount || (this.phone + this.internet);
    },
  };
}
```
