"use client";

import { Todo} from "@/types";
import Button from "./Button";
import { BiEdit } from "react-icons/bi";
import Form from "./Form";
import Input from "./Input";
import { editTodoAction } from "@/actions";

export default function EditTodo({
  todo,
  editFlag,
  setEditFlag,
}: {
  todo: Todo;
  editFlag: boolean;
  setEditFlag: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function handelEdit() {
    if (!todo.isCompleted) {
      setEditFlag(!editFlag);
    }
  }

  function handleSubmit() {
    setEditFlag(false);
  }

  return (
    <div className="flex items-center gap-5  w-full ">
      <Button text={<BiEdit />} actionButton onClick={handelEdit} />

      {editFlag ? (
        <Form
          action={editTodoAction}
          className="flex gap-5 w-full"
          onSubmit={handleSubmit}
        >
          <Input type="hidden" name="inputId" value={todo.id} />
          <Input
            type="text"
            name="newTitle"
            placeholder="Edit Todo..."
            autofocus
          />
          <Button text="Save" />
        </Form>
      ) : null}
    </div>
  );
}
