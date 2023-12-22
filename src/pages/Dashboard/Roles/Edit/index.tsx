import CreateUdateRoleForm from 'components/role/CreateUpdateRoleForm/CreateUdateRoleForm'
import DashboardLayout from 'components/ui/DashboardLayout'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

const DashboardRolesEdit: FC = () => {
  const location = useLocation()

  return (
    <DashboardLayout>
      <h1 className="mb-4 text-center">Edit role</h1>
      <CreateUdateRoleForm defaultValues={location.state} />
    </DashboardLayout>
  )
}

export default DashboardRolesEdit
