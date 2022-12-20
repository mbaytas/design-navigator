import { AnimatePresence, motion } from "framer-motion";

export default function SecretButton(props) {
  return (
    <AnimatePresence>
      <motion.button
        key={props.id}
        className="flex flex-col items-center justify-center p-3 rounded-lg hover:opacity-100 hover:bg-white/10 transition-[opacity,background-color] cursor-pointer"
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.1 }}
      >
        {props.children}
      </motion.button>
    </AnimatePresence>
  );
}
