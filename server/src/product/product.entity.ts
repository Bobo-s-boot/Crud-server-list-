import { Category } from 'src/category/category.entity';
import { Photo } from 'src/photo/photo.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column({ nullable: true })
  description?: string;

  @OneToOne(() => Photo, { nullable: true })
  @JoinColumn()
  photo?: Photo;

  @ManyToOne(() => Category, (category) => category.product)
  @JoinColumn()
  category: Category;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
