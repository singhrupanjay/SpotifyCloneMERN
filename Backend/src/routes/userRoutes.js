import { Router } from "express"; //importing router from express

const router = Router(); //initialising router

router.get('/', (req, res) => {
    res.send("user route testing with get method");
});

export default router