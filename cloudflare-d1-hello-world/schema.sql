DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (`id` INT, `company_name` TEXT, `contact_name` TEXT, PRIMARY KEY (`id`));
INSERT INTO `customers` (`id`, `company_name`, `contact_name`) VALUES (1, 'Alfreds Futterkiste', 'Maria Anders'), (4, 'Around the Horn', 'Thomas Hardy'), (11, 'Bs Beverages', 'Victoria Ashworth'), (13, 'Bs Beverages', 'Random Name');
