import Form from "./components/Form";
import HeroImage from "./components/HeroImage";

function Home() {
  return (
    <main className="w-full h-full min-h-screen flex items-center justify-center">
      <section className="flex-1">
        <HeroImage />
      </section>
      <section className="flex-1 flex flex-col justify-center items-center">
        <img
          src="https://res.cloudinary.com/de1ryacq0/image/upload/v1682416388/emails/nnkgondt2vizof33wkbv.png"
          alt="logo"
          className="w-40 h mx-auto mb-8"
        />
        <p>Configurez votre compte</p>
        <Form />
      </section>
    </main>
  );
}

export default Home;
