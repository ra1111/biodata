import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Blog post model
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  coverImage: varchar("cover_image", { length: 255 }).notNull().default(''),
  publishedAt: timestamp("published_at").defaultNow().notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  authorImage: varchar("author_image", { length: 255 }).notNull().default(''),
  readTime: varchar("read_time", { length: 50 }).notNull(),
  tags: text("tags").array().notNull().default([]),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
