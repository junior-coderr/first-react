import { useState } from 'react'


function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='flex justify-between  bg-black items-center px-10 py-1'>
    <div>
    <i className="bi bi-search text-3xl text-white"></i>
    </div>

    <div>
    <img src="/nasa.png" className='w-[110px]' alt="Img" />
    </div>


    <div>
    <i className="bi bi-list text-white text-5xl"></i>
    </div>
  </div>
    </>
  )
}

export default Header
