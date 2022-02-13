import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('pages/index', { message: 'Hello World!' });
});

export default router;