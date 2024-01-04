import React from 'react'

function Header() {
    return <div className="p-3 flex items-center justify-between"  style={{backgroundColor:"#69b6a9"}}>
        <h2 className="flex items-center gap-x-1 text-tertiary text-3xl font-bold ml-3"> Cardiology</h2>

<div className="flex items-center gap-x-2">
    <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
          <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
            <span className="font-semibold text-tertiary">Michias</span>
            <span className="text-sm text-special2">Admin</span>
          </div>
        </button>
        <div className="border-l pl-3 ml-3 space-x-1">
<button className="relative p-2 text-black hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
          </button>

        </div>
            </div>


        </div>
        
        
        ;
}


export default Header;
