import React from 'react'
import MultiStepForm from './assets/pages/MultiStepForm'
import './index.css'

const App: React.FC = () => {
  return (
    <div className='w-full h-[100%] md:px-[5ch] justify-center md:fixed bg-gray-300 '>
      <MultiStepForm />
    </div>
  )
}

export default App
