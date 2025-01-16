
function parseDate(input) {
  const date = new Date(input);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  return date;
}

// Function to format a date to YYYY-MM-DD
function formatDateToYYYYMMDD(input) {
  const date = parseDate(input);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Function to format a date to MM/DD/YYYY
function formatDateToMMDDYYYY(input) {
  const date = parseDate(input);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

// Function to format a date to DD-MM-YYYY
function formatDateToDDMMYYYY(input) {
  const date = parseDate(input);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

// Function to get the time in HH:mm:ss format
function formatTimeToHHMMSS(input) {
  const date = parseDate(input);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

module.exports = {
  formatDateToYYYYMMDD,
  formatDateToMMDDYYYY,
  formatDateToDDMMYYYY,
  formatTimeToHHMMSS,
};
