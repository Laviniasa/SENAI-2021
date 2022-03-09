drop database banco;
create DATABASE banco charset=UTF8 collate utf8_general_ci;
use banco;
	CREATE TABLE tb_cliente (
	id_cliente integer PRIMARY KEY auto_increment,
	nome varchar(30) not null,
	cpf varchar (11) not null,
	rg varchar (7) not null,
	usuario varchar (50) ,
	email varchar (50) not null,
	senha varchar(15) not null,
	telefone varchar(15) not null
	);
	
	CREATE TABLE tb_administrador (
	nome VARCHAR(30) not null,
	cpf INTEGER (11) not null,
	email varchar (50),
	senha varchar(15) not null
	);
	
	CREATE TABLE tb_cartao (
	tipo VARCHAR(30) not null,	
	numero INTEGER(10) not NULL,
	validade INTEGER(6) not NULL,
	code INTEGER(10) not NULL,
	saldo VARCHAR(30),
	limite VARCHAR(30)
	);
	
	CREATE TABLE tb_conta(
	id_cliente varchar (30) not null,
	id_ transacao int not null,
	limite int not null,
	numero_conta int not null,
	saldo int not null,
	tipo VARCHAR(30)
	);
	
	CREATE TABLE tb_pix(
	chave int not null,
	CPF_CNPJ int not null,
	email varchar (50) not null,
	id_cliente varchar (30) not null,
	id_pix int not null,
	status VARCHAR(30) not null,
	telefone VARCHAR(11) not null
	);
	
	CREATE TABLE tb_transacao(
	data int(11) not null,
	tipo varchar (30) not null,
	valor int not null
	);
	
	CREATE TABLE tb_usuario(
	data_cadastro int(11) not null,
	id int not null,
	nome varchar (100) not null,
	senha varchar(15) not null,
	usuario varchar (50) 
	);
	
	select*from tb_cliente;
	select*from tb_administrador;
	select*from tb_cartao;
	select*from tb_conta;
	select*from tb_pix;
	select*from tb_transacao;
	select*from tb_usuario;
	show tables; 
	