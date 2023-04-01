INSERT INTO Branch (id_branch, name_b, address, phone) VALUES
(1, 'Central', 'Calle Principal #1', '+1 123-456-7890'),
(2, 'Norte', 'Avenida Norte #2', '+1 234-567-8901'),
(3, 'Sur', 'Avenida Sur #3', '+1 345-678-9012'),
(4, 'Bodega', 'Calle Secundaria #4', '+1 456-789-0123');

-- Sucursal Central
INSERT INTO Employee (DPI, names_e, last_names, date_of_birth, FK_id_branch) VALUES
(1111111111111, 'Vendedor', 'Vendedor', '1990-01-01', 1),
(2222222222222, 'Vendedor', 'Vendedor', '1991-02-02', 1),
(3333333333333, 'Vendedor', 'Vendedor', '1991-02-02', 1),
(4444444444444, 'Inventario', 'Inventario', '1993-04-04', 1);

INSERT INTO User_Acces (username, password, role, FK_DPI)
VALUES
    ('1111111111111', '123456', 'Vendedor', '1111111111111'),
    ('2222222222222', '123456', 'Vendedor', '2222222222222'),
    ('3333333333333', '123456', 'Vendedor', '3333333333333'),
    ('4444444444444', '123456', 'Inventario', '4444444444444');

-- Sucursal Norte
INSERT INTO Employee (DPI, names_e, last_names, date_of_birth, FK_id_branch) VALUES
(5555555555555, 'Vendedor', 'Vendedor', '1990-01-01', 2),
(6666666666666, 'Vendedor', 'Vendedor', '1991-02-02', 2),
(7777777777777, 'Vendedor', 'Vendedor', '1991-02-02', 2),
(8888888888888, 'Inventario', 'Inventario', '1993-04-04', 2);

INSERT INTO User_Acces (username, password, role, FK_DPI)
VALUES
    ('5555555555555', '123456', 'Vendedor', '5555555555555'),
    ('6666666666666', '123456', 'Vendedor', '6666666666666'),
    ('7777777777777', '123456', 'Vendedor', '7777777777777'),
    ('8888888888888', '123456', 'Inventario', '8888888888888');

-- Sucursal Sur
INSERT INTO Employee (DPI, names_e, last_names, date_of_birth, FK_id_branch) VALUES
(9999999999999, 'Vendedor', 'Vendedor', '1990-01-01', 3),
(1010101010101, 'Vendedor', 'Vendedor', '1991-02-02', 3),
(1212121212121, 'Vendedor', 'Vendedor', '1991-02-02', 3),
(1313131313131, 'Inventario', 'Inventario', '1993-04-04', 3);

INSERT INTO User_Acces (username, password, role, FK_DPI)
VALUES
    ('9999999999999', '123456', 'Vendedor', '9999999999999'),
    ('1010101010101', '123456', 'Vendedor', '1010101010101'),
    ('1212121212121', '123456', 'Vendedor', '1212121212121'),
    ('1313131313131', '123456', 'Inventario', '1313131313131');

-- Bodega
INSERT INTO Employee (DPI, names_e, last_names, date_of_birth, FK_id_branch) VALUES
(1414141414141, 'Bodega', 'Bodega', '1990-01-01', 4),
(1515151515151, 'Bodega', 'Bodega', '1991-02-02', 4),
(1616161616161, 'Bodega', 'Bodega', '1991-02-02', 4),
(1717171717171, 'Bodega', 'Bodega', '1993-04-04', 4);

INSERT INTO User_Acces (username, password, role, FK_DPI)
VALUES
    ('1414141414141', '123456', 'Bodega', '1414141414141'),
    ('1515151515151', '123456', 'Bodega', '1515151515151'),
    ('1616161616161', '123456', 'Bodega', '1616161616161'),
    ('1717171717171', '123456', 'Bodega', '1717171717171');

-- Administrador
INSERT INTO Employee (DPI, names_e, last_names, date_of_birth, FK_id_branch) VALUES
(1000000000000, 'Admin', 'Admin', '1990-01-01', 1);
INSERT INTO User_Acces (username, password, role, FK_DPI)
VALUES
    ('1000000000000', '123456', 'Admin', '1000000000000');



INSERT INTO Client (NIT, names_c, address) VALUES
('256198473', 'Cliente1', 'Calle Principal #1'),
('905738124', 'Cliente2', 'Avenida Norte #2'),
('402185739', 'Cliente3', 'Avenida Sur #3'),
('678509231', 'Cliente4', 'Calle Secundaria #4'),
('123456789', 'Cliente5', 'Calle Secundaria #5');

INSERT INTO Product (name_p, price, description) VALUES
('Televisor LG OLED65CX', 1299.99, 'Televisor OLED 4K de 65 pulgadas con tecnología HDR y Smart TV'),
('Lavadora Samsung WF45K6500AV', 899.99, 'Lavadora frontal de carga superior de 4.5 pies cúbicos con tecnología de lavado a vapor'),
('Refrigerador LG LMXS30776S', 2999.99, 'Refrigerador de puerta francesa de 30 pies cúbicos con tecnología Smart Cooling Plus'),
('Aspiradora Shark Navigator Lift-Away', 169.99, 'Aspiradora con tecnología Lift-Away y filtro HEPA'),
('Horno microondas Panasonic NN-SN966S', 209.99, 'Horno microondas de acero inoxidable de 2.2 pies cúbicos con tecnología Inverter'),
('Licuadora Vitamix A3500', 599.99, 'Licuadora de alto rendimiento con cinco programas preestablecidos y conectividad Bluetooth'),
('Ventilador de torre Dyson TP04', 549.99, 'Ventilador de torre con filtro HEPA y tecnología Air Multiplier'),
('Aspiradora robot Roomba i7+', 799.99, 'Aspiradora robot con estación de carga automática y tecnología de mapeo de habitaciones'),
('Cafetera Nespresso Vertuo', 199.99, 'Cafetera de cápsulas con tecnología de lectura de código de barras'),
('Secadora Whirlpool WED8620HW', 999.99, 'Secadora eléctrica con tecnología de sensores de humedad y vapor Refresh');

