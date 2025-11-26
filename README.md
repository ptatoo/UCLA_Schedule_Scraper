## Description

A website that periodically scrapes UCLA's Schedule of Classes (SoC) https://sa.ucla.edu/ro/public/soc
Allows user to:

- search for classes
- create a class planner
- recieve notifications when a particular class opens

Go to the website [here](https://ucla-schedule-scraper.vercel.app/) with your browser.

## App Details

The frontend is a Nextjs project with tailwindcss and boostrapped with create-next-app.
The backend is a flask python server with an SQL database, as well as a webscraper with selenium and BeautifulSoup4.
