# BankAccount Class
The `BankAccount` class simulates a simple banking account with essential functionalities such as deposit, withdraw, transfer, and interest calculation.
## Features
- **Deposit**: Add a specified amount to the account balance and record the transaction.- **Withdraw**: Subtract a specified amount from the account balance (if sufficient funds are available) and record the transaction.- **Transfer**: Transfer a specified amount to another account and record both the withdrawal and deposit transactions.- **Add Interest**: Calculate and add interest to the account balance based on a specified rate.- **Get Account Details**: Retrieve the account details, including the transaction history.
## Class Methods
### `constructor(accountNumber, accountHolder, balance = 0)`
Creates a new `BankAccount` instance.
- `accountNumber` (number): The account number.- `accountHolder` (string): The account holder's name.- `balance` (number, optional): The initial balance (default is 0).
### `deposit(amount)`
Deposits the specified `amount` into the account and records the transaction.
- `amount` (number): The amount to deposit. Must be positive.
### `withdraw(amount)`
Withdraws the specified `amount` from the account (if sufficient funds are available) and records the transaction.
- `amount` (number): The amount to withdraw. Must be positive and less than or equal to the balance.
### `transfer(amount, toAccount)`
Transfers the specified `amount` to another account and records both the withdrawal and deposit transactions.
- `amount` (number): The amount to transfer. Must be positive and less than or equal to the balance.- `toAccount` (BankAccount): The account to transfer the amount to.
### `addInterest(rate)`
Calculates and adds interest to the account balance based on the specified `rate` and records the transaction.
- `rate` (number): The interest rate (as a percentage). Must be positive.
### `getBalance()`
Returns the current balance of the account.
### `recordTransaction(type, amount, relatedAccount = null)`
Records a transaction in the account's transaction history.
- `type` (string): The type of transaction (e.g., 'deposit', 'withdrawal', 'transfer in', 'transfer out', 'interest').- `amount` (number): The amount involved in the transaction.- `relatedAccount` (number, optional): The account number involved in the transaction, if applicable.
