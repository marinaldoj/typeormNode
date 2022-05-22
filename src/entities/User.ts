import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn,
} from 'typeorm'

@Entity('users')
export class User{

  @PrimaryGeneratedColumn()
  id:number;

  @Column()  
  name: string;

  @Column({
    default: true
  })
  active: boolean;
  
  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}