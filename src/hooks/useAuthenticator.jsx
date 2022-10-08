import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const useAuthenticator = () => {
  const navigate = useNavigate()
  const [signData, setSignData] = useState(null)
  const [isSignIn, setSignIn] = useState(true)

  const SignUp = () => {
    const items = localStorage.getItem("authToken")
    if (!items) {
      const newSignData = Object.assign({}, signData)
      localStorage.setItem("authToken", JSON.stringify(newSignData))
      alert("계정을 생성하였습니다.")
    }
    else {
      alert("이미 생성하였습니다.")
    }
    navigate("/music")
  }
  const SignOut = () => {
    localStorage.clear()
    alert("정상적으로 로그아웃 되었습니다.")
    navigate("/")
  }

  useEffect(() => {
    if (signData) {
      setSignIn(false)
    }
    else {
      setSignIn(true)
    }
  }, [signData])



  return { isSignIn, SignUp, setSignData, SignOut }
}

export default useAuthenticator