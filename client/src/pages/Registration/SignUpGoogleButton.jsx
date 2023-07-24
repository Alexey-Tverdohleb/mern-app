import Button from '../../components/Button/index.jsx';
import { GOOGLE_BLUE } from '../../constants/colors.js';
import openPopupWindow from '../../helpers/openPopup.js';

const SignUpGoogleButton = () => {
  const handleClick = () => openPopupWindow({ url: 'https://google.com', width: 400, height: 600 });

  return <Button background={GOOGLE_BLUE} label="Sign up with Google" onClick={handleClick} />;
};

export default SignUpGoogleButton;
