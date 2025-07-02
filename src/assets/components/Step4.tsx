/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Button, Typography, Divider, Card, Modal } from 'antd'
import type { Step1Data } from './Step1'
import type { Step2Data } from './Step2'
import type { Step3Data } from './Step3'

const { Title, Text } = Typography

interface Props {
  onBack: () => void
  goToStep: (stepNumber: number) => void
  data: {
    step1: Step1Data
    step2: Step2Data
    step3: Step3Data
  }
  onComplete: () => void
}

const planPrices = {
  arcade: { monthly: 9.99, yearly: 90 },
  advanced: { monthly: 14.99, yearly: 150 },
  pro: { monthly: 19.99, yearly: 200 }
}

const addonPrices = {
  'online-service': { monthly: 1, yearly: 10 },
  'larger-storage': { monthly: 2, yearly: 20 },
  'custom-profile': { monthly: 2, yearly: 20 }
}

const Step4: React.FC<Props> = ({ onBack, goToStep, data, onComplete }) => {
  const { step2, step3 } = data
  const [modalVisible, setModalVisible] = useState(false)

  const billingCycle = step2.billingCycle
  const isYearly = billingCycle === 'yearly'
  const cycleSuffix = isYearly ? '/yr' : '/mo'

  const planPriceNum =
    planPrices[step2.plan as keyof typeof planPrices]?.[billingCycle] ?? 0
  const addonsPriceNum = step3.addons.reduce((sum, addon) => {
    const price =
      addonPrices[addon as keyof typeof addonPrices]?.[billingCycle] ?? 0
    return sum + price
  }, 0)
  const totalPriceNum = planPriceNum + addonsPriceNum

  const formatPrice = (price: number) => `$${price}${cycleSuffix}`

  const addonLabels: Record<string, string> = {
    'online-service': 'Online service',
    'larger-storage': 'Larger storage',
    'custom-profile': 'Customizable profile'
  }

  const handleConfirm = () => {
    console.log('Confirmando orden...')
    setModalVisible(true)
    // Simulamos un proceso de confirmación
    setTimeout(() => {
      setModalVisible(false)
      onComplete() // Llamamos a la función que nos lleva al paso de éxito
    }, 1500)
  }

  return (
    <div className='px-4 bg-red bg-white px-10 rounded-2xl flex justify-center flex-col w-full  md:px-0 md:flex-col'>
      <div className='w-full max-w-full  p-6 rounded-lg flex-grow'>
        <Title className='!text-blue-950' level={3}>
          Finishing up
        </Title>
        <Text type='secondary'>
          Double-check everything looks OK before confirming.
        </Text>

        <Card className='mt-4 space-y-2'>
          <div className='flex justify-between items-center'>
            <div>
              <Text strong>
                {step2.plan.charAt(0).toUpperCase() + step2.plan.slice(1)} (
                {isYearly ? 'Yearly' : 'Monthly'})
              </Text>
              <br />
              <Button
                type='link'
                size='small'
                onClick={() => goToStep(2)}
                style={{
                  paddingLeft: 0,
                  color: '#7F8CAA',
                  textDecoration: 'underline'
                }}
              >
                Change
              </Button>
            </div>
            <Text strong>{formatPrice(planPriceNum)}</Text>
          </div>

          {step3.addons.length > 0 && <Divider className='my-2' />}

          {step3.addons.map((addon) => (
            <div key={addon} className='flex justify-between'>
              <Text>{addonLabels[addon]}</Text>
              <Text>
                +
                {formatPrice(
                  addonPrices[addon as keyof typeof addonPrices]?.[
                    billingCycle
                  ] ?? 0
                )}
              </Text>
            </div>
          ))}

          <Divider className='my-2' />

          <div className='flex justify-between'>
            <Text strong>Total ({isYearly ? 'per year' : 'per month'})</Text>
            <Text strong>{formatPrice(totalPriceNum)}</Text>
          </div>
        </Card>
        <div
          className={`hidden md:flex justify-between ${
            step3.addons.length === 0 ? 'md:mt-[200px]' : 'md:mt-[130px]'
          }`}
        >
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
            onClick={handleConfirm}
            className='px-6 py-2'
            style={{ backgroundColor: '#1e3a8a', borderColor: '#1e3a8a' }}
          >
            Confirm
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
          onClick={handleConfirm}
          className='p-4'
          style={{ backgroundColor: '#1e3a8a', borderColor: '#1e3a8a' }}
        >
          Confirm
        </Button>
      </div>

      <Modal
        title='Processing your request'
        visible={modalVisible}
        footer={null}
        closable={false}
      >
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <p>Please wait while we process your subscription...</p>
        </div>
      </Modal>
    </div>
  )
}

export default Step4
