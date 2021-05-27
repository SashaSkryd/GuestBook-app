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

-- Structure of the message sending form: name, text, button
-- The message is sent by clicking on the button and by Ctrl + Enter
-- A new message is added without reloading the page
-- A new message is added to the beginning (top) of the message list
-- Messages sorted in descending order by date (newest at the top)
-- New message contains sender's name and text
-- After a forced reload of the page, the message does not disappear, does not move
-- When entering the page from another browser, the message remains in place (data storage on the server)
 `Frontend`
- Used any of the UI frameworks
- Adaptive layout
- On hover and other events, application elements do not move
- JS form validation and error notifications
   >- Visually empty fields cannot be sent
   >- You cannot send the field name with invalid characters (allowed: latin letters, numbers, underscore)
   >- Here is a notification about which field is the error
   >- Error notification is hidden when you start typing in the corresponding field
   >- Error notifications when appearing do not shift other fields
   >- Regular expressions are used in validation (for example, the prohibition of adding hyperlinks) - Formik is used in the test
- Server responses processed (message added, not added ...)
- Here are no extra renders
- Used hooks useState, useCallback and others
- After submitting the form, the message text field is cleared
- After submitting the form, the author field is NOT cleared
- Environment variables used
  `Backend`
- The code is structured
- Database used
- Errors are handled
- When adding a message, the server returns a status and a new message (not the entire list)
- Incoming data is validated

# Link to the working version of the application

[My guest book](https://enigmatic-coast-01412.herokuapp.com)

# Working instructions for assembly and start-up local

* You clone the [front](https://github.com/SashaSkryd/guest-book-app/edit/main)
* And [back](https://github.com/SashaSkryd/guest-book-server/tree/main) 
* Change the paths on the front to `http: // localhost: 5000`, upon request to the server for receiving and sending data!
* Start the project, see above
