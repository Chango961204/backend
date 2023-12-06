import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getProducts, createProduct, getProduct, deleteProduct, editProduct } from '../controllers/products.controller.js';
import {validateSchema} from "../middlewares/validator.middleware.js";
import { productSchema } from '../schemas/product.schemas.js';

const router = Router();

//obtener todos los productos
router.get('/productos', authRequired, getProducts);

//agregar producto
router.post('/productos', authRequired, createProduct);

//obtener un producto por id
router.get('/productos/:id', authRequired, getProduct);

//eliminar un producto
router.delete('/productos/:id', authRequired, deleteProduct);

//actualizar producto
router.put('/productos/:id', authRequired, editProduct);

export default router; 