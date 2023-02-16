create table PRODUCTOS 
(
	id serial primary key,
	categoria varchar(100),
	descripcion varchar(150)
);

create table sucursales
(
	id serial primary key,
	nombre varchar(100),
	direccion varchar(100),
	correo varchar(100),
	id_departamento int,
	id_municipio int,
	telefono varchar(20)
);

create table departamento
(
	id_departamento serial primary key,
	descripcion varchar(100)
);

create table municipio
(
	id_municipio serial primary key,
	id_departamento int,
	descripcion varchar(100)
);

--llaves foranea departamento
 alter table sucursales
 add constraint FK_departamento
 	foreign key (id_departamento)
 	references departamento(id_departamento);
 	
--llave foranea municipio
 alter table sucursales
 add constraint FK_municipio
 	foreign key (id_municipio)
 	references municipio(id_municipio);
 	
 --lave foranea departamento en municipio
 alter table municipio
 add constraint FK_departamentoMunicipio
 	foreign key (id_departamento)
 	references departamento(id_departamento);