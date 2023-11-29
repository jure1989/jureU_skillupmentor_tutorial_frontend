import DashboardLayout from 'components/ui/DashboardLayout'
import { FC } from 'react'

const Dashboard: FC = () => {
  return (
    <DashboardLayout>
      <h1 className="mb-4">Sales</h1>

      <div id="chart"></div>
    </DashboardLayout>
  )
}

export default Dashboard
