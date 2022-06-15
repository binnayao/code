interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "1",
  completed: true,
};
