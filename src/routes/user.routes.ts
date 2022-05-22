import { Router } from "express";
import { 
  createUser,
  showUser,
  updateUser,
  deleteUser
} from "../controllers/user.controller";

const router = Router();

router.get('/user', showUser);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;