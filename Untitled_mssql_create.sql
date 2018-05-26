CREATE TABLE [list_hall] (
	id integer IDENTITY(1,1) NOT NULL,
	name varchar(50) NOT NULL,
	type varchar(10) NOT NULL,
	price_min integer NOT NULL,
	max_num_table integer NOT NULL,
	status varchar(20) NOT NULL,
	created_add datetime,
	updated_add datetime,
  CONSTRAINT [PK_LIST_HALL] PRIMARY KEY CLUSTERED
  (
  [id] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [order] (
	id integer IDENTITY(1,1) NOT NULL,
	hall integer NOT NULL,
	session varchar(20) NOT NULL,
	date datetime NOT NULL,
	status varchar(10) NOT NULL,
	male varchar(50) NOT NULL,
	female varchar(50) NOT NULL,
	phone_number varchar(50) NOT NULL,
	table_extra integer NOT NULL,
	quantity_table integer NOT NULL,
	created_add datetime,
	updated_add datetime,
  CONSTRAINT [PK_ORDER] PRIMARY KEY CLUSTERED
  (
  [id] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [order_food] (
	order_id integer NOT NULL,
	food_id integer NOT NULL,
	quantity integer NOT NULL,
	created_add datetime,
	updated_add datetime,
  CONSTRAINT [PK_ORDER_FOOD] PRIMARY KEY CLUSTERED
  (
  [order_id] ASC,
  [food_id] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [food] (
	id integer IDENTITY(1,1) NOT NULL,
	name varchar(50) NOT NULL,
	price integer NOT NULL,
	calculation_unit varchar(50) NOT NULL,
	created_add datetime,
	updated_add datetime,
  CONSTRAINT [PK_FOOD] PRIMARY KEY CLUSTERED
  (
  [id] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [order_service] (
	order_id integer NOT NULL,
	service_id integer NOT NULL,
	quantity integer NOT NULL,
	created_add datetime,
	updated_add datetime,
  CONSTRAINT [PK_ORDER_SERVICE] PRIMARY KEY CLUSTERED
  (
  [order_id] ASC,
  [service_id] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [service] (
	id integer IDENTITY(1,1) NOT NULL,
	name varchar(50) NOT NULL,
	price integer NOT NULL,
	calculation_unit varchar(50) NOT NULL,
	created_add datetime,
	updated_add datetime,
  CONSTRAINT [PK_SERVICE] PRIMARY KEY CLUSTERED
  (
  [id] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [order_other] (
	id integer IDENTITY(1,1) NOT NULL,
	order_id integer NOT NULL,
	description varchar(100) NOT NULL,
	price integer NOT NULL,
	calculation_unit varchar(50) NOT NULL,
	created_add datetime,
	updated_add datetime,
  CONSTRAINT [PK_ORDER_OTHER] PRIMARY KEY CLUSTERED
  (
  [id] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [payment_bill] (
	id integer IDENTITY(1,1) NOT NULL,
	order_id integer NOT NULL,
	payment_date datetime NOT NULL,
	created_add datetime,
	updated_add datetime,
  CONSTRAINT [PK_PAYMENT_BILL] PRIMARY KEY CLUSTERED
  (
  [id] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [user] (
	id integer IDENTITY(1,1) NOT NULL,
	user_name varchar(50) NOT NULL,
	password varchar(50) NOT NULL,
	created_add datetime,
	updated_add datetime,
  CONSTRAINT [PK_USER] PRIMARY KEY CLUSTERED
  (
  [id] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO

ALTER TABLE [order] WITH CHECK ADD CONSTRAINT [order_fk0] FOREIGN KEY ([hall]) REFERENCES [list_hall]([id])
ON UPDATE CASCADE
GO
ALTER TABLE [order] CHECK CONSTRAINT [order_fk0]
GO

ALTER TABLE [order_food] WITH CHECK ADD CONSTRAINT [order_food_fk0] FOREIGN KEY ([order_id]) REFERENCES [order]([id])
ON UPDATE CASCADE
GO
ALTER TABLE [order_food] CHECK CONSTRAINT [order_food_fk0]
GO
ALTER TABLE [order_food] WITH CHECK ADD CONSTRAINT [order_food_fk1] FOREIGN KEY ([food_id]) REFERENCES [food]([id])
ON UPDATE CASCADE
GO
ALTER TABLE [order_food] CHECK CONSTRAINT [order_food_fk1]
GO


ALTER TABLE [order_service] WITH CHECK ADD CONSTRAINT [order_service_fk0] FOREIGN KEY ([order_id]) REFERENCES [order]([id])
ON UPDATE CASCADE
GO
ALTER TABLE [order_service] CHECK CONSTRAINT [order_service_fk0]
GO
ALTER TABLE [order_service] WITH CHECK ADD CONSTRAINT [order_service_fk1] FOREIGN KEY ([service_id]) REFERENCES [service]([id])
ON UPDATE CASCADE
GO
ALTER TABLE [order_service] CHECK CONSTRAINT [order_service_fk1]
GO


ALTER TABLE [order_other] WITH CHECK ADD CONSTRAINT [order_other_fk0] FOREIGN KEY ([order_id]) REFERENCES [order]([id])
ON UPDATE CASCADE
GO
ALTER TABLE [order_other] CHECK CONSTRAINT [order_other_fk0]
GO

ALTER TABLE [payment_bill] WITH CHECK ADD CONSTRAINT [payment_bill_fk0] FOREIGN KEY ([order_id]) REFERENCES [order]([id])
ON UPDATE CASCADE
GO
ALTER TABLE [payment_bill] CHECK CONSTRAINT [payment_bill_fk0]
GO


