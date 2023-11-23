// app.ts (ou app.js)

import express from 'express';
import lanceRouter from './src/routes/LanceRoute';
import leilaoRouter from './src/routes/LeilaoRoute';
import usuarioRouter from './src/routes/UsuarioRoute';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar dados JSON nas requisições
app.use(express.json());

// Roteadores
app.use('/api', lanceRouter);
app.use('/api', leilaoRouter);
app.use('/api', usuarioRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});