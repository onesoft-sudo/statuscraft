import { links } from "@/config/links";
import LinkItem from "./LinkItem";

const Links = () => {
    return (
        <ul className="list-none flex items-center gap-4 place-self-center">
            {links.map((link) => (
                <LinkItem key={link.name} item={link} />
            ))}
        </ul>
    );
};

export default Links;
