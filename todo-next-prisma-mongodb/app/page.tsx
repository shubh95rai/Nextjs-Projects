import { getTodosAction } from "@/actions";
import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todo";

export default async function Home() {
  const todos = await getTodosAction();
  // console.log(todos);
  return (
    <main className="flex flex-col items-center gap-5 py-20">
      <h1 className="text-3xl font-extrabold uppercase">
        Todo
        <span className="ml-2 text-orange-700">App</span>
      </h1>
      <div className="flex max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl w-full flex-col items-center justify-center">
        <AddTodo />
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-5">
          {todos?.map((todo, id) => (
            <div key={id} className="w-full">
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
