export default function SignupPage({setSignupOpen, setLoginOpen, setClientOpen, setProviderOpen}) {
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const signup = (event) => {
    event.preventDefault();
    const form = document.getElementById("signup-form");

    // Form validation
    function validateMessage() {
      if (
        form &&
        (!form.role.value ||
          !form.user.value ||
          !form.pass.value ||
          !form.confirmpass.value)
      ) {
        alert(
          "Please fill out all required information before sending your message.",
        );
        return false;
      }
      if (!passRegex.test(form.pass.value)) {
        alert("Password does not meet all requirements.");
        return false;
      }
      if (form.pass.value !== form.confirmpass.value) {
        alert("Passwords do not match.");
        return false;
      }
      return true;
    }

    if (validateMessage()) {
      try {
        // TODO: send message
        alert("Account created successfully");
        console.log("SUCCESS");
        form.reset();
        setSignupOpen(false);
        setLoginOpen(false);
        form.role.value == "Client" ? setClientOpen(true) : setProviderOpen(true);
      } catch (error) {
        console.error("FAILED", error);
        alert("Something seems to have gone wrong. Please try again.");
      }
    }
  };

  return (
    <section className="p-4 m-6 rounded-lg border flex flex-col gap-12">
        <section>
          <h1>Welcome!</h1>
          <div>
            New User Sign Up
            <form
              id="signup-form"
              onSubmit={signup}
              className="flex flex-col p-6 gap-6 w-120"
            >
              <label htmlFor="role" className="flex">
                <p className="w-60 font-bold">Who are you:</p>
                <select name="role" required>
                  <option value="" className="text-gray-700">
                    Choose One
                  </option>
                  <option value="provider" className="font-bold">
                    Provider
                  </option>
                  <option value="client" className="font-bold">
                    Client
                  </option>
                </select>
              </label>

              <div>
                <label htmlFor="user" className="flex">
                  <p className="w-60 font-bold mb-2">Create your Username:</p>
                </label>
                <input
                  type="text"
                  name="user"
                  id="user"
                  className="border w-full"
                />
              </div>

              <div>
                <label htmlFor="pass" className="flex">
                  <div>
                    <p className="w-60 font-bold mb-2">Enter your password:</p>
                    <p>Password must contain:</p>
                    <ul className="ml-8 mb-4 list-disc">
                      <li>At least 8 characters</li>
                      <li>At least one lowercase and one uppercase letter</li>
                      <li>At least one number</li>
                      <li>
                        At least one special character from: @ $ ! % * ? &
                      </li>
                    </ul>
                  </div>
                </label>
                <input
                  type="text"
                  name="pass"
                  id="pass"
                  className="border w-full"
                />
              </div>

              <div>
                <label htmlFor="confirmpass" className="flex">
                  <p className="w-60 font-bold mb-2">Confirm password:</p>
                </label>
                <input
                  type="text"
                  name="confirmpass"
                  id="confirmpass"
                  className="border w-full"
                />
              </div>

              <input
                type="submit"
                value="Sign Up"
                className="w-full p-2 rounded-lg border uppercase"
              />
            </form>
          </div>
        </section>

        <p className="text-sm">Already have an account? <button className="font-bold" onClick={() => {setSignupOpen(false); setLoginOpen(true)}}>Log In Here!</button></p>
    </section>
  );
}
