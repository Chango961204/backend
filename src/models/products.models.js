import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            default: 0.0,
            required: true
        },
        year: {
            type: Number,
            default: 2023,
            required: true
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }, {
    timestamps: true
}
); //fin productSchema

export default mongoose.model('Products', productsSchema);