INSERT INTO Product (name_p, price, description) VALUES
('Robot de cocina KitchenAid KSM150PSER', 379.99, 'Robot de cocina con batidora de pie de 5 cuartos de galón y accesorios incluidos'),
('Lavavajillas Bosch SHXM4AY55N', 849.99, 'Lavavajillas empotrable con capacidad para 16 juegos de platos y tecnología de lavado en tres etapas'),
('Aire acondicionado portátil LG LP0817WSR', 299.99, 'Aire acondicionado portátil con control remoto y capacidad de enfriamiento de 8000 BTU'),
('Cafetera de goteo Moccamaster KBT 741', 329.99, 'Cafetera de goteo con capacidad de 10 tazas y certificación ECBC'),
('Plancha de vapor Rowenta DW5080', 89.99, 'Plancha de vapor con suela de acero inoxidable y tecnología de apagado automático'),
('Lavaplatos eléctrico SPT SD-9241W', 459.99, 'Lavaplatos eléctrico con capacidad para 8 juegos de platos y tecnología de sec'),
('Cafetera Hamilton Beach', 249.99, 'Cafetera programable Hamilton Beach modelo 48464.'),
('Horno tostador Oster', 349.99, 'Horno tostador Oster modelo TSSTTVF817.'),
('Batidora KitchenAid', 899.99, 'Batidora KitchenAid modelo KSM150PSER.'),
('Nevera Samsung', 3999.99, 'Nevera Samsung modelo RF28R7201SR.');

INSERT INTO Product (name_p, price, description) VALUES
('Lavadora LG', 2799.99, 'Lavadora LG modelo WM9000HVA.'),
('Secadora Whirlpool', 2499.99, 'Secadora Whirlpool modelo WED5000DW.'),
('Estufa eléctrica General Electric', 3499.99, 'Estufa eléctrica General Electric modelo JB655SKSS.'),
('Aspiradora Dyson', 699.99, 'Aspiradora inalámbrica Dyson V11 Absolute.'),
('Aire acondicionado LG', 4299.99, 'Aire acondicionado LG modelo LW1517IVSM.'),
('Calentador de agua Rheem', 2999.99, 'Calentador de agua Rheem modelo PROG50-38N RH60.'),
('Robot de cocina Ninja', 499.99, 'Robot de cocina Ninja modelo BN801.'),
('Plancha de vapor Rowenta', 99.99, 'Plancha de vapor Rowenta modelo DW5080.'),
('Ventilador de torre Lasko', 149.99, 'Ventilador de torre Lasko modelo T42951.'),
('Parrilla eléctrica Hamilton Beach', 249.99, 'Parrilla eléctrica Hamilton Beach modelo 25361.');

--Insertar productos en inventario
INSERT INTO Inventory (FK_id_Product, FK_id_Branch, quantity) VALUES
(1,1,10),
(2,1,5),
(3,1,6),
(4,1,8),
(5,1,15),
(6,1,20),
(7,1,35),
(8,1,14)
(9,1,16)
(10,1,18)
(11,1,19)
(12,1,32)
(13,1,2)
(14,1,4)
(15,1,8)
(16,1,7)
(17,1,50)
(18,1,41)
(19,1,28)
(20,1,29)
(21,1,25)
(22,1,14)
(23,1,14)
(24,1,15)
(25,1,12)
(26,1,1)
(27,1,2)
(28,1,3)
(29,1,4)
(30,1,5);

INSERT INTO Inventory (FK_id_Product, FK_id_Branch, quantity) VALUES
(1,2,10),
(2,2,5),
(3,2,6),
(4,2,8),
(5,2,15),
(6,2,20),
(7,2,35),
(8,2,14)
(9,2,16)
(10,2,18)
(11,2,19)
(12,2,32)
(13,2,2)
(14,2,4)
(15,2,8)
(16,2,7)
(17,2,50)
(18,2,41)
(19,2,28)
(20,2,29)
(21,2,25)
(22,2,14)
(23,2,14)
(24,2,15)
(25,2,12);

INSERT INTO Inventory (FK_id_Product, FK_id_Branch, quantity) VALUES
(2,3,10),
(4,3,5),
(6,3,6),
(8,3,8),
(9,3,15),
(10,3,20),
(12,3,35),
(14,3,14)
(16,3,16)
(18,3,18)
(22,3,19)
(24,3,32)
(26,3,2)
(28,3,4)
(30,3,8)

INSERT INTO Inventory (FK_id_Product, FK_id_Branch, quantity) VALUES
(1,4,10),
(2,4,50),
(3,4,60),
(4,4,80),
(5,4,15),
(6,4,20),
(7,4,35),
(8,4,14)
(9,4,16)
(10,4,18)
(11,4,19)
(12,4,32)
(13,4,20)
(14,4,40)
(15,4,80)
(16,4,70)
(17,4,500)
(18,4,410)
(19,4,280)
(20,4,290)
(21,4,250)
(22,4,140)
(23,4,140)
(24,4,150)
(25,4,120)
(26,4,10)
(27,4,20)
(28,4,30)
(29,4,40)
(30,4,50);
---Consultas---
SELECT p.id_product, p.name_p, p.price, i.quantity FROM Product p INNER JOIN Inventory i ON p.id_product = i.FK_id_Product WHERE i.FK_id_Branch = 2;

