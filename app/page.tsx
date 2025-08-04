export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Form Test</h1>
        <form action="api/user" method="POST">
          <label htmlFor="form_name">Name: </label>
          <input className="border-1 mt-2 rounded" id="form_name" name="form_name" type="text" />
          <br/>
          <input className="bg-blue-600 p-1 rounded-md mt-4 cursor-pointer" type="submit" value="Submit Name" />
        </form>
      </div>
    </div>
  )
}