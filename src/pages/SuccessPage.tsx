import Layout from "../layout/Layout";
import { BsApple, BsTablet } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import DownloadLink from "../components/successpage/DownloadLink";
import { BiLogoPlayStore } from "react-icons/bi";
import { GrAppleAppStore } from "react-icons/gr";
import { SiMicrosoft } from "react-icons/si";

function SuccessPage() {
  return (
    <>
      <Layout>
        <div className="w-8/12 flex flex-col justify-center items-center gap-4 py-4">
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src="https://res.cloudinary.com/de1ryacq0/image/upload/v1682416388/emails/nnkgondt2vizof33wkbv.png"
              alt="logo"
              className="w-52 h mx-auto mb-8"
            />
            <p className="text-xl lg:text-2xl font-meduim text-secondary mb-8 lg:px-8 text-center">
              Votre compte est prêt pour l’utilisation ! veuillez télécharger
              l'application <span className="text-primary">FIAMANE PRO</span> et
              commencer votre activité
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="w-full flex flex-col gap-4">
              <h3 className="text-2xl lg:text-3xl flex gap-2 items-center">
                <BsTablet className="inline-block" />
                Tablette
              </h3>
              <div className="flex flex-col lg:flex-row gap-8">
                <DownloadLink
                  link="https://play.google.com/store/apps/details?id=com.fiaman"
                  icon={<BiLogoPlayStore className="inline-block" />}
                  text="Play store"
                />
                <DownloadLink
                  link="#"
                  icon={<GrAppleAppStore className="inline-block" />}
                  text="App store"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <h3 className="text-2xl lg:text-3xl flex gap-2 items-center">
                <RiComputerLine className="inline-block" />
                PC
              </h3>
              <div className="flex flex-col lg:flex-row gap-8">
                <DownloadLink
                  link="#"
                  icon={<SiMicrosoft className="inline-block" />}
                  text="Windows"
                />
                <DownloadLink
                  link="#"
                  icon={<BsApple className="inline-block" />}
                  text="Mac"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default SuccessPage;
