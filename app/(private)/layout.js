import '../globals.css'

import Fonts from '@/constants/fonts'
import Provider from '@/redux/provider'
import Navbar from './Parts/Navbar'
import Sidebar from './Parts/Sidebar'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body className={[Fonts.className, "font-montserrat bg-[#F7F8F9]"].join(' ')}>
                <Provider>
                    <div className="flex flex-col min-h-full">
                        <Navbar />
                        <div className="flex flex-1 h-full">
                            <Sidebar />

                            <section className="order-first w-full lg:order-last">
                                <div className="h-full p-4 mr-auto 2xl:container lg:px-10 lg:py-4">
                                    <div className="grid h-full grid-cols-12 gap-4">
                                        {children}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </Provider>
            </body>
        </html >
    )
}
