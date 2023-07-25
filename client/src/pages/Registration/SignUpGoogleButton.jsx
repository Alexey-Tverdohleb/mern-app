import Button from '../../components/Button/index.jsx';
import { GOOGLE_BLUE } from '../../constants/colors.js';
import openPopupWindow from '../../helpers/openPopup.js';
import getGoogleAuthUrl from '../../helpers/getGoogleAuthUrl.js';

const SignUpGoogleButton = () => {
  const handleClick = () => {
    const url = getGoogleAuthUrl();

    openPopupWindow({ url, width: 400, height: 600 });
  };

  return <Button background={GOOGLE_BLUE} label="Sign up with Google" onClick={handleClick} />;
};

export default SignUpGoogleButton;
