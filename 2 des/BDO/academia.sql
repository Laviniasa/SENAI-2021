drop database if exists academia;

create database academia; 

show databases; 

use academia; 


create table telefone(

    id_cliente int, not null,

    número_telefone: txt(14)not null

);


create table clientes(
    
    id_cliente: int, auto_increment

    nome varchar(50) not null primary key,

    nascimento data, not null,

    sexo char, not null,

    peso, decimal, not null

);

create table Fixas(

    id_cliente int, not null,

    id_exercicio int, not null,

    dia_semana txt:(15)not null

    objetivo: txt(15)not null

    serie: txt(20),not null

);

create table exercicios(

    id_exercicios int not null,

    descrição: txt(40),not null

    grupo_muscular: txt(15)

    aparelho txt(20)


);


