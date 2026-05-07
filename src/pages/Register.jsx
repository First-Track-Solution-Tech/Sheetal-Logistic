import React from 'react'
import { Mail, Lock, CircleUser, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
   <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      
      <div className="hidden md:flex flex-col justify-center px-16 bg-gradient-to-br from-blue-600 to-green-500 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Quick Courier
        </h1>
        <p className="text-lg opacity-90">
          Track, manage and deliver shipments effortlessly with us.
        </p>
      </div>
 
 <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">

          <h2 className="text-2xl font-bold text-center text-gray-800">
            Register
          </h2>
          <p className="text-sm text-gray-500 text-center mt-2">
            Create your Quick account
          </p>
          <form className="mt-8 space-y-5">

            <div>
                        <label className="text-sm text-gray-600">Full Name</label>
                        <div className="flex items-center border rounded-lg px-3 mt-1">
                          <CircleUser size={18} className="text-gray-400" />
                          <input
                            type="text"
                            placeholder="enter your namne"
                            className="w-full px-2 py-3 outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div>
  <label className="text-sm text-gray-600">Phone</label>
  <div className="flex items-center border rounded-lg mt-1 overflow-hidden">
    
    {/* Country dial code dropdown */}
    <div className="flex items-center border-r px-2 bg-gray-50">
      <Phone size={16} className="text-gray-400 mr-1 shrink-0" />
      <select className="bg-transparent text-sm text-gray-700 outline-none py-3 pr-1 cursor-pointer">
        <option value="+91">🇮🇳 +91</option>
        <option value="+1">🇺🇸 +1</option>
        <option value="+44">🇬🇧 +44</option>
        <option value="+61">🇦🇺 +61</option>
        <option value="+971">🇦🇪 +971</option>
        <option value="+65">🇸🇬 +65</option>
        <option value="+60">🇲🇾 +60</option>
        <option value="+880">🇧🇩 +880</option>
        <option value="+92">🇵🇰 +92</option>
        <option value="+94">🇱🇰 +94</option>
        <option value="+977">🇳🇵 +977</option>
      </select>
    </div>

    {/* Phone number input */}
    <input
      type="tel"
      placeholder="Enter mobile number"
      className="w-full px-3 py-3 outline-none text-sm"
    />
  </div>
</div>
          <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <div className="flex items-center border rounded-lg px-3 mt-1">
                          <Mail size={18} className="text-gray-400" />
                          <input
                            type="email"
                            placeholder="123@example.com"
                            className="w-full px-2 py-3 outline-none text-sm"
                          />
                        </div>
                      </div>
          
                      
                      <div>
                        <label className="text-sm text-gray-600">Password</label>
                        <div className="flex items-center border rounded-lg px-3 mt-1">
                          <Lock size={18} className="text-gray-400" />
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-2 py-3 outline-none text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Business Name</label>
                        <div className="flex items-center border rounded-lg px-3 mt-1">
                          <CircleUser size={18} className="text-gray-400" />
                          <input
                            type="text"
                            placeholder="enter your business namne"
                            className="w-full px-2 py-3 outline-none text-sm"
                          />
                        </div>
                      </div>
                      <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-medium hover:opacity-90 transition"
            >
              Register
            </button>
                      
                      
                      
                      </form>
                      <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to='/signin' className="text-blue-600 cursor-pointer hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register