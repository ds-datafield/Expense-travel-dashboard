function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu("Web Form")
        .addItem("Open Form", "openWebApp")
        .addToUi();
}

//Function to handle the data coming from the form
function processForm(formData) {
  try {

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Expense template'); // Store the Speadsheet to the const sheet
    if (!sheet) {
      throw new Error('Sheet not found!');// check if the sheet is available
    }

    // Fetch exchange rates (EUR & USD) in a single API call
    const exchangeRates = fetchExchangeRates(formData.currency); // fetchExchangeRates is a function create below to handle exchange rate

    // Automatically calculate the expenses in Euro and Dollar
    const expenseEuro = formData.expense * exchangeRates.EUR;  //take "expense" from the form and multiply it by the exchange rate EUR
    const expenseDollar = formData.expense * exchangeRates.USD; //take "expense" from the form and multiply it by the exchange rate USD

    // Prepare the row to be added to the sheet
    const row = [
      formData.date,  
      formData.country,  
      formData.city,  
      formData.expenseType,  
      formData.info,  
      expenseEuro,  
      formData.expense,  
      expenseDollar,  
      formData.currency,  
      exchangeRates.EUR,  
    ];

    // Append the new row to the sheet
    sheet.appendRow(row);

    return 'Form successfully submitted!';
  } catch (error) {
    Logger.log(error.message);
    return 'Error: ' + error.message;
  }
}


// This function fetches the exchange rates (to both EUR & USD) in one call
function fetchExchangeRates(currency) {
  try {
    const cache = CacheService.getScriptCache();
    const cachedRates = cache.get(currency);

    if (cachedRates) {
      return JSON.parse(cachedRates);  // Return cached data
    }

    const url = `https://api.exchangerate-api.com/v4/latest/${currency}`;
    const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    const json = JSON.parse(response.getContentText());

    const exchangeRates = {
      EUR: json.rates['EUR'] || 1,
      USD: json.rates['USD'] || 1,
    };

    // Cache the exchange rates for 1 hour (3600 seconds)
    cache.put(currency, JSON.stringify(exchangeRates), 3600);

    return exchangeRates;
  } catch (error) {
    Logger.log('Error fetching exchange rates: ' + error.message);
    return { EUR: 1, USD: 1 };  // Default fallback rates
  }
}


// enable to open the web app that was deployed
function openWebApp() {
  var url = "https://script.google.com/macros/s/AKfycbxyglkIj957O67bD0e6Q0YGjDqkd6xuu_rryoPsBIG7uswLmQSYpH7m8OfXJ12z7v1BtQ/exec"; // link of the web page
  var html = '<script>window.open("' + url + '", "_blank");google.script.host.close();</script>';
  var userInterface = HtmlService.createHtmlOutput(html)
    .setWidth(100)
    .setHeight(100);
  SpreadsheetApp.getUi().showModalDialog(userInterface, "Opening Web App...");
}



// This function is used to get the data from the form when the page is loaded (optional for initial testing)
function doGet() {
  return HtmlService.createHtmlOutputFromFile('form');  // Ensure this matches the name of your HTML file
}

// This function logs any errors to help with debugging (optional)
function logError(message) {
  Logger.log(message);
}

//This function help to anonymize column E whoch are the info
function anonymizeColumn() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    var dataRange = sheet.getRange("E2:E" + sheet.getLastRow()); // get the correct column until the last row
    var data = dataRange.getValues();

    var newData = [];
    
    for (var i = 0; i < data.length; i++) {
        newData.push(["Anon-" + Math.floor(Math.random() * 10000)]); // Replace each value with a generate random numbers "Anon-random"
    }

    dataRange.setValues(newData);
}
