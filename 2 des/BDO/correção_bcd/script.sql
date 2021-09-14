drop database if exists locadora;
create database locadora charset = UTF8 collate = utf8_general_ci;
use locadora;

create table veiculos(
    placa varchar(8) primary key,
    modelo varchar(20) not null,
    marca varchar(20) not null,
    cor varchar(20) not null,
    valor_diaria decimal (7,2) not null,
    ano integer (4) not null,
    tipo varchar(20) not null
);
create table locacoes(
    id integer not null primary key auto_increment,
    data_retirada date not null,
    data_devolucao date,
    obs varchar (255),
    valor_efetivo decimal(7,2) 
);
create table clientes(
    cpf varchar (12) not null primary key,
    nome varchar(50) not null,
    endereco varchar(100) not null,
    email varchar(70) not null
);
create table telefones(
    cpf varchar(12) not null,
    telefone varchar(15) not null
);

show tables;
describe veiculos;
describe locacoes;
describe clientes;
describe telefones;

alter tables

-- CRUD DDL (create, "show describe", alter, drop) 

alter table telefones add
constraint fk_tel_cli foreign key (cpf)
references clientes(cpf)
on delete cascade 
on update cascade;

alter table locacoes add
constraint fk_locado foreign key (placa)
references veiculos(placa)
on update cascade;

alter table locacoes add
cpf varchar(12) not null;

alter table locacoes add
constraint fk_aluga foreign key (cpf)
references clientes(cpf)
on update cascade

