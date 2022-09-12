import { Poll } from '@polls/entities';
import { IAnwser, IQuestion } from '@questions/interfaces';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'questions' })
export class Question implements IQuestion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @Column()
  anwsers: IAnwser[];

  @ManyToOne(() => Poll, (poll: Poll) => poll.questions)
  poll: Poll;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'created_at' })
  updatedAt: Date;
}
