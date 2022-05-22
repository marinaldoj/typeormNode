import {Request, Response} from 'express';
import { AppDataSource } from '../database/dbConnection';
import { User } from '../entities/User';

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = new User;

  user.name = name;
  user.email = email;
  await AppDataSource.getRepository(User).save(user);
  res.json(user);
}

export const showUser = async (req: Request, res: Response) => {
  const user = await AppDataSource.getRepository(User).find()
  res.json(user);
}

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const {name, email} = req.body;
  const user = await AppDataSource.getRepository(User).findOneBy({id: id});
  user.name = name;
  user.email = email
  await AppDataSource.getRepository(User).save(user);
  res.json(user);
}

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  await AppDataSource.getRepository(User).delete({id: id});
  res.json({message: 'Usuário deletado com sucesso!'});
}