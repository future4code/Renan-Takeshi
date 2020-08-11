### Exercicio 1

a) Extinguir a coluna 'salary'
b) Alterar o noma de coluna 'gender' para 'sex' com tipe VARCHAR de comprimento maximo 6
c) Alterar o tipo da coluna 'gender' para VARCHAR de comprimento maximo 255
d)

```sql
ALTER TABLE actor CHANGE gender gender VARCHAR(100)
```

---

### Exercicio 2

a)

```sql
UPDATE actor
SET name = 'Sean Bean', birth_date = '1886-10-10'
WHERE id = '003'
```

b)

```sql
UPDATE actor
SET name = 'JULIANA PÃES'
WHERE name = 'Juliana Paes'
```

```sql
UPDATE actor
SET name = 'Juliana Paes'
WHERE name = 'JULIANA PÃES';
```

c)

```sql
UPDATE actor
SET
	name = 'Sandy',
	salary = 1000000000,
	birth_date = '1988-11-11',
	gender = 'female'
WHERE id = '005';
```

d) O resultado foi '0 linhas afetadas', pois 'Linhas encontradas: 0', nenhum 'Warning'

```sql
UPDATE actor
SET name = 'why'
WHERE name = 'not';
```

---

### Exercicio 3

a)

```sql
DELETE FROM actor
WHERE
	name = 'Fernanda Montenegro';
```

b)

```sql
DELETE FROM actor
WHERE
	gender = 'male' AND
	salary > 1000000;
```

---

### Exercicio 4

a)

```sql
SELECT MAX(salary)
FROM actor;
```

b)

```sql
SELECT MIN(salary)
FROM actor
WHERE gender = 'female';
```

c)

```sql
SELECT COUNT(*)
FROM actor
WHERE gender = 'female';
```

d)

```sql
SELECT SUM(salary)
FROM actor;
```

---

### Exercicio 5

a) Vai agrupar as linhas com generos iguais da tabela 'actor'
e retornar a contagem de cada grupo, juntamente com o valor da coluna 'gender'
b)

```sql
SELECT id, name
FROM actor
ORDER BY name DESC;
```

c)

```sql
SELECT *
FROM actor
ORDER BY salary ASC;
```

d)

```sql
SELECT *
FROM actor
ORDER BY salary ASC
LIMIT 3;
```

e)

```sql
SELECT AVG(salary), gender
FROM actor
GROUP BY gender;
```

---

### Exercicico 6

a)

```sql
ALTER TABLE movie
ADD COLUMN playing_limit_date2 DATE;
```

b)

```sql
ALTER TABLE movie
CHANGE COLUMN rating rating FLOAT;
```

c)

```sql
UPDATE movie
SET playing_limit_date = '2020-08-12'
WHERE id = '001';
```

```sql
UPDATE movie
SET playing_limit_date = '2020-08-10'
WHERE id = '002';
```

d) Nao encontrou o id, logo nada mudou. Nenhum warning, pois nao ha nada de errado/estranho em nao haver matches.

```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
```

---

### Exercicio 7

a)

```sql
SELECT * FROM movie
WHERE
	rating > 7.5 AND
	playing_limit_date < CURDATE();
```

b)

```sql
SELECT AVG(rating) AS 'Media das avaliacoes'
FROM movie;
```

c)

```sql
SELECT COUNT(*) AS 'Quantidade de filmes em cartaz'
FROM movie
WHERE playing_limit_date < CURDATE();
```

d)

```sql
SELECT COUNT(*) AS 'Quantidade de estreias futuras'
FROM movie
WHERE launch_date > CURDATE();
```

e)

```sql
SELECT MAX(rating) AS 'A melhor nota'
from movie;
```

f)

```sql
SELECT MIN(rating) AS 'A pior nota'
from movie;
```

---

### Exercicio 8

a)

```sql
SELECT *
FROM movie
ORDER BY name ASC;
```

b)

```sql
SELECT *
FROM movie
ORDER BY name DESC
LIMIT 5;
```

c)

```sql
SELECT *
FROM movie
WHERE
	launch_date < CURDATE() AND
    playing_limit_date < CURDATE()
LIMIT 3;
```

d)

```sql
SELECT *
FROM movie
ORDER BY rating DESC
LIMIT 3;
```
