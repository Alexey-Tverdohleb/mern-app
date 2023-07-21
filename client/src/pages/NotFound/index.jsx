import { ErrorCode, ErrorMessage, ErrorContainer } from './style';

const NotFound = () => {
  return (
    <ErrorContainer className="center">
      <ErrorCode>ERROR 404</ErrorCode>
      <ErrorMessage>PAGE NOT FOUND</ErrorMessage>
    </ErrorContainer>
  );
};

export default NotFound;
