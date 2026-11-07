import counties from "../constants/counties.json";
import { useState } from "react";

export default function ClientForm() {
  const [formOpen, setFormOpen] = useState(false);

  const updateInfo = (event) => {
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

    async function passSubmit() {
      const response = await fetch("/api/client/find-matches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          county: form.county.value,
          caseType: form.type.value,
        })
      });

      const attorneys = await response.json();
      console.log(attorneys);
    }

    

    if (validateMessage()) {
      try {
        // TODO: send message
        passSubmit();

        alert("Form submit successfully");
        console.log("SUCCESS");
        form.reset();
        setFormOpen(false);
      } catch (error) {
        console.error("FAILED", error);
        alert("Something seems to have gone wrong. Please try again.");
      }
    }
  };

  return (
    <section>
      {!formOpen && (
        <button
          type="button"
          className="w-120 p-2 rounded-lg border uppercase text-center"
          onClick={() => setFormOpen(true)}
        >
          Submit a New Case Application
        </button>
      )}

      {formOpen && (
        <div>
          New Client Information
          <form
            id="client-form"
            onSubmit={updateInfo}
            className="flex flex-col p-6 gap-6 w-120"
          >
            <label htmlFor="type" className="flex">
              <p className="w-60 font-bold">Case Type:</p>
              <select name="type" required>
                <option value="" className="text-gray-700">
                  Choose One
                </option>
                <option value="TRANSFER" className="font-bold">
                  Transfer
                </option>
                <option value="DISCHARGE" className="font-bold">
                  Discharge
                </option>
                <option value="NEGLECT" className="font-bold">
                  Abuse
                </option>
                <option value="other" className="font-bold">
                  Other
                </option>
              </select>
            </label>

            <label htmlFor="county" className="flex">
              <p className="w-60 font-bold">County of Residence:</p>
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
      )}
    </section>
  );
}
