CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email TEXT
);

INSERT INTO users (name, email) VALUES ('John', 'john@ibm.com'), ('Ryan', 'ryan@ibm.com');