### Exercicio 1 

```
CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
    );
```

a) o varchar é uma sequência de caracteres, nesse caso podem ser usados ate 255 deles. Primary key quer dizer que é uma 
     chave primaria, um identificador unico , o date not null significa que eu não posso deixar essa opção em branco.

b) `SHOW DATABASES ;`
    Mostra a database que eu possuo, criada no momento, na area de action, com todas as suas propriedades.
    `SHOW TABLES;`
    mostra as todas as tables que eu possuo no meu banco.

c) `DESCRIBE Actor;`
    ele me mostra todas as colunas com seus respectivos valores.


### Exercicio 2

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("001", "Tony Ramos", 4000000, "1948-08-25","male"),
      ("002", "Gloria Pires", 1.200,000, "1963-08-23", "female");
```

b) Error Code: 1136. Column count doesn't match value count at row 2
   -- A contagem de colunas não corresponde à contagem de valores na linha 2
   -- esse erro aconteceu porque eu dupliquei o id, so que ele deve ser sempre um valor único, após ajeitar o id ele funcionou corretamente 

c) ``` 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");
```
-- Error Code: 1136. Column count doesn't match value count at row 1	
-- a contagem das colunas nao correspondem a contagem de valores na linha 1, ou seja, eu so estou passando 5 colunas eu preciso ter 5 valores sendo passadas, a solução foi passar todos os valores.

d) ```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUE("004", "Antonia Fagundes" , 400000, "1949-04-18", "male");
```
   
-- Error Code: 1364. Field 'name' doesn't have a default value
-- o campo 'nome' nao tem um valor definido, para resolver o problema passei o valor 'name' para a query

e) ```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");
modelo com erro: ("005", "Juliana Paes", 719333.33, 1979-03-26, "female");
```
   
-- Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
-- valor da data incorreto, nesse caso eu deveria passar o valor entre aspas e nao sem elas

f) ```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("006", "Tom Holland", 5000000, "1996-06-01", "male"),
("007", "Zendaya Maree", 6000000, "1996-09-01", "female");
```

### Exercicio 3

a) `SELECT * FROM Actor WHERE gender = "female";`
b) `SELECT salary from Actor where name = "Tony Ramos";`
c) `SELECT id, name from Actor WHERE gender = "invalid";` - retorna Null porque não existe esse nome como valor
d) `SELECT id, name, salary from Actor where salary < 500000;`

e) `SELECT id, nome from Actor where id = "002";`

	-- Error Code: 1054. Unknown column 'nome' in 'field list'
    -- Coluna desconhecida 'nome' na 'lista de campos', ou seja, deve-se colocar a nomeclatura correta 'name'


### Exercicio 4 

`SELECT * from Actor WHERE (name LIKE "A%" or name LIKE "J%") AND salary > 300000;`

a) essa query esta me retornando atores(a) que comecem com a letra A ou J, no caso foi retornado Antonia Fagundes e Juliana Paes.
e que tenha o salario acima de 300000.

b) `SELECT * from Actor WHERE (name NOT LIKE "A%") AND salary > 350000;`
c) `SELECT * from Actor WHERE (name LIKE "%G%" or name LIKE "%g%");`
d) `SELECT * from Actor WHERE (name LIKE "%A%" or "%a%" or "%G%" or "%g%") AND salary BETWEEN 350000 and 9000000;`

### Exercicio 5

a) ```
CREATE TABLE Movies (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL, 
release_date DATE NOT NULL,
rating INT NOT NULL
)
 ```
 -- Essa query retorna as informações sobre os filmes escolhidos, ela mostra uma id unica, o nome do filme, a sinopse, a data de laçamento e a avaliação do filme que pode ir de 0 a 10.

### Exercicio 6 

 a) SELECT id, title, rating from Movies where id = "003";
 b) SELECT * FROM Movies where title = "Orgulho e Preconceito";
 c) SELECT id, tilte, synopsis from Movie where rating > 7;

### Exercicio 7

a) SELECT * FROM Movie where title = "%vida*";
b) SELECT * FROM Movie where title LIKE "%TERMO DE BUSCA%" or synopsis LIKE "%TERMO DE BUSCA%";
c) SELECT * FROM Movie where release_date < "2022-08-17";
d) SELECT * FROM Movie where release_date < "2022-08-17" AND (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;







