import mongoose from 'mongoose';

const clothSchema = new mongoose.Schema({
    name: { type: String, required: true },
    size: { type: String, enum: ['S', 'M', 'L', 'XL'], required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true }
}, { timestamps: true });

const Cloth = mongoose.model('Cloth', clothSchema);
export default Cloth;
