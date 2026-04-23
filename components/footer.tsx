import { APP_NAME } from "@/lib/constants";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-1 border-white/30 bg-[#e76f51]">
      <div className="p-4 flex justify-end text-white">
        {currentYear} {APP_NAME} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
