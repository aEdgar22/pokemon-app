
import NavBar from '../../components/NavBar';
import PokeCardsLayout from './pokecards/PokeCardsLayout';

type Props = {}

const Dashboard = (props: Props) => {

  return (
    <>
      <NavBar />
      <PokeCardsLayout />
    </>
  )
}

export default Dashboard