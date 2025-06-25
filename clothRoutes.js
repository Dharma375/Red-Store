import express from 'express';
import {
    createCloth,
    getAllClothes,
    getClothById,
    updateCloth,
    deleteCloth
} from '../controllers/ClothController.js';

const router = express.Router();

router.post('/', createCloth);
router.get('/', getAllClothes);
router.get('/:id', getClothById);
router.put('/:id', updateCloth);
router.delete('/:id', deleteCloth);

export default router;
