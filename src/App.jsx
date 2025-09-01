import './App.css'
import logo from "./assets/logo-solid.svg";

function App() {
  return (
    <div>
      <header className="md:max-w-7xl mx-auto py-3 px-5 md:px-3 bg-red-50 flex items-center justify-between">
        <div className="">
          <div>
            <img src={logo} width={96} height={32} />
          </div>
          <nav>
            <ul>
              <li className="text-gray-500">
                Home
              </li>
            </ul>
          </nav>
        </div>
        <div className="block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </header>
    </div>
  )
}

export default App
