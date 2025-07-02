/* eslint-disable react/prop-types */
import { Button, Card, Checkbox, Typography } from 'antd'
import { useState, useEffect } from 'react'

const { Title } = Typography

export interface Step3Data {
  addons: string[]
}

interface Props {
  onNext: () => void
  onBack: () => void
  onDataChange: (data: Step3Data) => void
  initialData: Step3Data
  billingCycle: 'monthly' | 'yearly'
}

const Step3: React.FC<Props> = ({
  onNext,
  onBack,
  onDataChange,
  initialData,
  billingCycle
}) => {
  const [addons, setAddons] = useState<string[]>(initialData.addons)

  useEffect(() => {
    setAddons(initialData.addons)
  }, [initialData])

  const handleChange = (value: string) => {
    const updated = addons.includes(value)
      ? addons.filter((item) => item !== value)
      : [...addons, value]
    setAddons(updated)
  }

  const handleSubmit = () => {
    onDataChange({ addons })
    onNext()
  }

  const options = [
    {
      label: 'Online service',
      value: 'online-service',
      priceMonthly: '+$1/mo',
      priceYearly: '+$10/yr'
    },
    {
      label: 'Larger storage',
      value: 'larger-storage',
      priceMonthly: '+$2/mo',
      priceYearly: '+$20/yr'
    },
    {
      label: 'Customizable profile',
      value: 'custom-profile',
      priceMonthly: '+$2/mo',
      priceYearly: '+$20/yr'
    }
  ]

  return (
    <div className='px-4 bg-red bg-white px-10 rounded-2xl flex justify-center flex-col w-full  md:px-0 md:flex-col'>
      <div className='w-full max-w-full  p-6 rounded-lg flex-grow'>
        <Title className='!text-blue-950' level={3}>
          Pick add-ons
        </Title>
        <p className='text-gray-400'>
          Add-ons help enhance your gaming experience.
        </p>

        <div className='flex flex-col gap-4 mt-4 md:mt-10'>
          {options.map((opt) => {
            const checked = addons.includes(opt.value)
            const price =
              billingCycle === 'monthly' ? opt.priceMonthly : opt.priceYearly

            return (
              <Card
                key={opt.value}
                className={`cursor-pointer transition-all ${
                  checked
                    ? 'border-2 border-purple-700 bg-[#f9f5ff]'
                    : 'border border-gray-300'
                }`}
                bordered
                onClick={() => handleChange(opt.value)}
              >
                <div className='flex justify-between items-center'>
                  <Checkbox
                    checked={checked}
                    onChange={() => handleChange(opt.value)}
                    className='text-[16px] text-blue-900 text-'
                  >
                    {opt.label}
                  </Checkbox>
                  <span className={`font-medium text-purple-500`}>{price}</span>
                </div>
              </Card>
            )
          })}
        </div>
        <div className='hidden md:flex justify-between md:mt-19'>
          <Button
            style={{ color: '#1e3a8a' }}
            type='link'
            onClick={onBack}
            className='p-4 !text-grey-500'
          >
            Go Back
          </Button>
          <Button
            type='primary'
            onClick={handleSubmit}
            className='px-6 py-2'
            style={{ backgroundColor: '#1e3a8a', borderColor: '#1e3a8a' }}
          >
            Next Step
          </Button>
        </div>
      </div>

      <div className='w-full fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 flex justify-between px-4 md:px-10 max-w-md mx-auto md:hidden'>
        <Button
          style={{ color: '#1e3a8a' }}
          type='link'
          onClick={onBack}
          className='p-4 !text-grey-500'
        >
          Go Back
        </Button>
        <Button
          type='primary'
          onClick={handleSubmit}
          className='p-4'
          style={{ backgroundColor: '#1e3a8a', borderColor: '#1e3a8a' }}
        >
          Next Step
        </Button>
      </div>
    </div>
  )
}

export default Step3
