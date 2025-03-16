# typescriptRestApi

## REST API For Note Management Application Using Node and Typescript

This is a simple Note Management application built using Node.js, Typescript, Express, and MongoDB. The application allows you to create, read, update, and delete notes. The project is structured with a Model-View-Controller (MVC) architecture, using Mongoose as the Object Document Modelling (ODM) for MongoDB.

### Features
- Create a new note
- Retrieve a single note
- Retrieve all notes
- Update an existing note
- Delete a note
- Retrieve notes based on a particular category

### Technologies Used
- `Node.js:` JavaScript runtime for building the application.
- `Express:` Web framework for handling HTTP requests and routing.
- `MongoDB:` NoSQL database for storing the note data.
- `Mongoose:` ODM (Object Data Modeling) library for MongoDB and Node.js.
- `TypeScript:` For static typing and better developer experience.
- `Postman:` For Testing your api endpoints


### Prerequisites
Before running the application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (locally or via a cloud service like MongoDB Atlas)
If MongoDB is not installed locally, you can follow the installation instructions from the [MongoDB Website.](https://www.mongodb.com/try/download/community)

### Installation
1. Clone the Repository
First, clone the repository to your local machine using this code below:

`git clone https://github.com/EjikeJosephUche/typescriptRestApi.git`

`cd typescriptRestApi`

2. Install Dependencies
Install the required dependencies using npm:

`npm install`

3. Set Up MongoDB
Make sure you have MongoDB running locally, or create a new database on MongoDB Atlas if you're using a cloud service.

In the db.ts file, update the MongoDB URI if the connection fails.
For example, you can use this below when you have your environment variables set up

`const dbURI = process.env.DB_URI;`

or you can Use it locally in the db.ts file like this:

`const dbURI = '[Your DB URI here]'`

4. Run the Application
Once you follow the above instructions, everything should be set up and you should be able to run the application:
You can either use
- `npm run build` to transpile your typescript code
- `npm run start` to start the server or the JavaScript code

or you can also use 

`npm run dev` to run the typscript in development mode without transpilling it into JavaScript code.


The application will run on http://localhost:3000.

### Project Structure
```
/src                             # This is the source folder where all my typscript code resides
  /controllers
    - NoteController.ts          # The Controller responsible for handling HTTP requests
  /middleware
    - loggingMiddleware.ts       # this logs requests to requestLogs.txt
    - validateNote.middleware.ts  # This validates the note before they are sent to the server
  /models
    - NoteModel.ts               # Mongoose schema for Note Item
  /routes
    - note.route.ts              # Routing for my endpoints
  /services
    - NoteService.ts             # This Service layer contains the logic for interacting with the Database
  - db.ts                        # MongoDB connection setup
  - server.ts                    # Main application file
```

### Folder Structure Breakdown

- **/src:** This is the folder where all my Typescript code resides.
- **/controllers:** Contains the controller layer that handles HTTP requests and invokes service methods to perform the necessary actions. The NoteController.ts file defines routes like getNote, getNotes, createNote, updateNote, and deleteNote.

- **/models:** Contains the Mongoose schema and model. The NoteModel.ts file defines the structure of the Note document in MongoDB.

- **/services:** Contains business logic. The NoteService.ts file interacts with the NoteModel to perform database operations (e.g., findById, find, save, findByIdAndUpdate, findByIdAndDelete).

- **/middleware:** Contains middleware for validating the note before it is sent to the server and logging it to a text file.

- **/config/db.ts:** Contains the MongoDB connection logic. This file uses Mongoose to connect to MongoDB.

- **server.ts:** The entry point of the application that sets up the Express server and routes.


### API Endpoints
Here are the available API endpoints for the Note application:

1. Get All Notes
URL: /api/notes
Method: GET
Response: Returns a list of all notes.

Example:

Use Postman, enter the link http://localhost:3000/notes

**Response:**

```
[
  {
    "id": "60d6f4bb0d7f5b3588f36f33",
    "title": "Note 1",
    "content": "This is the first note.",
    "createdAt": "2025-03-06T10:00:00.000Z",
    "updatedAt": "2025-03-06T10:00:00.000Z"
  },
  {
    "id": "60d6f4cc0d7f5b3588f36f34",
    "title": "Note 2",
    "content": "This is the second note.",
    "createdAt": "2025-03-06T11:00:00.000Z",
    "updatedAt": "2025-03-06T11:00:00.000Z"
  }
]
```

2. Create a New Note
URL: /api/notes
Method: POST
Body:

{
  "title": "New Note",
  "content": "This is a new note."
}

**Response:**

```
{
  "id": "60d6f5b0c9e77b362d88b0ab",
  "title": "New Note",
  "content": "This is a new note.",
  "createdAt": "2025-03-06T12:00:00.000Z",
  "updatedAt": "2025-03-06T12:00:00.000Z"
}
```

3. Update an Existing Note
URL: /api/notes/:id
Method: PUT
URL Params: id=[string] (ID of the note to be updated)
Body:

{
  "title": "Updated Note",
  "content": "This note has been updated."
}

**Response:**
```
{
  "id": "60d6f4bb0d7f5b3588f36f33",
  "title": "Updated Note",
  "content": "This note has been updated.",
  "createdAt": "2025-03-06T10:00:00.000Z",
  "updatedAt": "2025-03-06T12:30:00.000Z"
}
```

4. Delete a Note
URL: /api/notes/:id
Method: DELETE
URL Params: id=[string] (ID of the note to be deleted)

5. Get Notes by their category
URL: /api/notes/categories/:categoryId ⁠ 
Method: GET
URL Params: category=[string] (category of the notes to fetch from the database)

**Response:** HTTP status code 204 No Content if the note was successfully deleted.


### Contributing
Feel free to fork the repository, open issues, and submit pull requests. Contributions are always welcome!

**Made with ❤️ By Joseph Uche**