import ClientForm from "./ClientForm";

export default function ClientPage() {
  return (
    <div className="p-4 m-6 rounded-lg border flex flex-col gap-12">
      <h1>Hello, Client!</h1>

      <section>
        <p>Past Case Submissions:</p>
        <section>
          <div className="flex">
            <p className="font-bold w-50">Case Type:</p>
            <p>---</p>
          </div>
          <div className="flex">
            <p className="font-bold w-50">Date Submit:</p>
            <p>---</p>
          </div>
          <div className="flex">
            <p className="font-bold w-50">Providers Contacted:</p>
            <p>---</p>
          </div>
        </section>
      </section>

      <ClientForm />
    </div>
  );
}
