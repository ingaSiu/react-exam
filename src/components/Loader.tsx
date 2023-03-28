import { MainGreen } from '../const/styles';
import { MutatingDots } from 'react-loader-spinner';

type Props = {
  isLoading: boolean;
};

const Loader = ({ isLoading }: Props) => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color={`${MainGreen}`}
      secondaryColor={`${MainGreen}`}
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{ justifyContent: 'center', height: '100vh', alignItems: 'center' }}
      wrapperClass=""
      visible={isLoading}
    />
  );
};

export default Loader;
