import { ErrorCode, ErrorMessage, ErrorContainer } from './style';

const NotFound = () => {
  return (
    <ErrorContainer>
      <ErrorCode>ERROR 404</ErrorCode>
      <ErrorMessage>PAGE NOT FOUND</ErrorMessage>
    </ErrorContainer>
  );
};

export default NotFound;
