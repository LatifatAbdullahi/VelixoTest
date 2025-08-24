# 🎭Velixo Assessment

This project uses **Playwright** and **TypeScript** to run automated tests for Velixo.

## 📦 What You Need

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- Git Installed
- A code editor like [VS Code](https://code.visualstudio.com/)

## 🚀 Project Execution


### Steps:
To run the project locally, do the following:

- Clone the project to a local machine: Open a terminal, copy and paste 
`git clone https://github.com/LatifatAbdullahi/VelixoTest.git` and hit the Enter button
- Navigate into the project and run `npm install`
- Install browsers with `npx playwright install`
- Add a ".env" file which will contain the TEST_EMAIL and TEST_PASSWORD as listed below;
    - TEST_EMAIL=add email here
    - TEST_PASSWORD=add password here
- Run the test with `npx playwright test`
- Generate an html report with `npx playwright show-report`


### Descisions made and Why

- I decided to use Page actions to allow clean, reusable and maintainable scripts.
- I decided to seperate my locators into a .json file to allow easy reusability and maintainability
- I decided to seperate the Login flow to present repetition for every test and allow a clean script.
- I decided to use a .env file to store my email and password used to run the tests to present exposure of secret info.




### Test Scenarios Automated


* A Valid Test cases
   - Verifying the =TODAY() returns the current date


   

###  Test Cases


[Question 1- Algorithm Test cases](https://docs.google.com/spreadsheets/d/1_vgWwwmA8xLKdGkX2hmabAdic_neSyr9/edit?usp=drive_link&ouid=109334919897706172290&rtpof=true&sd=true)





