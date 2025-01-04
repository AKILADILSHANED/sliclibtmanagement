export const validateLogin = async (email, password) => {
  try {
    const response = await fetch("http://localhost:3000/Api/login", {
      method: "POST",
      body: JSON.stringify({
        headers: {
          "Content-Type": "application/json",
        },
        email: email,
        password: password,
      }),
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData.Message;
    } else {
      alert("Unexpected error occurred");
    }
  } catch (error) {
    alert(error);
  }
};
