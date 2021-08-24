CREATE TABLE affirmations (
  id SERIAL,
  quote VARCHAR ( 240 )
);

CREATE TABLE users (
  id SERIAL,
  username VARCHAR ( 50 )
);

CREATE TABLE savedAffirm (
  id INT NOT NULL,
  quote VARCHAR ( 240 )
);