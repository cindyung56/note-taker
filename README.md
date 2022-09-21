# Note Taker

## Description

This is an application that allows the user to create, save, and delete notes on one page. The site starts off on a landing page where the user can click on the button to start taking notes and to see their previous entries. The left column shows all of the notes that the user had previously written; each note can be clicked on to display it on the bigger, right column for more details. The trash can button is available to delete any notes that are not needed anymore.

![The notes page to create and delete notes](./images/image-01.png)

To create a note, users can click on the + button on the top right to start making a new note; upon page load, it will default automatically to making a new note until the user clicks on a note from the list. Once their note has been created with both the title and text, the user can click on the save button that appears on the top right to save it in the list. The notes list will then be updated with the new entry!

## Process

The application has front-end and back-end sides that create routes to each other. The front-end sends a request to the back-end, which then takes that request and sends a response based off of the action submitted. There are three types of method requests that can be sent to the back-end: GET, POST and DELETE.

The GET request will grab all of the notes in ``db.json`` and return them to the front-end, so the page will be able to load all of the notes on the left column.

The POST request will receive a new note from the front-end when the user wants to save a new one. This function will read the existing data from ``db.json`` and parse it for JavaScript, and then add the new note to the array. It will then update the ``db.json`` file with the new list of notes, and then return the new note to the front-end to add to the list. It is worth noting that in the back-end, all new notes will also have a unique ID created for it before it gets sent to ``db.json``.

The DELETE request will receive a unique ID from the front-end. This is where each note having a unique ID comes into play. When the ID has been received, the back-end will read the ``db.json`` file first before finding the particular note that matches the ID being passed in the request. When that note has been found, it will be removed from the notes array, and db.json will be updated with the updated data. The back-end will then send back the id to the front-end so it can update the list with the removal.

## Links

The live app deployed using Heroku can be found here: (insert placeholder text)

The GitHub repository can be found here: [https://github.com/cindyung56/note-taker](https://github.com/cindyung56/note-taker)