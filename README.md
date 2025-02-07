"""
# Travel Expense Dashboard

This project is a Travel Expense Tracker Dashboard that allows users to log their travel expenses, visualize, and manage their spending while traveling. The dashboard is built using **Tableau** for data visualization and **Google Apps Script** to automate data collection through a web form.

## Project Overview

This project consists of two primary components:
1. **Travel Expense Tracker**: A Tableau dashboard that tracks your travel expenses, converting and visualizing your data
2. **Web App Form**: A form created via **Google Apps Script** to capture the user's input and update in a friendly way a Google Sheet with correct format to feed your Tableau Dashboard, which feeds the dashboard for real-time expense tracking.

### Key Features:
- **Interactive Tableau Dashboards**: View and track your expenses for each country visited.
- **Google Apps Script Integration**: The form automatically updates the data in a Google Sheet, making it easy to collect and visualize expenses.
- **Currency Conversion**: The form includes automatic conversion of expenses into different currencies.
- **User-Friendly Interface**: Simple data input through the Google Form for quick and easy expense tracking while traveling.

## How It Works

1. **Google Apps Script Form**: 
   - Users input their travel expenses in a Google Form.
   - The form automatically feeds the data into a Google Sheet.
   - The script fetches exchange rates and converts currencies as needed.
   
2. **Tableau Dashboards**:
   - The data from the Google Sheet will be used to populate the Tableau dashboards.
   - The dashboards provide a visual representation of your expenses, categorized by country, type of expense, and time spent.

## Technologies Used

- **Tableau** for data visualization and dashboard creation
- **Google Apps Script** for data collection and automation
- **GitHub** for version control and repository hosting

## How to Use

1. Clone or download the repository to your local machine.
2. Follow the instructions to set up the Google Apps Script form and link it to the Google Sheet.
3. Connect the Google Sheet to Tableau to visualize the travel expenses.
4. Fill out the form with your travel expense data and watch the dashboard automatically update with your spending insights.

## Project Setup

### Prerequisites:
- A **Google Account** to access Google Sheets and Google Apps Script.
- A **Tableau Public** account to visualize and publish dashboards.
Note: Tableau Public doesn't support data live connexion. To get this type of connexion you will need Tableau Desktop

### Setup Instructions:

1. Clone this repository to your local machine.
2. Create and configure the Google Apps Script project.
3. Link your Tableau workbook to the Google Sheet with the expenses data.
4. Publish your Tableau dashboards for sharing.
