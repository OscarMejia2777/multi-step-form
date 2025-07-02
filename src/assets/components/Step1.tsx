import { Button, Form, Input, Typography } from 'antd'
import { useEffect } from 'react'

const { Title } = Typography

interface Props {
  onNext: () => void
  onDataChange: (data: Step1Data) => void
  initialData: Step1Data
}

export interface Step1Data {
  name: string
  email: string
  phone: string
}

// eslint-disable-next-line react/prop-types
const Step1: React.FC<Props> = ({ onNext, onDataChange, initialData }) => {
  const [form] = Form.useForm()

  // Cargar datos iniciales cuando se monta el componente (opcional)
  useEffect(() => {
    form.setFieldsValue(initialData)
  }, [form, initialData])

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log('Datos ingresados:', values)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        onDataChange(values)
        onNext()
      })
      .catch((info) => {
        console.log('Errores:', info)
      })
  }

  return (
    <div className='px-4 bg-red bg-white px-10 rounded-2xl flex justify-center flex-col w-full'>
      <div className='w-full max-w-full py-10 !mg:pt-0 border-none   flex-grow'>
        <Title
          level={2}
          style={{ color: '#1e3a8a' }}
          className='!text-2xl md:!mb-2'
        >
          Personal info
        </Title>
        <p className='text-gray-400 mb-6'>
          Please provide your name, email address, and phone number.
        </p>

        <Form layout='vertical' form={form}>
          <Form.Item
            label='Name'
            name='name'
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder='e.g. Stephen King' />
          </Form.Item>

          <Form.Item
            label='Email Address'
            name='email'
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Enter a valid email' }
            ]}
          >
            <Input placeholder='e.g. stephenking@lorem.com' />
          </Form.Item>

          <Form.Item
            label='Phone Number'
            name='phone'
            rules={[
              { required: true, message: 'Please enter your phone number' }
            ]}
          >
            <Input placeholder='e.g. +1 234 567 890' />
          </Form.Item>
        </Form>
        <div className='hidden md:flex  md:justify-end md:mt-[110px]'>
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

      <div className='w-full fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 flex justify-end px-4 md:hidden  '>
        <Button
          type='primary'
          onClick={handleSubmit}
          className='p-5'
          style={{ backgroundColor: '#1e3a8a', borderColor: '#1e3a8a' }}
        >
          Next Step
        </Button>
      </div>
    </div>
  )
}

export default Step1
