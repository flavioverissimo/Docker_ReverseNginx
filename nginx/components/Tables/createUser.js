import { useState } from "react"
import { useContext } from "react"
import { ContextMain } from "@/utils/context"

export default function CreateUser() {
  const [name, setName] = useState("")
  const { swr } = useContext(ContextMain)

  const createUser = async () => {
    const response = await fetch("/api/newUser", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
    setName("")
    swr.mutate(swr.data)
  }

  return (
    <div className="flex items-center gap-6 py-8 justify-end">
      <div className="flex items-center gap-6">
        <label className=" text-white font-bold text-2xl">
          Create new user
        </label>
        <input
          className="rounded xl py-2 px-4 bg-[#303030] placeholder-[#0c0c0c] text-[#FFCD00] outline-none"
          type="text"
          placeholder="flavio verissimo"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button
        onClick={createUser}
        className="text-black font-bold bg-[#FFCD00] px-6 py-2 rounded-xl"
      >
        Save
      </button>
    </div>
  )
}
