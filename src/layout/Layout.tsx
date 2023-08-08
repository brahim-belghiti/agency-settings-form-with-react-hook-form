import HeroImage from "../components/HeroImage";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="w-full h-full min-h-screen items-center justify-center lg:grid lg:grid-cols-12">
        <HeroImage />
        <section className="lg:col-span-8 w-full flex flex-col gap-2 justify-center items-center bg-gray-50 h-full min-h-screen">
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
