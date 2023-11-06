import Footer from "@/components/Footer"
import HeadDefault from "@/components/Head"
import Header from "@/components/Header"
import Tables from "@/components/Tables"
import { ContextProvider } from "@/utils/context"

export default function Home() {
  return (
    <>
      <ContextProvider>
        <HeadDefault title={"Nginx reverse"} />
        <Header />
        <Tables />
        <Footer />
      </ContextProvider>
    </>
  )
}
