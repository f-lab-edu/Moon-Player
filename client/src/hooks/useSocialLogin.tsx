import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { fetchUserToken, handleLoginInfo } from 'store/feature/user/UserSlice';
import { assignAuthURL, getCode } from 'utils/auth';

export const useSocialLogin = () => {
  const dispatch = useAppDispatch();
  const socialName = useAppSelector((state) => state.user.info);

  const onGetCode = () => {
    return getCode();
  };
  const getUserToken = (socialInfo) => {
    dispatch(fetchUserToken(socialInfo));
  };
  const handleLoginButton = (e) => {
    const loginName = e.target.closest('button').dataset.name;
    dispatch(handleLoginInfo(loginName));
    assignAuthURL(loginName);
  };

  return { handleLoginButton, socialName, getUserToken, onGetCode };
};
