INSERT INTO User_Acces (username, password, email, role)
VALUES
    ('vendedor01', '123456', 'vendedor01@empresa.com', 'Vendedor'),
    ('inventario01', '123456', 'inventario01@empresa.com', 'Inventario'),
    ('bodega01', '123456', 'bodega01@empresa.com', 'Bodega'),
    ('admin01', '123456', 'admin01@empresa.com', 'Admin');

INSERT INTO Branch (id_branch, name_b, address, phone) VALUES
(1, 'Central', 'Calle Principal #1', '+1 123-456-7890'),
(2, 'Norte', 'Avenida Norte #2', '+1 234-567-8901'),
(3, 'Sur', 'Avenida Sur #3', '+1 345-678-9012'),
(4, 'Bodega', 'Calle Secundaria #4', '+1 456-789-0123');

INSERT INTO Employee (DPI, names_e, last_names, date_of_birth, FK_id_branch) VALUES
('1111111111111', 'Empleado1', 'Apellido1', '1990-01-01', 1),
('2222222222222', 'Empleado2', 'Apellido2', '1991-02-02', 2),
('3333333333333', 'Empleado3', 'Apellido3', '1992-03-03', 1),
('4444444444444', 'Empleado4', 'Apellido4', '1993-04-04', 3),
('5555555555555', 'Empleado5', 'Apellido5', '1994-05-05', 2);

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