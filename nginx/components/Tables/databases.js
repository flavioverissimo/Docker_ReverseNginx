import { useContext } from "react"
import { ContextMain } from "@/utils/context"

export default function Databases() {
  const { swr } = useContext(ContextMain)

  return (
    <div>
      {!swr?.isLoading && !swr?.error && (
        <table className="w-full  h-5/6 text-sm text-left text-gray-500 bg-[#303030] rounded-2xl">
          <thead className="text-xs uppercase text-[#FFCD00]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Databases
              </th>
            </tr>
          </thead>
          <tbody>
            {swr?.data?.db.length !== 0 &&
              swr?.data?.db.map((db) => {
                return (
                  <tr key={db.Database} className=" text-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap"
                    >
                      {db.Database}
                    </th>
                  </tr>
                )
              })}
          </tbody>
        </table>
      )}
    </div>
  )
}
