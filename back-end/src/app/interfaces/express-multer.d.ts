import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      file?: Express.Multer.File; // Adiciona a propriedade `file` ao Request
    }
  }
}