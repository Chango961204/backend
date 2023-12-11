import Products from '../models/products.models.js';

//funcion para obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await Products.find({ user: req.user.id })
            .populate('user');

        if (!products) return res.status(404).json('No hay productos');
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: ['Error al obtener los productos'] });
    }
};

//funcion para crear un nuevo producto
export const createProduct = async (req, res) => {
    try {
        const { name, price, year } = req.body;
        const newProduct = new Products({
            name,
            price,
            year,
            user: req.user.id
        });
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: ['Error al crear un producto'] });
    }
};

//funcion para obtener un producto
export const getProduct = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id)
                                      .populate('user');
        if (!product)
            return res.status(404).json({ message: ['Producto no encontrado'] });
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: ['Error al obtener el producto'] });
    }
};
//funcion para eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        const product = await Products.findByIdAndDelete(req.params.id);
        if (!product)
            return res.status(404).json({ message: ['Producto no encontrado'] });
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: ['Error al eliminar el producto'] });
    };
};
//funcion para editar un producto
export const editProduct = async (req, res) => {
    try {
        const product = await Products.findByIdAndUpdate(req.params.id, req.body);
        if (!product)
            return res.status(404).json({ message: ['Producto no encontrado'] });
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: ['Error al actualizar el producto'] });
    }
};


