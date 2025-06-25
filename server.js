import express from 'express';
import clothRoutes from './routes/clothRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());



// Routes
app.use('/api/clothes', clothRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
