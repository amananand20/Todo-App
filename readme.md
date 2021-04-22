# TodoList App

---

## Description
This is a Todolist Web App.

---

### TechStacks Used -
* HTML, CSS and javaScript is used for frontend part.
* jQuery is used to make AJAX requests.
* nodeJS is used for the backend part.
* express.JS is used for server handling.
* MySQL and (sequelize, mysql2) npm packages are used for the Database part.

---

### Prerequisite -

Run these commands on shell before hosting on `http://localhost:4000` for database creation

1. Login to mysql as `root` user.
2. Do the following as `root` user :
    ```
    create database todolist;
    create user 'todouser' identified by 'todopass';
    use todolist;
    grant all privileges on todolist.* to todouser;
    flush privileges;
    ```