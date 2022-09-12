import { IPoll } from '@polls/interfaces';
import { User } from '@users/entities';
import { Question } from '@questions/entities'

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'polls' })
export class Poll implements IPoll {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => User, (user: User) => user.createdPolls)
  creator: User;

  @OneToMany(() => Question, (question: Question) => question.poll)
  questions: Question[];

  @OneToMany(() => User, (user: User) => user.anwseredPolls)
  respondents: User[];

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'created_at', type: 'timestamp' })
  updatedAt: Date;
}
