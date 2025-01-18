"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function addTodoAction(formData: FormData) {
  try {
    const input = formData.get("input") as string;

    if (!input) {
      return;
    }

    await prisma.todo.create({
      data: {
        title: input.trim(),
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function getTodosAction() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return todos;
  } catch (error) {
    console.log(error);
  }
}

export async function changeStatusAction(formData: FormData) {
  try {
    const inputId = formData.get("inputId") as string;

    const todo = await prisma.todo.findUnique({
      where: {
        id: inputId,
      },
    });

    const updatedStatus = !todo?.isCompleted;

    await prisma.todo.update({
      where: {
        id: inputId,
      },
      data: {
        isCompleted: updatedStatus,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function editTodoAction(formData: FormData) {
  try {
    const newTitle = formData.get("newTitle") as string;
    const inputId = formData.get("inputId") as string;

    await prisma.todo.update({
      where: {
        id: inputId,
      },
      data: {
        title: newTitle,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodoAction(formData: FormData) {
  try {
    const inputId = formData.get("inputId") as string;

    await prisma.todo.delete({
      where: {
        id: inputId,
      },
    });

    revalidatePath("/")
  } catch (error) {
    console.log(error);
  }
}
