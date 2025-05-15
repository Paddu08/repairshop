import { Header } from "@/components/Header"
import { Toaster } from "@/components/ui/toaster"


export default async function RSlayout({children,}:{children:React.ReactNode}) {

    return (
        <div className="mx-auto w-full max-w-7xl">
            <Header/>
            <div>
                {children}
            </div>
            <Toaster/>
        </div>
    )
    
}