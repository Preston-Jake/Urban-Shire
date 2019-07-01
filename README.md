# Urban-Shire
Install:

npm install

json-server --watch database.json --port 8088

npm start

Description: UrbanShire is an application that shows users their net anuall C02 emissions and offers solutions reduce their carbon footprint. 

Plan:
UrbanShire (MVP)
Welcome
* Display “Welcome to UrbanShire” this app is create for local Nashvillians
* Register and Login (btn pop-up modal)
* Mission Statement (purpose): Address global climate change and offer local solutions


Register/Login
* Firebase Authentication
* Save username and userId to session storage
* Register Directs to the Emissions form 
* Login Directs to Emissions Page (main page)


Emissions Form 
* Collect user input and return users Net Annual CO2 Emissions
   * HOME- amount spent in $ on natural gas, electricity, fuel oil, and propane
   * CAR- miles driven per week or year and car fuel economy
   * WASTE- avg 692 lbs CO2 per person if you don’t recycle
* PUSH form inputs to local JSON server (userEmissions)
        
Emissions (Main Page)
* Display Users Net Annual C02 Emissions
* Display the users completed Emissions Form (editable) 
* Display Action Plan (section)
* BTN add Action


Action Plan 
* Action Plan Btn.onClick( Modal pop-up  )
* Display selectable suggested actions from site 
* Adds Action to Action Plan section on  Emissions page 
* Once action is checked as complete-- reduce Users CO2 Emission & Delete Action from Emissions Page


Stretch Goals
* Charts.js
* ABOUT
   * Avg. Nashvillians CO2
   * Nashville Statistics
   * Climate Science 
   * etc
* Display real-time Air Quality of Nashville
* Add Animations (react spring)
* Logo
* Rank users (somehow?)
* When completing an Action Plan (Celebration Animation) 
* Shire (Newsfeed)
   * users can post ideas, solutions, news, plans, msg, etc.   (CRUD)
* Group Projects
* NAV

Mockup:

![Image from iOS (3)](https://user-images.githubusercontent.com/39278598/59221386-bfbc9400-8b8c-11e9-955b-0a4a97175e40.jpg)

Database: 

<img width="556" alt="Screen Shot 2019-06-10 at 11 44 07 AM" src="https://user-images.githubusercontent.com/39278598/60445934-e39c5400-9be5-11e9-9273-75bc9158bcf8.png">

Completion:

<img width="364" alt="Screen Shot 2019-07-01 at 9 53 43 AM" src="https://user-images.githubusercontent.com/39278598/60446190-789f4d00-9be6-11e9-863c-d3288f82deb0.png">

