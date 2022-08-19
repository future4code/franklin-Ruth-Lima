### Exercicio 1

a) o camando ALTER TABLE Actor DROP COLUMN salary faz uma alteração na estrutura da tabela (alter table), removendo a coluna salary de sua querie(drop column);

b) o comando ALTER TABLE Actor CHANGE gender sex VARCHAR(255) altera o nome da coluna gender para sex do tipo VARCHAR.

c) o comando ALTER TABLE Actor CHANGE gender gender VARCHAR(255) re-declara a coluna gender alterando ela para uma nova coluna, tambem chamada de gender so que agora é do tipo varchar.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100)

### Exercicio 2 

a) UPDATE Actor SET name = "Bruna Marquezine", birth_date = "1995-08-04" WHERE id = "003"; 

b) UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes"
e depois reverti o comando: UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES"; 
-- pra realizar esse comando eu tive que desabilitar o safe updates.

c) UPDATE Actor SET name = "Paes Juliana", birth_date = "1979-03-25", salary = 800000, gender = "female" WHERE id = "005" ;

d) UPDATE Actor SET hometown = "São Paulo" WHERE id = "009"	;
-- Error Code: 1054. Unknown column 'hometown' in 'field list', nesse caso, eu tentei atualizar uma coluna que nao existe.


### Exercicio 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

### Exercicio 4

a) SELECT MAX(salary) from Actor;
b) SELECT MIN(salary) from Actor WHERE gender = "female";
c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
d) SELECT SUM(salary) FROM Actor;


### Exercicio 5

a) Ela separou o gender, retornando a quantidade total de female e a quantidade total de male existentes no Actor.
b) 
c)
d)
e)

### Exercicio 6 