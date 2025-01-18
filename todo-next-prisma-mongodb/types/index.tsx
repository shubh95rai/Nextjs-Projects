export interface TodoType {
  todo: {
    id: string;
    title: string | null;
    isCompleted: boolean;
    createdAt: Date;
  };
}

export interface Todo {
  id: string;
  title: string | null;
  isCompleted: boolean;
  createdAt: Date;
}
