export const isValidInput = (email, password) => {
  return email.length && password.length
}



export const Sign = (SignData) => {
  const items = localStorage.getItem("authToken")
  if (!items) {
    const newSignData = Object.assign({}, SignData)
    localStorage.setItem("authToken", JSON.stringify(newSignData))
    alert("계정을 생성하였습니다.")
  }
  else {
    alert("이미 생성하였습니다.")
  }
}