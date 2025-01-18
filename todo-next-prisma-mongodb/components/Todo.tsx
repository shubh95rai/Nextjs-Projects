"use client";

import { TodoType } from "@/types";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import { useState } from "react";

export default function Todo({ todo }: TodoType) {
  const [editFlag, setEditFlag] = useState(false);

  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div
      className="flex h-16 w-full items-center justify-between gap-5 rounded-md bg-white md:px-20 px-10 py-3"
      style={todoStyle}
    >
      <ChangeTodo todo={todo} />

      {!editFlag && (
        <p className="w-full text-center font-bold uppercase">{todo.title}</p>
      )}

      <div className={`flex items-center gap-5 ${editFlag ? "w-full" : ""}`}>
        <EditTodo todo={todo} editFlag={editFlag} setEditFlag={setEditFlag} />

        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
}
