# Automated Test Suite for Ultra Test Creation (E2E)

## Overview

This repository contains a suite of automated tests for verifying the functionality of the Ultra Course Creation process. The tests are designed to ensure that instructors can successfully create and save tests with questions in an Ultra course environment.

The test suite is implemented using [WebdriverIO](https://webdriver.io/) a powerful and flexible framework for Node.js that allows for automated browser testing. WebdriverIO is chosen for its concise syntax and compatibility with modern web applications.

### Quick Demo
[https://www.loom.com/share/34f98648569943ada93b3a95ad1a2efc](https://www.loom.com/share/34f98648569943ada93b3a95ad1a2efc)

## Features Tested

- User login and authentication.
- Navigation to the courses page.
- Course content addition.
- Test creation within a course.
- True/False question addition to a test.
- Automated feedback setting for correct and incorrect answers.
- Validation of the successful test submission.

## Design Pattern

The test suite utilizes the Page Object Model (POM) design pattern. This pattern is used to enhance test maintenance and reduce code duplication. A POM represents the screens of the web application as a series of objects within the test. It encapsulates the UI elements and actions on a page to provide a clear API for test scripts to interact with.

## Requirements

To run these tests, you will need Node.js and npm installed on your machine. Refer to the `package.json` file for the specific dependencies required.

## Running Test Locally and on GitHub Actions

This project supports running tests both locally in a visual mode and in headless mode through GitHub Actions for continuous integration.

### Locally (Visual Mode)
To execute the test suite, use the following command from the root directory of the project:

```sh
npm install
```

```sh
npx wdio run wdio.conf.ts
```

### On GitHub Actions (Headless Mode)
For continuous integration, tests are configured to run in headless mode through GitHub Actions. This setup is ideal for automated testing environments where no visual output is necessary.

The workflow configuration for GitHub Actions automatically adjusts settings for headless execution. No additional action is required. Tests triggered by push or pull request events on specified branches will run automatically in headless mode.
