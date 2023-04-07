export default function Divider({ className }) {
    return (
        <div className={["mx-8 h-[1px] bg-[#E3E8F2] my-3", className].join(' ')}></div>
    )
}