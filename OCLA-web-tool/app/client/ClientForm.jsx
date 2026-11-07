import counties from "../constants/counties.json";

export default function ClientForm() {
  const sendEmail = (event) => {
    event.preventDefault();
    const form = document.getElementById("client-form");

    // Form validation
    function validateMessage() {
      if (form && (!form.type.value || !form.county.value)) {
        alert(
          "Please fill out all required information before sending your message.",
        );
        return false;
      }
      return true;
    }

    if (validateMessage()) {
      try {
        // TODO: send message
        alert("Form submit successfully");
        console.log("SUCCESS");
        form.reset();
      } catch (error) {
        console.error("FAILED", error);
        alert("Something seems to have gone wrong. Please try again.");
      }
    }
  };

  return (
    <div>
      New Client Information
      <form
        id="client-form"
        onSubmit={sendEmail}
        className="flex flex-col p-6 gap-6 w-120"
      >
        <label htmlFor="type" className="flex">
          <p className="w-60">Case Type:</p>
          <select name="type" required>
            <option value="" className="text-gray-700">
              Choose One
            </option>
            <option value="transfer" className="font-bold">
              Transfer
            </option>
            <option value="discharge" className="font-bold">
              Discharge
            </option>
            <option value="abuse" className="font-bold">
              Abuse
            </option>
            <option value="other" className="font-bold">
              Other
            </option>
          </select>
        </label>

        <label htmlFor="county" className="flex">
          <p className="w-60">County of Residence:</p>
          <select name="county" required>
            <option value="" className="text-gray-700">
              Choose One
            </option>
            {counties.map((c) => (
              <option key={c} value={c} className="font-bold">
                {c}
              </option>
            ))}
          </select>
        </label>

        <input
          type="submit"
          value="submit"
          className="w-full p-2 rounded-lg border uppercase"
        />
      </form>
    </div>
  );
}
