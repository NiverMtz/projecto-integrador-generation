-- Crear base de datos
CREATE DATABASE paax;

-- USE
USE paax;

-- Crear tabla de usuarios
CREATE TABLE usuarios(
    id_usuarios     INT  NOT NULL ,
    nombres         NVARCHAR(50) NOT NULL,
    apellido_p      NVARCHAR(50) NOT NULL,
    apellido_m      NVARCHAR(50) NOT NULL,
    email           NVARCHAR(100) NOT NULL,
    contrasenia     NVARCHAR(50) NOT NULL,
    edad_min        BOOLEAN NOT NULL,
    nombre_usuario  NVARCHAR(50) NOT NULL,
    CONSTRAINT PK_id_usuarios PRIMARY KEY (id_usuarios)
);

-- Crear tabla usuario-post
CREATE TABLE usuarios_post(
    id_usuarios_post INT AUTO_INCREMENT NOT NULL,
    id_usuarios  INT NOT NULL,
    id_post INT NOT NULL,
    CONSTRAINT PK_id_usuarios_post PRIMARY KEY (id_usuarios_post),
    FOREIGN KEY  (id_usuarios) REFERENCES usuarios(id_usuarios),
    FOREIGN KEY  (id_post) REFERENCES post(id_post)
);

-- Crear tabla post
CREATE TABLE post(
    id_post INT AUTO_INCREMENT NOT NULL,
    titulo_pista NVARCHAR(100) NOT NULL,
    titulo_album NVARCHAR(100) NOT NULL,
    img_album    VARCHAR(100) NOT NULL,
    CONSTRAINT PK_id_post PRIMARY KEY (id_post)
);

-- Crear tabla post - reseña
CREATE TABLE post_resenia(
    id_post_resenia INT AUTO_INCREMENT NOT NULL,
    id_post INT NOT NULL,
    id_resenia INT NOT NULL,
    CONSTRAINT PK_id_post_resenia PRIMARY KEY (id_post_resenia),
    FOREIGN KEY  (id_post) REFERENCES post(id_post),
    FOREIGN KEY  (id_resenia) REFERENCES resenia(id_resenia)
);

-- Crear tabla reseña
CREATE TABLE resenia(
    id_resenia INT AUTO_INCREMENT NOT NULL,
    fecha_publicacion DATE NOT NULL,
    titulo_resenia  NVARCHAR(100) NOT NULL,
    id_usuarios INT NOT NULL,
    CONSTRAINT PK_id_resenia PRIMARY KEY (id_resenia),
    FOREIGN KEY  (id_usuarios) REFERENCES usuarios(id_usuarios)
);

-- Crear tabla resenia - comentario
CREATE TABLE resenia_comentario(
    id_resenia_comentario INT AUTO_INCREMENT NOT NULL,
    id_resenia INT NOT NULL,
    id_comentario INT NOT NULL,
    CONSTRAINT PK_id_resenia_comentario PRIMARY KEY (id_resenia_comentario),
    FOREIGN KEY  (id_resenia) REFERENCES resenia(id_resenia),
    FOREIGN KEY  (id_comentario) REFERENCES comentario(id_comentario)
);

-- Crear tabla comentario
CREATE TABLE comentario(
    id_comentario INT AUTO_INCREMENT NOT NULL,
    comentario NVARCHAR(255) NOT NULL,
    CONSTRAINT PK_id_comentario PRIMARY KEY (id_comentario)
);