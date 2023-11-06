import { useContext } from "react"
import { ContextMain } from "@/utils/context"

export default function Users() {
  const { swr } = useContext(ContextMain)

  const deleteUser = async (e) => {
    await fetch("/api/deleteUser", {
      method: "POST",
      body: JSON.stringify({ id: e.target.value }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
    swr.mutate(swr.data)
  }

  return (
    <table className="text-white text-sm text-left bg-[#303030] rounded-2xl h-fit">
      <thead className="text-xs uppercase text-[#FFCD00]">
        <tr>
          <th className="px-6 py-3">ID</th>
          <th className="px-6 py-3">NAME</th>
          <th className="px-6 py-3">ACTION</th>
        </tr>
      </thead>
      <tbody className="">
        {!swr?.isLoading &&
          !swr?.error &&
          swr?.data.people.length !== 0 &&
          swr.data.people.map((usr) => {
            return (
              <tr key={usr.id} className=" text-white">
                <th className="px-6 py-4 font-medium">{usr.id}</th>
                <td className="px-6 py-4">{usr.name}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={deleteUser}
                    value={usr.id}
                    className="text-red-600 border border-red-600 px-3 py-1 rounded-xl"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}
