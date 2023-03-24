import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {}

const Dashboard = (props: Props) => {
const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Dashboard