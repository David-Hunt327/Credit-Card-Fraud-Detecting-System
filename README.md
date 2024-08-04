### GETTING STARTED
To get started with the Bookshop-Management-System project, follow these steps:

  1 Clone the Repository:

  Clone this repository to your local machine using the following command:

    git clone git@github.com:David-Hunt327/Credit-Card-Fraud-Detecting-System.git
    
  2 Navigate to the Project Directory:

  Navigate to the project directory:

    cd Credit-Card-Fraud-Detecting-System

or Download manually

### SETUP
- Unzip the file and extract to a desired location.
- Open the file in vs code and head to the terminal.
- Follow the steps provided ⬇️⬇️⬇️


### REQUIREMENT
- NPM (Node Package Manager), visit `https://nodejs.org/en/download/package-manager` to download Node.js


### HOW TO RUN
- Firstly install all the required packages, in command line run `npm install`.This will install all the require files.
-  When step one is done, in command line run `node server.js` to start your development server a link would be provided `http://localhost:3000`.

- If everything goes as listed, the project should run smoothly.


### FEATURES
- The Dashboard: Where all banks and transactions can be performed.

- The Settings: Has 3 core sectors {Per Transaction Limit, Allowed Banks, Set Allowed Branches} the { Change Status doesn't work, i don't know what to do with it.}

-- Per Transaction Limit: Used to set the maximum limit a user can withdraw from an account. If they withdraw higher than the maximum limit their account gets blacklisted.

-- Allowed Banks: Any bank that pops here is what a user would see on the dashboard page, all your settings go through this.

-- Set Allowed Banks: Comes with 2 functions
1. Add Bank: An input used to create banks and add them to your database (localstorage).
2. Delete Bank: Deletes a bank from the list. (use the checkbox)


- History: Collection of all transactions, Successful and Blacklisted.

### LOGIN DETAILS
- username: admin
- password: admin12345
