export default function LoginPage({setSignupOpen, setLoginOpen}) {
  const login = (event) => {
    event.preventDefault();
    const form = document.getElementById("login-form");

    // Form validation
    function validateMessage() {
      if (form && !form.id.value) {
        alert(
          "Please fill out all required information before sending your message.",
        );
        return false;
      }
      // TODO: check if user ID is valid
      return true;
    }

    if (validateMessage()) {
      try {
        alert("Log in successful");
        console.log("SUCCESS");
        form.reset();
        // TODO: redirect to appropriate home page
      } catch (error) {
        console.error("FAILED", error);
        alert("Something seems to have gone wrong. Please try again.");
      }
    }
  };

  return (
    <section className="p-4 m-6 rounded-lg border flex flex-col gap-12">
      <section>
        <h1>Welcome Back!</h1>
        <div>
          Existing User Log In
          <form
            id="login-form"
            onSubmit={login}
            className="flex flex-col p-6 gap-6 w-120"
          >
            <div>
            <label htmlFor="id" className="flex">
              <p className="w-60 font-bold mb-2">Input your User ID below:</p>
            </label>
            <input type="text" name="id" id="id" className="border w-full"/>
            </div>

            <input
              type="submit"
              value="log in"
              className="w-full p-2 rounded-lg border uppercase"
            />
          </form>
        </div>
      </section>

      <p className="text-sm">Dont have an account? <button className="font-bold" onClick={() => {setSignupOpen(true); setLoginOpen(false)}}>Sign Up Here!</button></p>
    </section>
  );
}
