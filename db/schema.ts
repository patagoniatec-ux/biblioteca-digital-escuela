import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const subjects = sqliteTable('subjects', {id:text('id').primaryKey(),name:text('name').notNull(),cycle:text('cycle').notNull(),years:text('years').notNull()});
export const resources = sqliteTable('resources',{id:text('id').primaryKey(),subjectId:text('subject_id').notNull(),title:text('title').notNull(),description:text('description').notNull(),kind:text('kind').notNull(),url:text('url').notNull(),fileKey:text('file_key'),fileName:text('file_name'),mime:text('mime'),size:integer('size'),author:text('author').notNull(),createdAt:text('created_at').notNull()});
export const members=sqliteTable('members',{email:text('email').primaryKey(),role:text('role').notNull()});
export const settings=sqliteTable('settings',{key:text('key').primaryKey(),value:text('value').notNull()});
