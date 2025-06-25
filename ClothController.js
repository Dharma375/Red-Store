import Cloth from '../models/Cloth.js';

// Create
export const createCloth = async (req, res) => {
    try {
        const cloth = await Cloth.create(req.body);
        res.status(201).json(cloth);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Read All
export const getAllClothes = async (req, res) => {
    try {
        const clothes = await Cloth.find();
        res.status(200).json(clothes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Read One
export const getClothById = async (req, res) => {
    try {
        const cloth = await Cloth.findById(req.params.id);
        if (!cloth) return res.status(404).json({ error: 'Cloth not found' });
        res.status(200).json(cloth);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update
export const updateCloth = async (req, res) => {
    try {
        const updated = await Cloth.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ error: 'Cloth not found' });
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete
export const deleteCloth = async (req, res) => {
    try {
        const deleted = await Cloth.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Cloth not found' });
        res.status(200).json({ message: 'Cloth deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
