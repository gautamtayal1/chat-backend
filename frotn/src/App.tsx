import { useEffect } from "react"

function App() {

  const ws = new WebSocket("http://localhost:8080")

  useEffect(() => {
    
  })
 return(
    <div className='py-10 h-screen w-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white'>
      <div className='h-[90%] w-[90%] bg-white/20 backdrop-blur-md rounded-xl overflow-y-auto mb-2 border-2 border-white/30 shadow-2xl'>
        {/* Chat messages will appear here */}
      </div>
      <div className='h-[10%] w-[90%] flex gap-2'>
        <input 
          type="text"
          placeholder="Type your message..."
          className='flex-1 h-12 bg-white/30 backdrop-blur-md rounded-xl px-6 text-white font-medium 
          focus:outline-none focus:ring-4 focus:ring-white/40 placeholder-white/70 
          border-2 border-white/30 shadow-lg transition-all duration-300 hover:bg-white/40'
        />
        <button
          className='w-24 h-12 bg-white/30 backdrop-blur-md rounded-xl px-6 text-white font-medium
          focus:outline-none focus:ring-4 focus:ring-white/40
          border-2 border-white/30 shadow-lg transition-all duration-300 
          hover:bg-white/40 active:transform active:scale-95'
        >
          Send
        </button>
      </div>
    </div>
    )
}
export default App
  