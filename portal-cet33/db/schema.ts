import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const settings=sqliteTable('portal_settings',{key:text('key').primaryKey(),value:text('value').notNull()});
export const members=sqliteTable('portal_members',{email:text('email').primaryKey(),role:text('role').notNull(),sections:text('sections').notNull()});
export const records=sqliteTable('portal_records',{id:text('id').primaryKey(),section:text('section').notNull(),payload:text('payload').notNull(),author:text('author').notNull(),created:text('created').notNull()});
export const files=sqliteTable('portal_files',{id:text('id').primaryKey(),recordId:text('record_id').notNull(),key:text('key').notNull(),name:text('name').notNull(),mime:text('mime').notNull()});
export const messages=sqliteTable('portal_messages',{id:text('id').primaryKey(),kind:text('kind').notNull(),payload:text('payload').notNull(),created:text('created').notNull()});
