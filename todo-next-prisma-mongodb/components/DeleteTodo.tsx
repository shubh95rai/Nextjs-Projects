import { TodoType } from "@/types";
import Form from "./Form";
import { deleteTodoAction } from "@/actions";
import Input from "./Input";
import Button from "./Button";
import { BsFillTrashFill } from "react-icons/bs";

export default function DeleteTodo({ todo }: TodoType) {
  return (
    <Form action={deleteTodoAction}>
      <Input type="hidden" value={todo.id} name="inputId" />
      <Button text={<BsFillTrashFill />} actionButton />
    </Form>
  );
}
