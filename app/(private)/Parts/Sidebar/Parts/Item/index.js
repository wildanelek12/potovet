import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../../../Card";

export default function Item({ id, label, href }) {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(pathname?.slice(1)?.split("/")[1] === id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname?.slice(1).split("/")[1]]);

  const content = (
    <div className={["relative flex flex-row justify-items-center items-center py-4 px-10 gap-3 select-none cursor-pointer"].join(" ")}>
      <h3 className={[" z-10 text-xs transition-all", active ? "font-semibold text-white" : "font-normal"].join(" ")}>{label}</h3>
      {active && (
        <motion.div className={["absolute flex items-center justify-center w-full h-full right-0"].join(" ")}>
          <Card className="bg-[#3cbec7] mx-6 w-full h-full border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)] rounded-xl"></Card>
        </motion.div>
      )}
    </div>
  );

  return <>{href && !active ? <Link href={href}>{content}</Link> : <>{content}</>}</>;
}
