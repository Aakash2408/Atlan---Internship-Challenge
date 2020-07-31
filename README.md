# Front End Engineer Challenge – IPL

A data visualization challenge to build a web app with IPL (Indian Premier League) data provided in CSV files. Goal was to present stats and interesting information about IPL to someone who knows about cricket but has not seen IPL.

  - Great UI/UX
  - Responsive Design
  - Mobile friendly

![Screetshot of Project]![atlan-internship-challenge web app_ (1)](https://user-images.githubusercontent.com/47134609/89071412-4a191600-d394-11ea-8285-860a06ca0a58.png)

## Built With
  - [React](https://reactjs.org/) - the web framework used
  - [Chart.js](https://www.chartjs.org/) - used to create charts
  - [node.js](http://nodejs.org) - for the backend
  - [jQuery](http://jquery.com) - javaScript library
  - [Papaparse](https://www.papaparse.com/) - for parsing CSV files to JSON

## Dataset
  - [Click Here](https://www.kaggle.com/harsha547/indian-premier-league-csv-dataset)  

## Link to Hosted Website
  - [Click Here](https://atlan-internship-challenge.web.app/)  
  *(Hosted on Firebase)*

## Bonus Points Explanation
  - Used a fast library, papaparser, for parsing all CSV data. I've used CSS whereever possible for best performance and used best practices for writing Javascript code. 
  - The website is fully mobile responsive, I've made sure that every little detail looks good on mobile! I focused on making an easy-to-use User Interface (UI) for great constrast and visual appeal. Added a fullscreen mode toggle to enhance User Experience (UX). Moreover, I've written all CSS code from scratch without any library.
  - It is a progressive webapp as verified on [Lighthouse](https://developers.google.com/web/tools/lighthouse/). It is fast and reliable, installable, PWA optimized.
  - It is also usable offline.
  
## Thought Process
  - I have used two colors wherever possible for presenting data on the charts for whole page ,it looks better than mixing so many colors 
  - I searched through all the given datasets to look for attributes that would intrigue a person who knows cricket but has never watched IPL. 
  - I wanted the Navigation bar to initially be in 'full' state while browsing on desktop and in 'minimal' state while on mobile to give mobile users more space yet have menu items easily accessible in one click.
  - When looking for a CSV file parsing solution, papaparser was the best one I could find.
  - Making a mobile responsive website is a must in 2019. With mobile in-mind, I carefully planned my layout design. I used grid layout and flex box for most of my layout design process.
  - The top bar seemed empty, so I added a search bar that would fit in with the design scheme.
  - Used Poppins and Lato as fonts for this challenge, both being popular and modern choices. For the icons I used Font Awesome Pro.
  - I decided to add a fullscreen toggle button in the header bar because an admin panel is best viewed in fullscreen. Less clutter, the better. :)
  

