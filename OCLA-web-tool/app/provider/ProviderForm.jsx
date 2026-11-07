import counties from "../constants/counties.json";
import { useState } from "react";

export default function ProviderForm() {
  const [formOpen, setFormOpen] = useState(false);

  const updateInfo = (event) => {
    event.preventDefault();
    const form = document.getElementById("provider-form");

    // Form validation
    function validateMessage() {
      if (
        form &&
        (!form.type.value ||
          !form.primarycounty.value ||
          form.name.value ||
          form.addr.value)
      ) {
        alert(
          "Please fill out all required information before sending your message.",
        );
        return false;
      }
      return true;
    }

    async function passSubmit() {
      const response = await fetch("/api/provider/find-matches", {
        method: "SET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: {
            value: form.name.value,
          },
          location: {
            value: form.addr.value,
          },
          caseType: {
            value: form.type.value,
          },
          capacity: {
            value: form.cap.value,
          }
        }),
      });

      const providers = await response.json();
      console.log(providers);
    }

    if (validateMessage()) {
      try {
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
          Update Provider Information
        </button>
      )}

      {formOpen && (
        <div>
          <p>New Provider Information</p>
          <form
            id="provider-form"
            onSubmit={updateInfo}
            className="flex flex-col p-6 gap-6 w-120"
          >
            <div>
              <label htmlFor="name" className="flex">
                <p className="w-60 font-bold mb-2">Provider Name:</p>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border w-full"
              />
            </div>

            <div>
              <label htmlFor="addr" className="flex">
                <p className="w-60 font-bold mb-2">Address:</p>
              </label>
              <input
                type="text"
                name="addr"
                id="addr"
                className="border w-full"
              />
            </div>

            <label htmlFor="type" className="flex">
              <p className="w-60 font-bold">Supported Case Types:</p>
              <select name="type" multiple={true} required>
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

            <label htmlFor="primarycounty" className="flex">
              <p className="w-60 font-bold">Primary County Coverages:</p>
              <select
                name="primarycounty"
                multiple={true}
                className="h-30"
                required
              >
                {counties.map((c) => (
                  <option key={c} value={c} className="font-bold">
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="secondarycounty" className="flex">
              <p className="w-60 font-bold">Secondary County Coverages:</p>
              <select name="secondarycounty" multiple={true} className="h-30">
                {counties.map((c) => (
                  <option key={c} value={c} className="font-bold">
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="cap" className="flex">
              <p className="w-60 font-bold mb-2">Montly Capacity:</p>
              <input
                type="number"
                min="0"
                name="cap"
                id="cap"
                className="border w-full"
              />
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
