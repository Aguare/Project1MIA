--CREATE DATABASE Electronic_Homes;

--\c electronic_homes;

CREATE TABLE Branch(
    id_branch SERIAL PRIMARY KEY,
    name_b VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL
);

CREATE TABLE Employee(
    DPI INTEGER(13) PRIMARY KEY,
    names_e VARCHAR(50) NOT NULL,
    last_names VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    FK_id_branch INTEGER REFERENCES Branch(id_branch)
);

CREATE TABLE User_Acces(
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(250) NOT NULL,
    email VARCHAR(50) NOT NULL,
    role VARCHAR(50) NOT NULL,
    FK_DPI BIGINT REFERENCES Employee(DPI)
);

CREATE TABLE Client(
    NIT VARCHAR(20) PRIMARY KEY,
    names_c VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL
);

CREATE TABLE Product(
    id_product SERIAL PRIMARY KEY,
    name_p VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description VARCHAR(150) NOT NULL
);

CREATE TABLE Inventory(
    FK_id_product INTEGER REFERENCES Product(id_product),
    FK_id_branch INTEGER REFERENCES Branch(id_branch),
    quantity INTEGER NOT NULL,
    PRIMARY KEY(FK_id_product, FK_id_branch)
);

CREATE TABLE Sale(
    id_sale SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    FK_id_branch INTEGER REFERENCES Branch(id_branch),
    FK_DPI BIGINT REFERENCES Employee(DPI),
    FK_NIT VARCHAR(20) REFERENCES Client(NIT)
);

CREATE TABLE List_Products(
    id_list_products SERIAL PRIMARY KEY,
    FK_id_sale INTEGER REFERENCES Sale(id_sale),
    FK_id_product INTEGER REFERENCES Product(id_product),
    quantity INTEGER NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL
);