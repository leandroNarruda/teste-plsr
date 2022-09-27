
## Qual a saída do algoritmo?

Page  1  
2|233|547|877  
3|239|557|881  
(...)  

Page  2  
1229|1597|1993|2371  
1231|1601|1997|2377  
(...)  

Page  3  
2749|3187|3581|4001  
2753|3191|3583|4003  
(...) 

Page  4  
4421|4861|5281|5701  
4423|4871|5297|5711  
(...)

Page  5  
6143|6577|7001|7507  
6151|6581|7013|7517  
(...)

## Você julga que este código é limpo? Aponte quais erros o programador cometeu que prejudicaram a qualidade do código.

Não. Segue alguns pontos:
* Nomenclatura das variáveis sem nenhum sentido.
* Nome da classe muito genérico.
* Várias atribuições para o mesmo método.
* Lopping dentro de looping.
* Parâmetros chumbados.
* Overengineering.

## Refatore o código do arquivo utilizando conceitos de Clean Code, de maneira que o código se torne mais limpo, legível e de fácil manutenção.

Ver aquivo newMain.js


## Explique como o conceito de middlewares no Express.js pode ser utilizado para evitar repetição de código.

No express um middleware tem basicamente a capacidade de alterar, adicionar ou apagar 
informações da requisição. Seu potencial é imenso, sendo o próprio express
construído com base em middlewares, com um empilhamento de funções muito bem organizado. Podemos 
definir um middleware como qualquer tipo de função que se coloca entre uma solicitação
HTTP e o retorno do respectivo servidor. Um exemplo bem útil que ilustra o poder de um middleware 
é um método que verifica a autenticidade dos usuários e pode ser reaproveitado em qualquer rota que exija autenticação.

## Tendo em vista duas abordagens de backend: uma utilizando um ORM (como Prisma e Sequelize) e outra utilizando apenas um query builder (como o Knex), quais as vantagens e desvantagens de cada abordagem?

Na minha opinião, depende muito da complexidade das querys que vão existir no projeto.
Já trabalhei com sql puro, que atendeu melhor as demandas do que um ORM atenderia. Algumas 
vantagens de um ORM são a simplicidade do uso (pra quem conhece muito pouco sql), menos código na aplicação, uso de extensões autocompletes, 
abstração de instruções, prevenção de sql injection e suporte à vários tipos de banco de dados. 
Um query builder tipo o Knex pode ser um ótimo meio termo entre sql puro e ORM, que 
proporciona um ganho de performance, sem necessidade de criar models, e com mais flexibilidade.

## Faça uma query em SQL que traga em cada linha o nome de jogadores que se enfrentaram mais de duas vezes, onde em cada partida a soma dos pontos foi maior que 30 e a duração do jogo foi maior que 90 minutos. Não podem haver resultados repetidos.

