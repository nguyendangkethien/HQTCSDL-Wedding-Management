USE [tieccuoi]
GO
/****** Object:  Trigger [updated_user]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[updated_user]
GO
/****** Object:  Trigger [created_user]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[created_user]
GO
/****** Object:  Trigger [updated_service]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[updated_service]
GO
/****** Object:  Trigger [created_service]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[created_service]
GO
/****** Object:  Trigger [check_price_service]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[check_price_service]
GO
/****** Object:  Trigger [updated_payment_bill]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[updated_payment_bill]
GO
/****** Object:  Trigger [created_payment_bill]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[created_payment_bill]
GO
/****** Object:  Trigger [updated_order_service]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[updated_order_service]
GO
/****** Object:  Trigger [created_order_service]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[created_order_service]
GO
/****** Object:  Trigger [check_quantity_order_service]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[check_quantity_order_service]
GO
/****** Object:  Trigger [updated_order_other]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[updated_order_other]
GO
/****** Object:  Trigger [created_order_other]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[created_order_other]
GO
/****** Object:  Trigger [check_price_order_other]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[check_price_order_other]
GO
/****** Object:  Trigger [updated_order_food]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[updated_order_food]
GO
/****** Object:  Trigger [created_order_food]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[created_order_food]
GO
/****** Object:  Trigger [check_quantity_order_food]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[check_quantity_order_food]
GO
/****** Object:  Trigger [updated_order]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[updated_order]
GO
/****** Object:  Trigger [created_order]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[created_order]
GO
/****** Object:  Trigger [check_table_extra_and_quantity_table_food]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[check_table_extra_and_quantity_table_food]
GO
/****** Object:  Trigger [updated_list_hall]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[updated_list_hall]
GO
/****** Object:  Trigger [created_list_hall]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[created_list_hall]
GO
/****** Object:  Trigger [check_price_and_table_min_food]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[check_price_and_table_min_food]
GO
/****** Object:  Trigger [updated_food]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[updated_food]
GO
/****** Object:  Trigger [created_food]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[created_food]
GO
/****** Object:  Trigger [check_price_food]    Script Date: 26/5/2018 13:06:59 ******/
DROP TRIGGER [dbo].[check_price_food]
GO
/****** Object:  StoredProcedure [dbo].[select_order_service_by_orderID]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[select_order_service_by_orderID]
GO
/****** Object:  StoredProcedure [dbo].[select_order_other_by_orderID]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[select_order_other_by_orderID]
GO
/****** Object:  StoredProcedure [dbo].[select_order_food_by_orderID]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[select_order_food_by_orderID]
GO
/****** Object:  StoredProcedure [dbo].[select_order_by_id]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[select_order_by_id]
GO
/****** Object:  StoredProcedure [dbo].[select_list_order]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[select_list_order]
GO
/****** Object:  StoredProcedure [dbo].[select_list_hall_by_id]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[select_list_hall_by_id]
GO
/****** Object:  StoredProcedure [dbo].[select_food_by_id]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[select_food_by_id]
GO
/****** Object:  StoredProcedure [dbo].[select_all_list_hall]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[select_all_list_hall]
GO
/****** Object:  StoredProcedure [dbo].[select_all_food]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[select_all_food]
GO
/****** Object:  StoredProcedure [dbo].[inster_user]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[inster_user]
GO
/****** Object:  StoredProcedure [dbo].[inster_service]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[inster_service]
GO
/****** Object:  StoredProcedure [dbo].[inster_payment_bill]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[inster_payment_bill]
GO
/****** Object:  StoredProcedure [dbo].[inster_order_other]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[inster_order_other]
GO
/****** Object:  StoredProcedure [dbo].[insert_order_sevice]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[insert_order_sevice]
GO
/****** Object:  StoredProcedure [dbo].[insert_order_food]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[insert_order_food]
GO
/****** Object:  StoredProcedure [dbo].[insert_order]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[insert_order]
GO
/****** Object:  StoredProcedure [dbo].[insert_list_hall]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[insert_list_hall]
GO
/****** Object:  StoredProcedure [dbo].[insert_food]    Script Date: 26/5/2018 13:06:59 ******/
DROP PROCEDURE [dbo].[insert_food]
GO
ALTER TABLE [dbo].[payment_bill] DROP CONSTRAINT [payment_bill_fk0]
GO
ALTER TABLE [dbo].[order_service] DROP CONSTRAINT [order_service_fk1]
GO
ALTER TABLE [dbo].[order_service] DROP CONSTRAINT [order_service_fk0]
GO
ALTER TABLE [dbo].[order_other] DROP CONSTRAINT [order_other_fk0]
GO
ALTER TABLE [dbo].[order_food] DROP CONSTRAINT [order_food_fk1]
GO
ALTER TABLE [dbo].[order_food] DROP CONSTRAINT [order_food_fk0]
GO
ALTER TABLE [dbo].[order] DROP CONSTRAINT [order_fk0]
GO
/****** Object:  Table [dbo].[user]    Script Date: 26/5/2018 13:06:59 ******/
DROP TABLE [dbo].[user]
GO
/****** Object:  Table [dbo].[service]    Script Date: 26/5/2018 13:06:59 ******/
DROP TABLE [dbo].[service]
GO
/****** Object:  Table [dbo].[payment_bill]    Script Date: 26/5/2018 13:06:59 ******/
DROP TABLE [dbo].[payment_bill]
GO
/****** Object:  Table [dbo].[order_service]    Script Date: 26/5/2018 13:06:59 ******/
DROP TABLE [dbo].[order_service]
GO
/****** Object:  Table [dbo].[order_other]    Script Date: 26/5/2018 13:06:59 ******/
DROP TABLE [dbo].[order_other]
GO
/****** Object:  Table [dbo].[order_food]    Script Date: 26/5/2018 13:06:59 ******/
DROP TABLE [dbo].[order_food]
GO
/****** Object:  Table [dbo].[order]    Script Date: 26/5/2018 13:06:59 ******/
DROP TABLE [dbo].[order]
GO
/****** Object:  Table [dbo].[list_hall]    Script Date: 26/5/2018 13:06:59 ******/
DROP TABLE [dbo].[list_hall]
GO
/****** Object:  Table [dbo].[food]    Script Date: 26/5/2018 13:06:59 ******/
DROP TABLE [dbo].[food]
GO
USE [master]
GO
/****** Object:  Database [tieccuoi]    Script Date: 26/5/2018 13:06:59 ******/
DROP DATABASE [tieccuoi]
GO
/****** Object:  Database [tieccuoi]    Script Date: 26/5/2018 13:06:59 ******/
CREATE DATABASE [tieccuoi]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'tieccuoi', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\tieccuoi.mdf' , SIZE = 3264KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'tieccuoi_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\tieccuoi_log.ldf' , SIZE = 832KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [tieccuoi] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [tieccuoi].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [tieccuoi] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [tieccuoi] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [tieccuoi] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [tieccuoi] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [tieccuoi] SET ARITHABORT OFF 
GO
ALTER DATABASE [tieccuoi] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [tieccuoi] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [tieccuoi] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [tieccuoi] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [tieccuoi] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [tieccuoi] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [tieccuoi] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [tieccuoi] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [tieccuoi] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [tieccuoi] SET  ENABLE_BROKER 
GO
ALTER DATABASE [tieccuoi] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [tieccuoi] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [tieccuoi] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [tieccuoi] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [tieccuoi] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [tieccuoi] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [tieccuoi] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [tieccuoi] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [tieccuoi] SET  MULTI_USER 
GO
ALTER DATABASE [tieccuoi] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [tieccuoi] SET DB_CHAINING OFF 
GO
ALTER DATABASE [tieccuoi] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [tieccuoi] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [tieccuoi] SET DELAYED_DURABILITY = DISABLED 
GO
USE [tieccuoi]
GO
/****** Object:  Table [dbo].[food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[food](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[price] [int] NOT NULL,
	[calculation_unit] [varchar](50) NOT NULL,
	[created_add] [datetime] NULL,
	[updated_add] [datetime] NULL,
 CONSTRAINT [PK_FOOD] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[list_hall]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[list_hall](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[type] [varchar](10) NOT NULL,
	[price_min] [int] NOT NULL,
	[max_num_table] [int] NOT NULL,
	[status] [varchar](50) NULL,
	[created_add] [datetime] NULL,
	[updated_add] [datetime] NULL,
 CONSTRAINT [PK_LIST_HALL] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[order]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[order](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[hall] [int] NOT NULL,
	[session] [varchar](20) NOT NULL,
	[date] [datetime] NOT NULL,
	[status] [varchar](10) NOT NULL,
	[male] [varchar](50) NOT NULL,
	[female] [varchar](50) NOT NULL,
	[phone_number] [varchar](50) NOT NULL,
	[table_extra] [int] NOT NULL,
	[quantity_table] [int] NOT NULL,
	[created_add] [datetime] NULL,
	[updated_add] [datetime] NULL,
 CONSTRAINT [PK_ORDER] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[order_food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order_food](
	[order_id] [int] NOT NULL,
	[food_id] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[created_add] [datetime] NULL,
	[updated_add] [datetime] NULL,
 CONSTRAINT [PK_ORDER_FOOD] PRIMARY KEY CLUSTERED 
(
	[order_id] ASC,
	[food_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[order_other]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[order_other](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[order_id] [int] NOT NULL,
	[description] [varchar](100) NOT NULL,
	[price] [int] NOT NULL,
	[calculation_unit] [varchar](50) NOT NULL,
	[created_add] [datetime] NULL,
	[updated_add] [datetime] NULL,
 CONSTRAINT [PK_ORDER_OTHER] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[order_service]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order_service](
	[order_id] [int] NOT NULL,
	[service_id] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[created_add] [datetime] NULL,
	[updated_add] [datetime] NULL,
 CONSTRAINT [PK_ORDER_SERVICE] PRIMARY KEY CLUSTERED 
(
	[order_id] ASC,
	[service_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[payment_bill]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[payment_bill](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[order_id] [int] NOT NULL,
	[payment_date] [datetime] NOT NULL,
	[created_add] [datetime] NULL,
	[updated_add] [datetime] NULL,
 CONSTRAINT [PK_PAYMENT_BILL] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[service]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[service](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[price] [int] NOT NULL,
	[calculation_unit] [varchar](50) NOT NULL,
	[created_add] [datetime] NULL,
	[updated_add] [datetime] NULL,
 CONSTRAINT [PK_SERVICE] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[user]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[user](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_name] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL,
	[created_add] [datetime] NULL,
	[updated_add] [datetime] NULL,
 CONSTRAINT [PK_USER] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[order]  WITH CHECK ADD  CONSTRAINT [order_fk0] FOREIGN KEY([hall])
REFERENCES [dbo].[list_hall] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[order] CHECK CONSTRAINT [order_fk0]
GO
ALTER TABLE [dbo].[order_food]  WITH CHECK ADD  CONSTRAINT [order_food_fk0] FOREIGN KEY([order_id])
REFERENCES [dbo].[order] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[order_food] CHECK CONSTRAINT [order_food_fk0]
GO
ALTER TABLE [dbo].[order_food]  WITH CHECK ADD  CONSTRAINT [order_food_fk1] FOREIGN KEY([food_id])
REFERENCES [dbo].[food] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[order_food] CHECK CONSTRAINT [order_food_fk1]
GO
ALTER TABLE [dbo].[order_other]  WITH CHECK ADD  CONSTRAINT [order_other_fk0] FOREIGN KEY([order_id])
REFERENCES [dbo].[order] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[order_other] CHECK CONSTRAINT [order_other_fk0]
GO
ALTER TABLE [dbo].[order_service]  WITH CHECK ADD  CONSTRAINT [order_service_fk0] FOREIGN KEY([order_id])
REFERENCES [dbo].[order] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[order_service] CHECK CONSTRAINT [order_service_fk0]
GO
ALTER TABLE [dbo].[order_service]  WITH CHECK ADD  CONSTRAINT [order_service_fk1] FOREIGN KEY([service_id])
REFERENCES [dbo].[service] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[order_service] CHECK CONSTRAINT [order_service_fk1]
GO
ALTER TABLE [dbo].[payment_bill]  WITH CHECK ADD  CONSTRAINT [payment_bill_fk0] FOREIGN KEY([order_id])
REFERENCES [dbo].[order] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[payment_bill] CHECK CONSTRAINT [payment_bill_fk0]
GO
/****** Object:  StoredProcedure [dbo].[insert_food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[insert_food]
@name varchar(50),
@price int,
@calculation_unit varchar(50)
as
begin
insert into food (name, price, calculation_unit)
values (@name, @price, @calculation_unit)
SELECT id FROM food WHERE id = SCOPE_IDENTITY();
end
GO
/****** Object:  StoredProcedure [dbo].[insert_list_hall]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[insert_list_hall]
@name varchar(50),
@type varchar(50),
@price_min int,
@max_num_table int,
@status varchar(50)
as
begin
insert into list_hall(name, type, price_min, max_num_table, status)
values (@name, @type, @price_min, @max_num_table, @status)
SELECT id FROM list_hall WHERE id = SCOPE_IDENTITY();
end



GO
/****** Object:  StoredProcedure [dbo].[insert_order]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[insert_order]
@hall int,
@session varchar(50),
@date datetime,
@status varchar(10),
@male varchar(50),
@female varchar(50),
@phone_number varchar(50),
@table_extra int,
@quantity_table int
as
begin
insert into [order]( hall, session, date, status, male, female, phone_number, table_extra, quantity_table)
values (@hall, @session, @date, @status, @male, @female, @phone_number, @table_extra, @quantity_table)
SELECT id FROM [order] WHERE id = SCOPE_IDENTITY()
end
GO
/****** Object:  StoredProcedure [dbo].[insert_order_food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[insert_order_food]
@order_id int,
@foof_id int,
@quantity int
as
begin
insert into order_food(order_id, food_id, quantity)
values (@order_id, @foof_id, @quantity)
end
GO
/****** Object:  StoredProcedure [dbo].[insert_order_sevice]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[insert_order_sevice]
@order_id int,
@service_id int,
@quantity int
as
begin
insert into order_service(order_id, service_id, quantity)
values (@order_id, @service_id, @quantity)
end
GO
/****** Object:  StoredProcedure [dbo].[inster_order_other]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[inster_order_other]
@order_id int,
@description varchar(50),
@price int,
@calculation_unit varchar(50)
as
begin
insert into order_other(order_id, description, price, calculation_unit)
values (@order_id, @description, @price, @calculation_unit)
SELECT id FROM order_other WHERE id = SCOPE_IDENTITY();
end
GO
/****** Object:  StoredProcedure [dbo].[inster_payment_bill]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[inster_payment_bill]
@order_id int,
@payment_date datetime
as
begin
insert into payment_bill(order_id, payment_date)
values (@order_id, @payment_date)
SELECT id FROM payment_bill WHERE id = SCOPE_IDENTITY();
end
GO
/****** Object:  StoredProcedure [dbo].[inster_service]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[inster_service]
@name varchar(50),
@price int,
@calculation_unit varchar(50)
as
begin
insert into [service](name, price, calculation_unit)
values (@name, @price, @calculation_unit)
SELECT id FROM [service] WHERE id = SCOPE_IDENTITY();
end
GO
/****** Object:  StoredProcedure [dbo].[inster_user]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[inster_user]
@user_name varchar(50),
@password varchar(50)
as
begin
insert into [user](user_name, password)
values (@user_name, @password)
SELECT id FROM [user] WHERE id = SCOPE_IDENTITY();
end
GO
/****** Object:  StoredProcedure [dbo].[select_all_food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[select_all_food]
as
begin
select * from food
end

GO
/****** Object:  StoredProcedure [dbo].[select_all_list_hall]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[select_all_list_hall]
as
begin
select id, name, type, max_num_table, price_min, status, created_add, updated_add from list_hall
end;
GO
/****** Object:  StoredProcedure [dbo].[select_food_by_id]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[select_food_by_id]
@id int 
as
begin
select * from food where id = @id
end
GO
/****** Object:  StoredProcedure [dbo].[select_list_hall_by_id]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[select_list_hall_by_id]
@id int 
as
begin
select id, name, type, max_num_table, price_min, status, created_add, updated_add 
from list_hall 
where id = @id
end
GO
/****** Object:  StoredProcedure [dbo].[select_list_order]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[select_list_order]
as
begin
select o.male, o.female, h.name, CONVERT(date, o.date), convert(time(0),o.date), o.	quantity_table
from list_hall h, [order] o
where h.id = o.hall
	and YEAR(o.date) >= YEAR(GETDATE()) 
	and MONTH(o.date) >= MONTH(GETDATE())
	and DAY(o.date) >= DAY(GETDATE()) 
end;
GO
/****** Object:  StoredProcedure [dbo].[select_order_by_id]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[select_order_by_id]
@id int
as
begin
select o.male, o.female, o.phone_number, o.date, o.session, h.name, o.quantity_table, o.table_extra
from [order] o, list_hall h
where o.id = @id
	and o.hall = h.id
end
GO
/****** Object:  StoredProcedure [dbo].[select_order_food_by_orderID]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[select_order_food_by_orderID]
@id int
as
begin
select f.name, f.price
from [order] o, order_food [of], food f
where o.id = [of].order_id
	and [of].food_id = f.id
	and o.id = @id
end
GO
/****** Object:  StoredProcedure [dbo].[select_order_other_by_orderID]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[select_order_other_by_orderID]
@id int
as
begin
select oo.description, oo.price
from [order] o, order_other [oo]
where o.id = [oo].order_id
	and o.id = @id
end
GO
/****** Object:  StoredProcedure [dbo].[select_order_service_by_orderID]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[select_order_service_by_orderID]
@id int
as
begin
select s.name, os.quantity, s.price
from [order] o, order_service [os], service s
where o.id = [os].order_id
	and [os].service_id = s.id
	and o.id = @id
end
GO
/****** Object:  Trigger [dbo].[check_price_food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE trigger [dbo].[check_price_food]
on [dbo].[food]
for insert, update
as
begin

declare @price int
select @price = price
from inserted

if @price < 0
begin
RAISERROR ('Cannot Insert where price < 0',-1,-1);
rollback;
end

end
GO
/****** Object:  Trigger [dbo].[created_food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[created_food]
on [dbo].[food]
after insert
as
begin
update food 
set created_add = GETDATE()
from inserted
where inserted.id = food.id
end
GO
/****** Object:  Trigger [dbo].[updated_food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE trigger [dbo].[updated_food]
on[dbo].[food]
after update
as
begin
if (UPDATE(updated_add))
return
else
update food 
set updated_add = GETDATE()
from inserted
where inserted.id = food.id
end
GO
/****** Object:  Trigger [dbo].[check_price_and_table_min_food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[check_price_and_table_min_food]
on [dbo].[list_hall]
for insert, update
as
begin

declare @price int
declare @table int
select @price = price_min, @table = max_num_table
from inserted

if @price < 0 or @table < 0
begin
RAISERROR ('Cannot Insert where price min or max table < 0',-1,-1);
rollback;
end

end
GO
/****** Object:  Trigger [dbo].[created_list_hall]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[created_list_hall]
on [dbo].[list_hall]
after insert
as
begin
update list_hall 
set created_add = GETDATE()
from inserted
where inserted.id = list_hall.id
end

GO
/****** Object:  Trigger [dbo].[updated_list_hall]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[updated_list_hall]
on[dbo].[list_hall]
after update
as
begin
if (UPDATE(updated_add))
return
else
update list_hall 
set updated_add = GETDATE()
from inserted
where inserted.id = list_hall.id
end

GO
/****** Object:  Trigger [dbo].[check_table_extra_and_quantity_table_food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[check_table_extra_and_quantity_table_food]
on [dbo].[order]
for insert, update
as
begin

declare @table_extra int
declare @quantity_table int
select @table_extra = table_extra, @quantity_table = quantity_table
from inserted

if @table_extra < 0 or @quantity_table < 0
begin
RAISERROR ('Cannot Insert where table extra or quantity table < 0',-1,-1);
rollback;
end

end
GO
/****** Object:  Trigger [dbo].[created_order]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[created_order]
on [dbo].[order]
after insert
as
begin
update [order]
set created_add = GETDATE()
from inserted
where inserted.id = [order].id
end

GO
/****** Object:  Trigger [dbo].[updated_order]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[updated_order]
on[dbo].[order]
after update
as
begin
if (UPDATE(updated_add))
return
else
update [order] 
set updated_add = GETDATE()
from inserted
where inserted.id = [order].id
end

GO
/****** Object:  Trigger [dbo].[check_quantity_order_food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE trigger [dbo].[check_quantity_order_food]
on [dbo].[order_food]
for insert, update
as
begin

declare @quantity int
select @quantity = quantity
from inserted

if @quantity < 0
begin
RAISERROR ('Cannot Insert where quantity < 0',-1,-1);
rollback;
end

end;
GO
/****** Object:  Trigger [dbo].[created_order_food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[created_order_food]
on [dbo].[order_food]
after insert
as
begin
update order_food
set created_add = GETDATE()
from inserted
where inserted.order_id = order_food.order_id
	AND inserted.food_id = order_food.food_id
end

GO
/****** Object:  Trigger [dbo].[updated_order_food]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[updated_order_food]
on [dbo].[order_food]
after update
as
begin
if (UPDATE(updated_add))
return
else
update order_food 
set updated_add = GETDATE()
from inserted
where inserted.order_id = order_food.order_id
	AND inserted.food_id = order_food.food_id
end

GO
/****** Object:  Trigger [dbo].[check_price_order_other]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE trigger [dbo].[check_price_order_other]
on [dbo].[order_other]
for insert, update
as
begin

declare @price int
select @price = price
from inserted

if @price < 0
begin
RAISERROR ('Cannot Insert where price < 0',-1,-1);
rollback;
end

end
GO
/****** Object:  Trigger [dbo].[created_order_other]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[created_order_other]
on [dbo].[order_other]
after insert
as
begin
update order_other
set created_add = GETDATE()
from inserted
where inserted.id = order_other.id
end

GO
/****** Object:  Trigger [dbo].[updated_order_other]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[updated_order_other]
on [dbo].[order_other]
after update
as
begin
if (UPDATE(updated_add))
return
else
update order_other 
set updated_add = GETDATE()
from inserted
where inserted.id = order_other.id
end

GO
/****** Object:  Trigger [dbo].[check_quantity_order_service]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE trigger [dbo].[check_quantity_order_service]
on [dbo].[order_service]
for insert, update
as
begin

declare @quantity int
select @quantity = quantity
from inserted

if @quantity < 0
begin
RAISERROR ('Cannot Insert where quantity < 0',-1,-1);
rollback;
end

end;
GO
/****** Object:  Trigger [dbo].[created_order_service]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[created_order_service]
on [dbo].[order_service]
after insert
as
begin
update order_service
set created_add = GETDATE()
from inserted
where inserted.order_id = order_service.order_id
	AND inserted.service_id = order_service.service_id
end

GO
/****** Object:  Trigger [dbo].[updated_order_service]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[updated_order_service]
on [dbo].[order_service]
after update
as
begin
if (UPDATE(updated_add))
return
else
update order_service 
set updated_add = GETDATE()
from inserted
where inserted.order_id = order_service.order_id
	AND inserted.service_id = order_service.service_id
end

GO
/****** Object:  Trigger [dbo].[created_payment_bill]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[created_payment_bill]
on [dbo].[payment_bill]
after insert
as
begin
update payment_bill
set created_add = GETDATE()
from inserted
where inserted.id = payment_bill.id
end

GO
/****** Object:  Trigger [dbo].[updated_payment_bill]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[updated_payment_bill]
on [dbo].[payment_bill]
after update
as
begin
if (UPDATE(updated_add))
return
else
update payment_bill 
set updated_add = GETDATE()
from inserted
where inserted.id = payment_bill.id
end

GO
/****** Object:  Trigger [dbo].[check_price_service]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE trigger [dbo].[check_price_service]
on [dbo].[service]
for insert, update
as
begin

declare @price int
select @price = price
from inserted

if @price < 0
begin
RAISERROR ('Cannot Insert where price < 0',-1,-1);
rollback;
end

end
GO
/****** Object:  Trigger [dbo].[created_service]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[created_service]
on [dbo].[service]
after insert
as
begin
update [service]
set created_add = GETDATE()
from inserted
where inserted.id = [service].id
end

GO
/****** Object:  Trigger [dbo].[updated_service]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[updated_service]
on [dbo].[service]
after update
as
begin
if (UPDATE(updated_add))
return
else
update [service] 
set updated_add = GETDATE()
from inserted
where inserted.id = [service].id
end

GO
/****** Object:  Trigger [dbo].[created_user]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[created_user]
on [dbo].[user]
after insert
as
begin
update [user]
set created_add = GETDATE()
from inserted
where inserted.id = [user].id
end

GO
/****** Object:  Trigger [dbo].[updated_user]    Script Date: 26/5/2018 13:06:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create trigger [dbo].[updated_user]
on [dbo].[user]
after update
as
begin
if (UPDATE(updated_add))
return
else
update [user] 
set updated_add = GETDATE()
from inserted
where inserted.id = [user].id
end

GO
USE [master]
GO
ALTER DATABASE [tieccuoi] SET  READ_WRITE 
GO
