import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from 'nodemailer';
import contactRouter from './routes/contact';

export async function registerRoutes(app: Express): Promise<Server> {
  // Registrar la ruta de contacto
  app.use(contactRouter);

  const httpServer = createServer(app);
  return httpServer;
}