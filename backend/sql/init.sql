CREATE DATABASE auth;

USE auth;

CREATE TABLE users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  rol ENUM('user', 'admin')
);