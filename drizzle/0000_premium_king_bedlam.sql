CREATE TABLE `books` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`author` varchar(255) NOT NULL,
	`published_year` int NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `books_id` PRIMARY KEY(`id`)
);
