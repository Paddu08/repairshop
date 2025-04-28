import { Header } from "@/components/Header"


export default async function RSlayout({children,}:{children:React.ReactNode}) {

    return (
        <div className="mx-auto w-full max-w-7xl">
            <Header/>
            <div>
                {children}
            </div>
        </div>
    )
    
}