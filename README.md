"""
# Travel Expense Dashboard

This project is a Travel Expense Tracker Dashboard that allows users to log their travel expenses, visualize, and manage their traveling spending. The dashboard is built using **Tableau** for data visualization and **Google Apps Script** to automate data collection through a web form.

## Project Overview

This project consists of two primary components:
1. **Travel Expense Tracker**: A Tableau dashboard that tracks your travel expenses, converting and visualizing your data
2. **Web App Form**: A form created via **Google Apps Script** to capture the user's input and update in a friendly way a Google Sheet with correct format to feed your Tableau Dashboard, which feeds the dashboard for real-time expense tracking.

**Bonus: Travel Itinerary and Recommendation**: Visualisation of trip itinerary and recommandation
![Itinerary Demo](images/Itinerary Gif.gif)

### Key Features:
- **Interactive Tableau Dashboards**: View and track your expenses for each country visited.
- **Google Apps Script Integration**: The form automatically updates the data in a Google Sheet, making it easy to collect and visualize expenses.
- **Currency Conversion**: The form includes automatic conversion of expenses into different currencies.
- **User-Friendly Interface**: Simple data input through the Google Form for quick and easy expense tracking while traveling.

### Demo:
- **Web form**
![Form Demo](images/Form Gif.gif)

- **Dashboard Overview**
![Dashboard Demo](images/Expense Gif.gif)


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

### Prerequisites:
- A Google Account to access Google Sheets and Google Apps Script.
- A [Tableau Public](https://public.tableau.com/app/discover) account to visualize and publish dashboards.

## How to Use

1. Duplicate the Google Sheet Template

    -Open the template: [Google Sheet Template](https://docs.google.com/spreadsheets/d/1V_4RcWsyNWgzNP_7QEtNAxImFlHakryq-sET4CKB7vM/edit?gid=0#gid=0)
    -Click File > Make a copy to save it to your own Google Drive.
    -Grant App Script the necessary permissions to access your sheet when prompted.

2. Download the Tableau Workbook

    -Get the file: [Tableau Workbook](https://public.tableau.com/app/profile/davis.data/viz/ExpenseDashboard_17388573556900/NeutralDashboard)

3. Connect Your Google Sheet to Tableau

    -Open the Tableau Workbook in Tableau Desktop.
    -Replace the existing data source with your newly duplicated Google Sheet.
    -Ensure that all fields are correctly mapped.

Now your expense dashboard is set up and ready to use! 🚀


For technical profil you can directly download workbook and Google Apps Script from this Github and include it to your own project.



## Disclaimer

The original idea was to feed the Tableau Dashboard live and track expenses while traveling. While this is possible with Tableau Desktop, the **public version does not support live connections**. As a result, to properly use this dashboard, you will need to **manually update the data source** in Tableau whenever new expenses are added.