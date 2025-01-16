# Date Utils

A simple JavaScript utility package for formatting dates and times in multiple formats. This package provides functions to parse and format dates in various ways, including converting to `YYYY-MM-DD`, `MM/DD/YYYY`, `DD-MM-YYYY`, and getting the time in `HH:mm:ss`.

## Installation

To install the package, run the following command in your project directory:

```bash
npm i psdate-formater

const { 
  formatDateToYYYYMMDD, 
  formatDateToMMDDYYYY, 
  formatDateToDDMMYYYY, 
  formatTimeToHHMMSS
} = require('date-utils');

const dateInput = "2025-01-16";

// Example usage
console.log(formatDateToYYYYMMDD(dateInput)); // Output: 2025-01-16
console.log(formatDateToMMDDYYYY(dateInput)); // Output: 01/16/2025
console.log(formatDateToDDMMYYYY(dateInput)); // Output: 16-01-2025
console.log(formatTimeToHHMMSS(dateInput));   // Output: 00:00:00