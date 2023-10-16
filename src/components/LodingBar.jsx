import React from 'react'

const LodingBar = () => {
  return (
    <div className="flex w-full justify-center">
  <div id="loading-js" className="h-[300px] w-full">
    <div id="loadingTE">
      <div
        data-te-loading-icon-ref
        className="inline-block text-red-800 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"></div>
      <span data-te-loading-text-ref className='text-red-800 font-bold'>Loading...</span>
    </div>
  </div>
</div>
  )
}

export default LodingBar