# Cartão de Crédito Válido

## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)

***

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

Neste projeto, você poderá vizualizar uma das páginas de pagamento de uma loja, onde se pode adicionar um novo cartão crédito e, para isso, é preciso digitar no campo especificado os números do cartão, que são ocultados por uma hashtag (#), para então receber a mensagem informando se o cartão é válido ou não e, em seguida, avançar para preencher o restante dos dados.

### Os objetivos gerais deste projeto são os seguintes

Os principais usuários do produto são clientes no momento de pagamento de compra online que buscam um ambiente seguro para finalizar seu pedido. Com esta página, tais clientes podem adicionar um novo cartão de crédito válido ao banco de dados da loja para realizar a compra dos melhores produtos.
Censuramos os números do cartão para que o cliente da loja pode se sentir protegido em relação aos seus dados. Ao finalizar a digitação, clica-se no botão "Validar" para então receber uma resposta sobre a validez do cartão inserido. 


