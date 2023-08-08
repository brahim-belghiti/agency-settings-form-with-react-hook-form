import Layout from "../layout/Layout";
import Form from "../components/Form";

function Home() {
  return (
    <>
      <Layout>
        <img
          src="https://res.cloudinary.com/de1ryacq0/image/upload/v1682416388/emails/nnkgondt2vizof33wkbv.png"
          alt="logo"
          className="w-52 h mx-auto mb-8"
        />
        <p className="text-2xl font-semibold text-secondary mb-8">
          Configurez votre compte
        </p>
        <Form />
      </Layout>
    </>
  );
}

export default Home;
