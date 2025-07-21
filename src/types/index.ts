export interface User {
  id: string;
  email: string;
  username: string;
  displayName?: string;
  avatarUrl?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Question {
  id: string;
  content: string;
  answer?: string;
  isAnswered: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user?: User;
}

export interface CreateQuestionData {
  content: string;
  userId: string;
}

export interface AnswerQuestionData {
  id: string;
  answer: string;
}
