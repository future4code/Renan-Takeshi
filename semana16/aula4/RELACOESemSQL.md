### Exercicio 1

a) Uma chave estrangeira eh um valor que referencia/conecta duas tabelas,
ela precisa estar presente na tabela referenciada

b)

```sql
INSERT INTO rating (id, comment, rate, movie_id)
VALUES
	("003","Muito bom!",7,"001"),
    ("004","Muito bom mesmo!",8,"001"),
    ("005","Muito bom demais!",9,"003"),
    ("006","Muito bom de verdade!",9,"004"),
    ("007","Excelente!",10,"007");
```

c) Falhou pois a chave estrangeira nao existe na tabela referenciada

```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails
```

d)

```sql
ALTER TABLE movie DROP COLUMN rating;
```

e)Nao foi possivel deletar pois esta sendo referenciado em outra tabela

```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails
```

---

### Exercicio 2

a) Cada linha dessa tabela representa uma relacao ator-filme
Ela eh nescessaria pois um ator trabalha em varios filmes, assim com em um filme trabalham varios atores

b)

```sql
INSERT INTO moviecast (movie_id, actor_id)
VALUES
	("001","002"),
	("002","002"),
	("003","002"),
	("004","003"),
	("007","003"),
	("001","003");
```

c) Nao foi possivel adicionar uma linha filha pois a pai nao existe

```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails
```

d) Nao foi possivel deletar pois esta sendo referenciado em outra tabela

```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails
```

---

### Exercicio 3

a) O 'JOIN' faz a juncao das tabelas 'rating' e 'movie'.
O operador 'ON' indica quais linhas retornar por meio de uma comparacao.

b)

```sql
SELECT movie.id, movie.name as Title, rating.rate
FROM movie INNER JOIN rating
ON movie.id = rating.movie_id;
```

---

### Exercicio 4

a)

```sql
SELECT movie.id, movie.name as Title, rating.rate, rating.comment
FROM movie LEFT JOIN rating
ON movie.id = rating.movie_id;
```

b)

```sql
SELECT movie.id as movie_id, movie.name as movie_name, moviecast.actor_id
FROM moviecast RIGHT JOIN movie
ON moviecast.movie_id = movie.id;
```

c)

```sql
SELECT AVG(rating.rate) as avg_rate, movie.name
FROM rating RIGHT JOIN movie
ON movie.id = rating.movie_id
GROUP BY movie.name;
```

---

### Exercicio 5

a) Essa query retorna todos os filmes-actor, onde o filme tem atores relacionados.
As colunas sao todas das tabelas 'movie', 'moviecast' e 'actor'.
Sao necessarios dois 'JOIN' pois as tabelas 'movie' e 'actor' nao contem informacoes sobre o elenco de cada filme.
Essas informacao estao na tabela 'moviecast'.
b)

```sql
SELECT m.id as movie_id, m.name as movie_title,a.id as actor_id,a.name as actor_name
FROM movie m LEFT JOIN moviecast mc ON m.id = mc.movie_id
JOIN actor a ON a.id = mc.actor_id;
```

c) Tinha uma virgula no 'm,title'

```
Error Code: 1054. Unknown column 'm' in 'field list'
```

---

### Exercicio 6

a) Modelei como 1:N, pois julguei que o custo de armazenar o tipo do Oscar
seria menor do que ter uma terceira tabela com os chaves do filme e oscar.

b)

```sql
CREATE TABLE oscar (
	id VARCHAR(255) PRIMARY KEY,
    name ENUM("Fotografia", "Trilha Sonora", "Animacao") NOT NULL,
    date DATE NOT NULL,
    movie_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movie(id)
);
```

c)

```sql
INSERT INTO oscar VALUES
("1","Fotografia","2018-01-01","001"),
("2","Animacao","2018-01-01","001"),
("3","Trilha Sonora","2018-01-01","002"),
("4","Fotografia","2019-01-01","002"),
("5","Animacao","2019-01-01","003"),
("6","Trilha Sonora","2019-01-01","003"),
("7","Fotografia","2020-01-01","004"),
("8","Animacao","2020-01-01","004"),
("9","Trilha Sonora","2020-01-01","007"),
("10","Fotografia","2021-01-01","007"),
("11","Animacao","2021-01-01","10"),
("12","Trilha Sonora","2021-01-01","10");
```

d)

```sql
SELECT movie.name,
    GROUP_CONCAT(CONCAT(oscar.name, ' em ', oscar.date) SEPARATOR ", ") AS oscar_list
FROM oscar JOIN movie on oscar.movie_id = movie.id
GROUP BY movie.name
ORDER BY movie.name;
```
