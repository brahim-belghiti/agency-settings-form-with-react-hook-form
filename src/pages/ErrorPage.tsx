import Layout from "../layout/Layout";

function ErrorPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xl lg:text-3xl">🤖 Une erreur est survenue,</p>
          <p className="text-xl lg:text-3xl">la page que vous cherchez n'existe pas</p>
        </div>
        <a
          href="/"
          className="text-primary font-semibold border border-primary rounded-md px-4 py-2 hover:bg-primary hover:text-white transition duration-300 ease-in-out"
        >
          Retour à l'accueil
        </a>
      </div>
    </Layout>
  );
}

export default ErrorPage;
