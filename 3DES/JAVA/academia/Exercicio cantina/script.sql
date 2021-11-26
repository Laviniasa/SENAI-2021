drop database if exists cantina;
create database cantina;
use cantina;
create table clientes(
id int primary key not null auto_increment,
nome varchar(255) not null,
valor decimal(5,2) not null,
status varchar(30) null
);
insert into clientes(nome, valor, status) values ('Zé da esphira', 10.00, 'não pago'), ('Ciclano da coxinha', 6.00, 'pago');