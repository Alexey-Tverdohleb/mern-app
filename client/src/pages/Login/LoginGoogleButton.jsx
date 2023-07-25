import { GOOGLE_BLUE } from '../../constants/colors.js';
import Button from '../../components/Button';
import openPopupWindow from '../../helpers/openPopup.js';
import getGoogleAuthUrl from '../../helpers/getGoogleAuthUrl.js';

const LoginGoogleButton = () => {
  const handleClick = () => {
    const url = getGoogleAuthUrl();

    openPopupWindow({ url, width: 400, height: 600 });
  };

  return <Button background={GOOGLE_BLUE} label="Sign in with Google" onClick={handleClick} />;
};

export default LoginGoogleButton;
