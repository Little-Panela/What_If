import { IUser } from '@users/interfaces';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Poll } from '@polls/entities';

@Entity({ name: 'users' })
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column({ name: 'avatar_url' })
  avatarUrl: string;

  @OneToMany(() => Poll, (poll: Poll) => poll.creator)
  createdPolls: Poll[];

  @OneToMany(() => Poll, (poll: Poll) => poll.respondents)
  anwseredPolls: Poll[];

  @Column({ name: 'polls_quantity' })
  pollsQuantity: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'created_at' })
  updatedAt: Date;
}
