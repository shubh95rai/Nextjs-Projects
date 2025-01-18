import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import { changeStatusAction } from "@/actions";
import {  TodoType } from "@/types";

export default function ChangeTodo({ todo }: TodoType) {
  return (
    <Form action={changeStatusAction}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button text={<AiOutlineCheckCircle />} actionButton />
    </Form>
  );
}
