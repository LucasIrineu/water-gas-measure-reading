import { Router } from 'express';
import { MeasureController } from '../controllers/measure.controller';

const routes = Router();
const measureController = new MeasureController(); // Instanciar uma vez

// Usar o middleware para upload de imagem e a função uploadImage
routes.post('/upload', measureController.uploadImageMiddleware, measureController.uploadImage.bind(measureController));
routes.patch('/confirm', measureController.confirm.bind(measureController)); // Bind para manter o contexto
routes.get('/:customerCode/list', measureController.getByCustomerCode.bind(measureController)); // Bind para manter o contexto

export default routes;