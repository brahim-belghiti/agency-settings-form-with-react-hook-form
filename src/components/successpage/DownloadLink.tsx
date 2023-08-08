import React from "react";

type DownloadLinkProps = {
  link: string;
  text: string;
  icon: string | React.ReactNode;
};

function DownloadLink({ link, text, icon }: DownloadLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="border-2 border-primary bg-white px-10 py-2 flex justify-center items-center gap-2 rounded-xl w-80
      text-xl font-medium text-secondary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
    >
      {text} {icon}
    </a>
  );
}

export default DownloadLink;
