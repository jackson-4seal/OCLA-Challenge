export default function LoginPage({setSignupOpen, setLoginOpen, setClientOpen, setProviderOpen}) {
  const login = (event) => {
    event.preventDefault();
    const form = document.getElementById("login-form");

    // Form validation
    function validateMessage() {
      if (form && (!form.user.value || ! form.pass.value)) {
        alert(
          "Please fill out all required information before sending your message.",
        );
        return false;
      }
      // TODO: check if username and password exist
      return true;
    }

    if (validateMessage()) {
      try {
        alert("Log in successful");
        console.log("SUCCESS");
        form.reset();
        setSignupOpen(false);
        // ___ == "Client" ? setClientOpen(true) : setProviderOpen(true);
        // TODO: redirect to appropriate home page instead of both
        setClientOpen(true);
        setProviderOpen(true);
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
            <label htmlFor="user" className="flex">
              <p className="w-60 font-bold mb-2">Username:</p>
            </label>
            <input type="text" name="user" id="user" className="border w-full"/>
            </div>
            <div>
            <label htmlFor="pass" className="flex">
              <p className="w-60 font-bold mb-2">Password:</p>
            </label>
            <input type="text" name="pass" id="pass" className="border w-full"/>
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
