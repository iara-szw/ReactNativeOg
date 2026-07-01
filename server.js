const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 3000;

const secretKey = 'clavesecretajiju';

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {

    const { username, password } = req.body;


    if (username === 'admin' && password === '123456') {

        const payload = {
            username: username,
            role: 'user'
        };

        const token = jwt.sign(payload, secretKey, {
            expiresIn: '1h'
        });

        return res.json({
            message: 'Login exitoso',
            token
        });

    }

    return res.status(401).json({
        message: 'Usuario o contraseña incorrectos'
    });

});

const verifyToken = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: 'Token requerido'
        });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, secretKey, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                message: 'Token inválido'
            });
        }

        req.user = decoded;
        next();

    });

};

app.get('/protected', verifyToken, (req, res) => {

    res.json({
        message: 'Bienvenido a la ruta protegida',
        usuario: req.user
    });

});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});