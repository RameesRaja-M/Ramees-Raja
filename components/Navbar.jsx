import Link from "next/link";

// Next Hooks
import { usePathname } from "next/navigation";

// Framer-Motion
import { motion } from "framer-motion";

// Navbar Links
const links = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'My Projects' },
    { path: '/contact', name: 'Contact' },
];

const Navbar = ({ containerStyles, linkStyles, UnderlineStyles }) => {
    const path = usePathname();

    return <nav className={`${containerStyles}`}>
        {links.map((link, index) => {
            return <Link href={link.path} key={index} className={`capitaize ${linkStyles}`}>
                {link.path === path && (
                    <motion.span
                        initial={{ y: '-100' }}
                        animatte={{ y: 0 }}
                        transition={{ type: 'tween' }}
                        layoutId="underline"
                        className={`${UnderlineStyles}`}
                    />
                )}
                {link.name}</Link>
        })}
    </nav>
}

export default Navbar