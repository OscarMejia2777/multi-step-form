import { Button, Card, Col, Row, Switch, Typography } from 'antd'
import { useState, useEffect } from 'react'
import arcadeIcon from '../images/icon-arcade.svg'
import advancedIcon from '../images/icon-advanced.svg'
import proIcon from '../images/icon-pro.svg'

const { Title, Text } = Typography

export interface Step2Data {
  plan: string
  billingCycle: 'monthly' | 'yearly'
}

interface Props {
  onNext: () => void
  onBack: () => void
  onDataChange: (data: Step2Data) => void
  initialData: Step2Data
}

const plans = [
  {
    value: 'arcade' as const,
    name: 'Arcade',
    priceMonthly: '$9.99/mo',
    priceYearly: '$99.99/yr'
  },
  {
    value: 'advanced' as const,
    name: 'Advanced',
    priceMonthly: '$14.99/mo',
    priceYearly: '$149.99/yr'
  },
  {
    value: 'pro' as const,
    name: 'Pro',
    priceMonthly: '$19.99/mo',
    priceYearly: '$199.99/yr'
  }
]

const Step2: React.FC<Props> = ({
  onNext,
  onBack,
  onDataChange,
  initialData
}) => {
  const [plan, setPlan] = useState<string>(initialData.plan)
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    initialData.billingCycle
  )

  useEffect(() => {
    setPlan(initialData.plan)
    setBillingCycle(initialData.billingCycle)
  }, [initialData])

  const handleSubmit = () => {
    if (plan) {
      onDataChange({ plan, billingCycle })
      onNext()
    }
  }

  const planImages = {
    arcade: arcadeIcon,
    advanced: advancedIcon,
    pro: proIcon
  }

  return (
    <div className='px-4 bg-red bg-white px-10 rounded-2xl flex justify-center flex-col w-full  md:px-0 md:flex-col'>
      <div className='w-full max-w-full  p-6 rounded-lg flex-grow'>
        <Title className='text-blue-900 text-left w-full lg:ml-10' level={2}>
          Select your plan
        </Title>
        <p className='text-base justify-center w-full mb-6 lg:ml-10'>
          You have the option of monthly or yearly billing.
        </p>

        <Row className='flex flex-col gap-4 w-full lg:mx-10 lg:flex-row lg:w-[27%] lg:flex-nowrap lg:h-[25ch]'>
          {plans.map((p) => (
            <Col className='w-ful' span={24} key={p.value}>
              <Card
                bodyStyle={{ padding: 1 }}
                className=' h-full py-2 px-3 w-full cursor-pointer lg:flex-nowrap'
                hoverable
                onClick={() => setPlan(p.value)}
                style={{
                  border:
                    plan === p.value
                      ? '2px solid #6259ff'
                      : '1px solid #d9d9d9',
                  backgroundColor: plan === p.value ? '#f0f5ff' : '#fff',
                  borderRadius: 8
                }}
              >
                <div className=' flex w-full md:flex-row lg:flex-col '>
                  <div className='flex justify-left md:w-[30%] lg:w-[50%]'>
                    <img
                      src={planImages[p.value]}
                      className={`${
                        billingCycle === 'yearly'
                          ? 'md:w-[90%] lg:mb-7  md:w-[10%]'
                          : 'md:w-[50px] lg:mb-20 lg:w-[10px]'
                      }h-auto `}
                    />
                  </div>

                  <div className=' text-left flex flex-col w-full justify-center'>
                    <Text strong>{p.name}</Text>
                    <Text>
                      {billingCycle === 'monthly'
                        ? p.priceMonthly
                        : p.priceYearly}
                    </Text>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className='text-blue-600 text-sm font-medium md:w-[100%] md:text-right lg:text-left'>
                      2 months free
                    </p>
                  )}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className='mt-5 flex items-center justify-center gap-4 bg-gray-100 rounded-md px-4 py-2 w-full lg:w-[87%] lg:ml-10 lg:mt-10'>
          <Text>Monthly</Text>
          <Switch
            checked={billingCycle === 'yearly'}
            onChange={(checked) =>
              setBillingCycle(checked ? 'yearly' : 'monthly')
            }
            style={{
              backgroundColor: billingCycle === 'yearly' ? '#1e3a8a' : undefined
            }}
          />
          <Text>Yearly</Text>
        </div>
        <div className='hidden md:flex justify-between md:mt-10 lg:mt-20'>
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

      <div className='w-full fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 flex justify-between px-4 md:hidden  '>
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

export default Step2
