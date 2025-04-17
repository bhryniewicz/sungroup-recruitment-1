import { FacebookIcon, TwitterIcon, LinkedinIcon } from "@/assets/icons";
import { ListItem } from "../ui/list-item";
import { Icon } from "../ui/icon";
import { Title } from "../ui/title";

export const Footer = () => {
  const icons = [FacebookIcon, TwitterIcon, LinkedinIcon];

  return (
    <footer className="px-6 md:px-x-axis-layout py-10 bg-primary-light">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Title size={"sm"}>SunPage</Title>
        <nav>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-12 text-gray text-sm font-medium font-inter">
            <ListItem>O nas</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Kontakt</ListItem>
          </ul>
        </nav>
      </div>
      <div className="w-full h-[1px] bg-[#dee1e6] my-10" />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <nav>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-12 text-sm font-medium font-inter">
            <ListItem>© Copyrights 2021 Sungroup</ListItem>
            <ListItem>Polityka prywatności</ListItem>
            <ListItem>Regulamin</ListItem>
          </ul>
        </nav>
        <div className="flex gap-5">
          {icons.map((icon, index) => (
            <Icon icon={icon} key={index} />
          ))}
        </div>
      </div>
    </footer>
  );
};
