# HFHackDay1
Hacker Fellows 2016 Grand Circus Bootcamp Hack Day June 17th

The task is to ingest an API, persist data in a database, and allow for deletion in the db (and on the screen) via a command from the webpage. Please use Postgres for the database and jQuery on the front-end.

The details: the page should have a button that pulls in new data from the API and puts it in the database. For example, you might query a movies API for your favorite movie and add specific information on that movie to your database. Include an edit button so that you can update each record with your own notes. The page should have a table that shows the data in the db and a delete button to delete a row. The calls should be made using ajax.

## Info on RESTful:
- when you send something, it won't modify sender or reciever server
- It's stateless (nothing gets saved)

### Why is that important?
you don't need to worry about the networking and web transfer stuff

[Stackoverflow Info on REST](http://stackoverflow.com/questions/3889099/give-me-a-example-of-non-restful-design)

## Postgres
[Make a new user](http://stackoverflow.com/questions/28276706/postgresql-error-fatal-role-username-does-not-exist)