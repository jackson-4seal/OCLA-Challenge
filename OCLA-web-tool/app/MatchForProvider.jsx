export default function MatchForProvider() {
  const decline = (event) => {
    event.preventDefault();
    const form = document.getElementById("decline");

    // Form validation
    function validateMessage() {
      if (form && !form.reason.value) {
        alert(
          "Please select a reason.",
        );
        return false;
      }
      return true;
    }

    if (validateMessage()) {
      try {
        // TODO: send message
        alert("Match declined successfully");
        console.log("SUCCESS");
        form.reset();
      } catch (error) {
        console.error("FAILED", error);
        alert("Something seems to have gone wrong. Please try again.");
      }
    }
  };

  return (
    <section className="bg-gray-200 w-full p-4 rounded-lg border my-2">
      <p>
        <span className="font-bold mr-4">Case Type:</span>---
      </p>

      <div className="flex gap-6 mt-4">
        <button className="rounded-full py-1 px-6 bg-teal-300">Accept</button>
        <button type="submit" className="rounded-full py-1 px-6 bg-red-300 flex flex-nowrap items-center" onClick={decline}>
          Decline
          <form
            id="decline"
            
            className="pl-6"
          >
            <label htmlFor="reason" className="flex flex-nowrap">
              <p className="font-bold mr-2">Reason:</p>
              <select name="reason" required>
                <option value="" className="text-gray-700">
                  Choose One
                </option>
                <option value="transfer" className="font-bold">
                  Conflict
                </option>
                <option value="discharge" className="font-bold">
                  Not Available
                </option>
                <option value="abuse" className="font-bold">
                  Case Already Accepted
                </option>
                <option value="other" className="font-bold">
                  Other
                </option>
              </select>
            </label>
          </form>
        </button>
      </div>
    </section>
  );
}
