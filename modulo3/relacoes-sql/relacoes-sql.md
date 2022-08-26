### Exercicio 1

a) É uma forma de relacionarmos uma tabela com a outra, a foreign key mostra que a propriedade referente a ela é uma 
chave estrangeira e que ira se comunicar com uma primary key de outra tabela para realizar a ação requerida.

b) 
```
INSERT INTO Rating (id, comment, rate, movie_id)
 VALUES("003", "Um ótimo filme romantico de época para assistir em uma noite fria de sexta", 8, "003");
 INSERT INTO Rating values("004", "Top 3 melhores filmes de zumbi", 10, "004");
 INSERT INTO Rating values("001", "Um filme divertido para assitir com os amigos", 8, "001");
 INSERT INTO Rating values("002", "Melhor filme né bebes, sem discussoes", 10, "002");

 ```

c) INSERT INTO Rating values("008", "Muito bom", 9, "008")

	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`franklin-ruth-lima`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	

-- Ele fala que não pode atualizar porque deu uma falha na chave estrangeira, ou seja, uma falha porque essa id nao existe.

d) ``` 
ALTER TABLE Movie DROP COLUMN Rating; 
```

e) 
```
DELETE FROM Movie WHERE rating = 8;
```
Error Code: 1054. Unknown column 'rating' in 'where clause'	
-- Deu esse erro porque nao existe mais a coluna rating.


### Exercicio 2

a) 
```
    CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
Essa tabela vai permitir que se possa fazer mais de uma associação para o mesmo filme. ELa possui um id_movie e um actor_id que vão se ligar a tabela de movie atraves da foreign key, que uni o movie_id do MovieCast ao id da table Movie e o actor_id ao Actor(id).

b) ```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("002", "003");
INSERT INTO MovieCast VALUES ("002", "004");
INSERT INTO MovieCast VALUES ("002", "005");
INSERT INTO MovieCast VALUES ("003", "007");
INSERT INTO MovieCast VALUES ("003", "003");
INSERT INTO MovieCast VALUES ("001", "004");
```

c) ``` 
INSERT INTO MovieCast VALUES ("004", "003")
 ```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails 
-- Esse erro ocorreu porque o id do movie que eu adicionei é uma id inexistente.


d)  ```
DELETE FROM Movie WHERE actor_id = "003"
```
Error Code: 1054. Unknown column 'actor_id' in 'where clause' - Deu esse error porque é uma chave estrangeira que nao pode ser apagada 'sem mais nem menos'. 

### Exercicio 3 

a) Essa query uni as colunas encontradas na tabela de Movie com as colunas da tabela de rating. 
   O operador ON tem a funçao de juntar, por exemplo: juntar uma id_actor com Actor(id).

b) SELECT title, movie_id, rate as rating FROM Movie
INNER JOIN Rating ON Movie.id =  Rating.movie_id