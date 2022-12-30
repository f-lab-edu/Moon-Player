import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { fetchUserToken, handleLoginInfo } from 'store/feature/user/UserSlice';
import { assignAuthURL } from 'utils/auth';
export const useLogin = () => {
  const dispatch = useAppDispatch();
  const socialName = useAppSelector((state) => state.user.info);

  const getUserToken = (socialInfo) => {
    dispatch(fetchUserToken(socialInfo));
  };
  const handleLogin = (e) => {
    const loginName = e.target.closest('button').dataset.name;
    dispatch(handleLoginInfo(loginName));
    assignAuthURL(loginName);
  };

  return { socialName, getUserToken, handleLogin };
};
