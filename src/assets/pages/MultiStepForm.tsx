import React, { useState, useEffect } from 'react'
import Step1 from '../components/Step1'
import Step2 from '../components/Step2'
import Step3 from '../components/Step3'
import Step4 from '../components/Step4'
import Success from '../components/succes'
import Sidebar from '../components/Sidebar'

export interface Step1Data {
  name: string
  email: string
  phone: string
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1)
  const [canRestart, setCanRestart] = useState(false)

  // Estados para los datos del formulario
  const [step1Data, setStep1Data] = useState<Step1Data>({
    name: '',
    email: '',
    phone: ''
  })

  const [step2Data, setStep2Data] = useState<{
    plan: string
    billingCycle: 'monthly' | 'yearly'
  }>({
    plan: '',
    billingCycle: 'monthly'
  })

  const [step3Data, setStep3Data] = useState<{
    addons: string[]
  }>({
    addons: []
  })

  // Efecto para manejar el temporizador de 30 segundos
  useEffect(() => {
    if (step === 5) {
      const timer = setTimeout(() => {
        setCanRestart(true)
      }, 30000)

      return () => clearTimeout(timer)
    } else {
      setCanRestart(false)
    }
  }, [step])

  const handleStep1DataChange = (data: Step1Data) => {
    setStep1Data(data)
  }

  const handleStep2DataChange = (data: typeof step2Data) => {
    setStep2Data(data)
  }

  const handleStep3DataChange = (data: typeof step3Data) => {
    setStep3Data(data)
  }

  const goToStep = (stepNumber: number) => {
    setStep(stepNumber)
  }

  const handleComplete = () => {
    setStep(5)
  }

  const handleRestart = () => {
    if (!canRestart) return

    // Resetear todos los estados
    setStep1Data({ name: '', email: '', phone: '' })
    setStep2Data({ plan: '', billingCycle: 'monthly' })
    setStep3Data({ addons: [] })
    setStep(1)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            onDataChange={handleStep1DataChange}
            initialData={step1Data}
            onNext={() => setStep(2)}
          />
        )
      case 2:
        return (
          <Step2
            initialData={step2Data}
            onDataChange={handleStep2DataChange}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )
      case 3:
        return (
          <Step3
            billingCycle={step2Data.billingCycle}
            initialData={step3Data}
            onDataChange={handleStep3DataChange}
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
          />
        )
      case 4:
        return (
          <Step4
            onComplete={handleComplete}
            onBack={() => setStep(3)}
            data={{ step1: step1Data, step2: step2Data, step3: step3Data }}
            goToStep={goToStep}
          />
        )
      case 5:
        return <Success onRestart={canRestart ? handleRestart : undefined} />
      default:
        return null
    }
  }

  return (
    <div className='w-full md:w-[100%] absolute flex flex-col h-full md:relative   bg-gray-200 md:bg-white md:rounded-xl  md:flex-row md:h-[60ch] md:mt-12 xl:w-[70%] xl:mx-45'>
      <div className='absolute  rounded-[10px] w-full md:w-[35ch] md:h-[1%] md:px-4 md:py-[20px] md:relative '>
        <Sidebar currentStep={step} />
      </div>
      <div className='relative px-5 rounded-3xl  mt-25 md:mt-0 h-32px flex-1 md:p-0 md:flex w-full'>
        {renderStep()}
      </div>
    </div>
  )
}

export default MultiStepForm
