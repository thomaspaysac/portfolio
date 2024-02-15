export default function Header () {
  return (
    <header className="flex gap-4 items-center py-4 px-20 bg-zinc-800 text-gray-50 ">
      <h1>Thomas Paysac</h1>
      <div className="ml-auto">About</div>
      <div>Portfolio</div>
      <div>Blog</div>
      <button className="bg-indigo-500 px-5 py-2 font-bold text-white rounded transition-all hover:bg-indigo-600 hover:cursor-pointer">
        Contactez-moi
      </button>
    </header>
  )
}