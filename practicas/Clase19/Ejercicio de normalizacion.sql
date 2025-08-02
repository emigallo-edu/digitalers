CREATE TABLE Pedido_Original (
    Pedido_ID INT,
    Fecha DATE,
    Cliente VARCHAR(50),
    DireccionCliente VARCHAR(100),
    ContactosCliente VARCHAR(100),
    Producto VARCHAR(50),
    CategoriaProducto VARCHAR(50),
    Precio DECIMAL(10,2),
    Cantidad INT,
    Vendedor VARCHAR(50),
    ComisionVendedor DECIMAL(4,2)
);

INSERT INTO Pedido_Original VALUES
(1001, '2025-07-10', 'Juan Pérez', 'Av. Siempre Viva 1', '555-1111,555-2222', 'Notebook HP', 'Tecnología', 1000, 1, 'Ana López', 5.0),
(1001, '2025-07-10', 'Juan Pérez', 'Av. Siempre Viva 1', '555-1111,555-2222', 'Impresora Epson', 'Tecnología', 200, 1, 'Ana López', 5.0),
(1002, '2025-07-12', 'María Gómez', 'Calle Luna 123', '444-1234', 'Mesa de Comedor', 'Hogar', 300, 2, 'Luis Torres', 7.0),
(1003, '2025-07-15', 'Carlos Ruiz', 'Av. Sol 555', '333-9876,333-8765,333-7654', 'Notebook HP', 'Tecnología', 1000, 1, 'Luis Torres', 7.0),
(1003, '2025-07-15', 'Carlos Ruiz', 'Av. Sol 555', '333-9876,333-8765,333-7654', 'Silla Oficina', 'Oficina', 120, 4, 'Luis Torres', 7.0);


/*
	1FN: ContactosCliente - guarda mas de 1 valor en la misma columna
	2FN: CategoriaProducto, DireccionCliente, Precio y ComisionVendedor
	Falta PK en Pedido_ID
*/

SELECT * FROM Pedido_Original
SELECT * FROM Clientes
SELECT * FROM ClienteContactos
SELECT * FROM Productos

CREATE TABLE Clientes (
	Id INT IDENTITY NOT NULL,
	Nombre VARCHAR(100) NOT NULL
)

INSERT INTO Clientes (Nombre)
SELECT DISTINCT Cliente
FROM Pedido_Original

CREATE TABLE ClienteContactos (
	ClienteId INT NOT NULL,
	Contacto VARCHAR(100) NOT NULL
)

INSERT INTO ClienteContactos (Contacto)
SELECT TRIM(value)
FROM Pedido_Original
CROSS APPLY STRING_SPLIT(ContactosCliente, ',');

ALTER TABLE Pedido_original
DROP COLUMN ContactosCliente

CREATE TABLE Productos (
	Nombre VARCHAR (100) NOT NULL,
	Categoria VARCHAR (100) NOT NULL
	PRIMARY KEY (Nombre)
)

INSERT INTO Productos 
SELECT DISTINCT Producto, CategoriaProducto
FROM Pedido_Original

ALTER TABLE Pedido_original
DROP COLUMN CategoriaProducto

ALTER TABLE Pedido_Original
ALTER COLUMN Producto VARCHAR(100) NOT NULL

ALTER TABLE Pedido_original
ADD CONSTRAINT FK_Pedido_Product
FOREIGN KEY (Producto) REFERENCES Productos(Nombre);


INSERT INTO Pedido_Original
VALUES (1200, GETDATE(), 'Carlos Ruiz', 'Av. Sol 555', 'Otro producto', 120, 1, 'Luis Torres', 7)

INSERT INTO Productos
VALUES ('Otro producto', 'Otra categoria')


ALTER TABLE Clientes
ADD Ciudad VARCHAR(80) NULL

ALTER TABLE Cliente
DROP COLUMN Ciudad