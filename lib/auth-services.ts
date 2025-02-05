import { currentUser } from "@clerk/nextjs/server";

export const getSelf = async () => {
  const self = await currentUser();
  if (!self) {
    throw new Error("User not authenticated");
  }
  return self;
};
