import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('song Routes Testing');
})

export default router