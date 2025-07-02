import { Card, Typography, Space, Button } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import IconCheckmark from '../images/IconCheckmark'

const { Title, Paragraph, Text } = Typography

interface Props {
  onRestart?: () => void
}

// eslint-disable-next-line react/prop-types
const Success: React.FC<Props> = ({ onRestart }) => {
  return (
    <div className='px-4 bg-red bg-white px-10 rounded-2xl flex justify-center flex-col w-full  md:px-0 md:flex-col lg:mt-20'>
      <div className='w-full max-w-full  p-6 rounded-lg flex-grow'>
        <Card
          bordered={false}
          style={{
            textAlign: 'center',
            boxShadow: 'none'
          }}
        >
          <Space className='w-full' direction='vertical' size='large'>
            <div className='flex items-center justify-center mx-auto w-16 h-16 rounded-full bg-red-600'>
              <CheckCircleFilled className='text-white text-3xl' />
            </div>
            <Title level={2} style={{ color: '#1e3a8a' }}>
              Thank you!
            </Title>

            <Paragraph style={{ fontSize: '16px' }}>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at
              <Text> support@loremgaming.com</Text>.
            </Paragraph>

            {onRestart && (
              <Button
                type='primary'
                onClick={onRestart}
                style={{ marginTop: '20px' }}
              >
                Start New Subscription
              </Button>
            )}
          </Space>
        </Card>
      </div>
    </div>
  )
}

export default Success
