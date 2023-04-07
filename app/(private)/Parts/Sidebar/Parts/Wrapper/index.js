import Item from '../Item'
import { motion } from "framer-motion"
import Divider from '../Divider'
import { useSelector } from 'react-redux'

const Wrapper = ({ children }) => {
    const { isOpen } = useSelector(state => state.sidebar)

    const sidebar = {
        open: {
            right: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        closed: {
            right: "-100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }

    return (
        <motion.aside
            variants={sidebar}
            initial={isOpen ? "open" : "closed"}
            animate={isOpen ? "open" : "closed"}
            className="lg:min-w-[17rem] lg:w-[17rem] w-full h-full lg:static fixed z-50"
        >
            <div className="flex flex-col w-[inherit] lg:fixed lg:left-0 h-full bg-white overflow-hidden shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
                <div className="h-full overflow-auto scrollbar-hide">
                    <div className="flex flex-col gap-4 pt-4 pb-24 lg:pt-5 lg:pb-28">
                        {children}
                    </div>
                </div>
            </div>
        </motion.aside>
    )
}

Wrapper.Item = Item
Wrapper.Divider = Divider

export default Wrapper