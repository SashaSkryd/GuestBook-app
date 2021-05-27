# Getting Started 

## Available Scripts

In the project directory, you can run:

### `npm start` app , and `npm run dev` server

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Technology

HTML, CSS, JS, React, Noda

## Packages

Front: axios, formik, react-transition-group, yup
Back: cors, dotenv, express, joi, moment, mongoose, morgan

## Elapsed time

32 hours // +-

# Tasks solved and this is application functionality

-1.Structure of the message sending form: name, text, button
-2.The message is sent by clicking on the button and by Ctrl + Enter
-3.A new message is added without reloading the page
4.A new message is added to the beginning (top) of the message list
5.Messages sorted in descending order by date (newest at the top)
6.New message contains sender's name and text
7.After a forced reload of the page, the message does not disappear, does not move
8.When entering the page from another browser, the message remains in place (data storage on the server)
 `Frontend`
1.Used any of the UI frameworks
2.Adaptive layout
3.On hover and other events, application elements do not move
4.JS form validation and error notifications
   4.1.Visually empty fields cannot be sent
   4.2.You cannot send the field name with invalid characters (allowed: latin letters, numbers, underscore)
   4.3.Here is a notification about which field is the error
   4.4.Error notification is hidden when you start typing in the corresponding field
   4.5.Error notifications when appearing do not shift other fields
   4.6.Regular expressions are used in validation (for example, the prohibition of adding hyperlinks) - Formik is used in the test
5.Server responses processed (message added, not added ...)
6.Here are no extra renders
7.Used hooks useState, useCallback and others
8.After submitting the form, the message text field is cleared
9.After submitting the form, the author field is NOT cleared
10.Environment variables used
  `Backend`
1.the code is structured
2.database used
3.errors are handled
4.when adding a message, the server returns a status and a new message (not the entire list)
5.incoming data is validated

# Link to the working version of the application

[My guest book](https://enigmatic-coast-01412.herokuapp.com)

# Working instructions for assembly and start-up

you clone the [front](https://github.com/SashaSkryd/guest-book-app/edit/main)
and [back](https://github.com/SashaSkryd/guest-book-server/tree/main) 
change the paths on the front to `http: // localhost: 3000`, upon request to the server for receiving and sending data!
start the project, see above
