import React, { useState, useEffect } from 'react'
import desktopBg from '../images/bg-sidebar-desktop.svg'
import mobileBg from '../images/bg-sidebar-mobile.svg'
import '../../index.css'
import { Steps } from 'antd'

const { Step } = Steps

interface Props {
  currentStep: number
}

const Sidebar: React.FC<Props> = ({ currentStep }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className='w-full md:h-[55ch] bg-cover bg-no-repeat p-4 min-h-[200px] md:h-[50ch] rounded-lg'
      style={{
        backgroundImage: `url("${isMobile ? mobileBg : desktopBg}")`
      }}
    >
      <div className={isMobile ? ' mt-4 flex justify-center' : ''}>
        <div className={isMobile ? 'flex' : 'w-full'}>
          <Steps
            current={currentStep - 1}
            direction={isMobile ? 'horizontal' : 'vertical'}
            responsive={false}
          >
            <Step
              title={isMobile ? undefined : 'Step 1'}
              description={isMobile ? undefined : 'YOUR INFO'}
            />
            <Step
              title={isMobile ? undefined : 'Step 2'}
              description={isMobile ? undefined : 'SELECT PLAN'}
            />
            <Step
              title={isMobile ? undefined : 'Step 3'}
              description={isMobile ? undefined : 'ADD-ONS'}
            />
            <Step
              title={isMobile ? undefined : 'Step 4'}
              description={isMobile ? undefined : 'SUMMARY'}
            />
          </Steps>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
