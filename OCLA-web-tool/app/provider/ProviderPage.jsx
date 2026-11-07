import ProviderForm from "./ProviderForm";

export default function ProviderPage() {
  return (
    <section className="p-4 m-6 rounded-lg border flex flex-col gap-12">
      <h1>Hello, Provider!</h1>

      <section>
        <p>Saved Information:</p>
        <section>
          <div className="flex">
            <p className="font-bold w-50">Supported Case Types:</p>
            <p>---</p>
          </div>
          <div className="flex">
            <p className="font-bold w-50">Primary Counties:</p>
            <p>---</p>
          </div>
          <div className="flex">
            <p className="font-bold w-50">Secondary Counties:</p>
            <p>---</p>
          </div>
        </section>
      </section>

      <ProviderForm />
    </section>
  );
}
