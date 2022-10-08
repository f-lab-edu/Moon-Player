import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useAuthenticator = () => {
  const navigate = useNavigate()
  const isTokenExists = !!localStorage.getItem('authToken');
  // TODO: use Context
  const [isSignedIn, setIsSignedIn] = useState(isTokenExists);

  const signUp = () => {
    const items = localStorage.getItem('authToken')
    if (!items) {
      // const result = await (await fetch('/signin')).json()
      // localStorage.setItem('authToken', result.token);
      localStorage.setItem('authToken', 'token')
      alert('계정을 생성하였습니다.')
    }
    else {
      alert('이미 생성하였습니다.')
    }
    navigate('/music')
  }
  const signIn = () => {
    // if (email !== '' && password !== '') {
    //   const result = await (await fetch('/signin')).json()
    //   localStorage.setItem('authToken', result.token);
    // }
    setIsSignedIn(true);
    navigate('/music');
  }

  const signOut = () => {
    localStorage.clear()
    alert('정상적으로 로그아웃 되었습니다.')
    setIsSignedIn(false);
    navigate('/')
  }

  return { isSignedIn, signUp, signIn, signOut };
}

export default useAuthenticator