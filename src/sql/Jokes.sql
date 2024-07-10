CREATE TABLE jokes (
  joke_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  joke_text TEXT NOT NULL,
  theme VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);