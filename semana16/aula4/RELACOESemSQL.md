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
