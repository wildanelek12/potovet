import Card from "../../Parts/Card";
import { Chart } from "../../Parts/Chart";

export default function Page() {
    return (
        <>
            <Card className="col-span-full lg:col-span-8 p-8 border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
                <Chart />
            </Card>

            <Card className="col-span-full lg:col-span-4 p-8 h-fit border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
                <div className="grid gap-2">
                    <h2 className="text-lg">Lorem Ipsum</h2>
                    <p className="text-2xl font-medium">Rp 5.123.456</p>
                </div>
            </Card>
        </>
    )
}