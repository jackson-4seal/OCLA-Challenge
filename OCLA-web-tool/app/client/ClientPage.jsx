import ClientForm from "./ClientForm";

export default function ClientPage() {
  return (
    <section className="p-4 m-6 rounded-lg border flex flex-col gap-12">
      <h1>Hello, Client!</h1>

      <section>
        <p>Past Case Submissions:</p>
        <section>
          <div className="flex">
            <p className="font-bold w-50">Case ID:</p>
            <p>---</p>
          </div>
          <div className="flex">
            <p className="font-bold w-50">Case Type:</p>
            <p>---</p>
          </div>
          <div className="flex">
            <p className="font-bold w-50">Date Submitted:</p>
            <p>---</p>
          </div>
          <div className="flex">
            <p className="font-bold w-50">Providers Contacted:</p>
            <p>---</p>
          </div>
          <div className="flex">
            <p className="font-bold w-50">Status:</p>
            <p>---</p>
          </div>
        </section>
      </section>

      <ClientForm />
    </section>
  );
}
