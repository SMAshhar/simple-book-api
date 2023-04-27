export async function verifyAuth(token: string, host: string) {
  try {

    const response = await fetch(`http://${host}/api/users`, {
      method: "POST",
      body: JSON.stringify({ token }),
    });


    const user = response.json();

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
}