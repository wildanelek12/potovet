import Card from "../../Parts/Card";
import { Chart } from "../../Parts/Chart";

export default function Page() {
    return (
        <>
            <p className="col-span-12 mt-4">Dashboard</p>
            <Card className="col-span-full lg:col-span-3 p-8 h-fit bg-primary/80 text-white border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
                <div className="grid gap-2">
                    <h2 className="text-lg">Total Comments</h2>
                    <p className="text-2xl font-medium">20 Comments</p>
                </div>
            </Card>
            <Card className="col-span-full lg:col-span-3 p-8 h-fit bg-secondary/80 text-white border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
                <div className="grid gap-2">
                    <h2 className="text-lg">Total Like</h2>
                    <p className="text-2xl font-medium">60 Like</p>
                </div>
            </Card>
            <Card className="col-span-full lg:col-span-3 p-8 h-fit  bg-primary/80 text-white  border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
                <div className="grid gap-2">
                    <h2 className="text-lg">Total Project</h2>
                    <p className="text-2xl font-medium">16 Project</p>
                </div>
            </Card>
            <Card className="col-span-full lg:col-span-3 p-8 h-fit  bg-secondary/80 text-white  border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
                <div className="grid gap-2">
                    <h2 className="text-lg">Total Viewer</h2>
                    <p className="text-2xl font-medium">2000 Viewer</p>
                </div>
            </Card>
            <Card className="col-span-full lg:col-span-12 p-8 border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
                <Chart />
            </Card>


        </>
    )
}