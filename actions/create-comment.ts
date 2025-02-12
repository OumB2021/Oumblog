"use server";

export const createComment = async (formData: FormData) => {
  const comment = formData.get("comment");
  console.log(comment);
};
