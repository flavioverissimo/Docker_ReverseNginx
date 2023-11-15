import { createContext } from "react"
import useSWR from "swr"

export const ContextMain = createContext()

const fetcher = (url) => fetch(url).then((res) => res.json())
export const ContextProvider = ({ children }) => {
  const { data, error, isLoading, mutate } = useSWR("/api/getUsers", fetcher)

  return (
    <ContextMain.Provider value={{ swr: { data, error, isLoading, mutate } }}>
      {children}
    </ContextMain.Provider>
  )
}
