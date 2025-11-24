import { useState } from 'react'
import { LogIn, LogOut } from 'lucide-react'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  const login = (e: React.FormEvent) => {
    e.preventDefault()
    setLoggedIn(true)
  }

  const logout = () => {
    setLoggedIn(false)
    setEmail('')
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg w-full text-center">
          <h1 className="text-5xl font-bold mb-10 text-gray-800">SeqSwift Portal</h1>
          <form onSubmit={login} className="space-y-8">
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required className="w-full px-6 py-5 text-xl border rounded-xl" />
            <input type="password" placeholder="Password" required className="w-full px-6 py-5 text-xl border rounded-xl" />
            <button type="submit" className="w-full bg-white text-indigo-600 font-bold py-5 rounded-xl hover:bg-gray-100 flex items-center justify-center gap-4 text-2xl">
              <LogIn size={32} /> Sign In
            </button>
          </form>
          <p className="mt-10 text-lg text-gray-600">Secure client portal — Emory Health & partners</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg px-10 py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-indigo-600">SeqSwift</h1>
        <button onClick={logout} className="text-red-600 flex items-center gap-3 text-xl">
          <LogOut size={28} /> Logout
        </button>
      </nav>
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-6xl font-bold mb-8">Welcome back, {email}</h2>
        <p className="text-3xl text-gray-700">Your secure client portal is live.</p>
      </div>
    </div>
  )
}
