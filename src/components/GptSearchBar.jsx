import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const lng= useSelector(store=>store.config.lang)

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type='text' className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang[lng].gptSearchPlaceholder}/>
            <button className='p-4  m-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[lng].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar