CREATE TABLE `portal_files` (
	`id` text PRIMARY KEY NOT NULL,
	`record_id` text NOT NULL,
	`key` text NOT NULL,
	`name` text NOT NULL,
	`mime` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `portal_members` (
	`email` text PRIMARY KEY NOT NULL,
	`role` text NOT NULL,
	`sections` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `portal_messages` (
	`id` text PRIMARY KEY NOT NULL,
	`kind` text NOT NULL,
	`payload` text NOT NULL,
	`created` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `portal_records` (
	`id` text PRIMARY KEY NOT NULL,
	`section` text NOT NULL,
	`payload` text NOT NULL,
	`author` text NOT NULL,
	`created` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `portal_settings` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL
);
