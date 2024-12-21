import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send("auth router testing");
});

export default router