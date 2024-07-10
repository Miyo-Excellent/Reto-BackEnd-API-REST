CREATE TABLE JokeThemes (
  joke_id INT NOT NULL,
  theme_id INT NOT NULL,
  PRIMARY KEY (joke_id, theme_id),
  FOREIGN KEY (joke_id) REFERENCES Jokes(joke_id),
  FOREIGN KEY (theme_id) REFERENCES Themes(theme_id)
);