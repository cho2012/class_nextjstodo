import axios from "axios";

export const removeTodoFatch = async ({ id }: { id: number }) => {
  // http://localhost:8000/getTodos

  const token = localStorage.getItem("qid");
  if (token) {
    const response = await axios.delete(
      "http://localhost:8000/removeTodo",

      {
        data: { id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
};
