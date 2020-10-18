CONTENTS OF THIS FILE
---------------------

 * Introduction
    - Hello and thank you so much for visiting this page. This code consist of a random comic generator and a comic of the day.
        * Author: Ashley Locey
        * Date: 10/13/2020
        * Title: Locey_Midterm

 * Requirements
    - For this code we are requireing the packages node-fetch, express, and ejs. In order to run this code you will need to reinstall the express package. The following steps is what you should take to run this code:
        * reinstall express package: <mark> npm install express --save </mark>
        * to run the code: <mark>  node index.js </mark>

*  Implementation 

    - Both of the pages within this code is rendered to display the comics. To get the random numner it is generator with a function within the app.get statement. There is a max to this function.

    - Both pages have a navigation bar for the user to navigate between each page as well as a button on the random comic page to generate a random comic using onclick(). This is so the user does not have to refresh in order to get the random comic.

    - This page implements Bootstrap framework. To obtain all the data needed, a fetch call is used to be sent to EJS. 

    - All data and information on the comics is fetched and belongs to the XKCD api.


*  Additional information

    - This page is currently hosted in Heroku: https://locey-midterm.herokuapp.com

    - Github Link: https://github.com/loceyashley/locey_midterm
