import Databases from "./databases"
import Users from "./users"
import CreateUser from "./createUser"

export default function Tables() {
  return (
    <section>
      <div className="container mt-32 min-h-screen px-6 mx-auto">
        <CreateUser />
        <div className="w-full grid grid-cols-2 gap-20">
          <Databases />
          <Users />
        </div>
      </div>
    </section>
  )
}
