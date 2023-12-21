import CreateUdateRoleForm from 'components/role/CreateUpdateRoleForm/CreateUdateRoleForm'
import DashboardLayout from 'components/ui/DashboardLayout'
import { FC } from 'react'

const DashboardRolesAdd: FC = () => {
  return (
    <DashboardLayout>
      <h1 className="mb-4 text-center">Create new role</h1>
      <CreateUdateRoleForm />
    </DashboardLayout>
  )
}

export default DashboardRolesAdd
