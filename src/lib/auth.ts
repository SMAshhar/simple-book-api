import { verify } from "jsonwebtoken";

export const verifyAuth = async (token: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users`, {
      method: "GET",
      body: JSON.stringify({ token }),
    });

    const user = await response.json()
    
    return user
  } catch (err) {
    throw new Error("Your token has expired");
  }
};
