
import NavBar from '../../components/NavBar';
import { useAppDispatch } from '../../redux/hooks';
import { setUserThunk } from '../../redux/thunks/setUserThunk';
import PokeCardsLayout from './pokecards/PokeCardsLayout';
import { useEffect } from 'react';

type Props = {}

const Dashboard = (props: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setUserThunk())
    
  }, [dispatch])
  
  return (
    <>
      <NavBar />
      <PokeCardsLayout />
    </>
  )
}

export default Dashboard