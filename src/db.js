import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const url = 'mongodb+srv://chango:sistemaproductos2023@cluster0.hgxyvlp.mongodb.net/?retryWrites=true&w=majority'
        //await mongoose.connect('mongodb://127.0.0.1/sistema');
        await mongoose.connect(url)
        console.log('base de datos conectada');
    } catch (error) {
        console.log(error);
    }
}