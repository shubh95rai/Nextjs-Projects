import { addTodoAction } from "@/actions";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";

export default function AddTodo() {
  return (
    <Form action={addTodoAction} className=" w-3/4 max-w-md">
      <div className="flex items-center gap-2">
        <Input type="text" placeholder="Add todo..." name="input" />
        <Button text="Add" />
      </div>
    </Form>
  );
}
