import { useState } from "react";
import Button from "../../components/Button";



const LoginPage = () => {
  const [text, setText] = useState('button');
  return (
    <LoginHeader></LoginHeader>
    <main>
    <h1>Login Page</h1>
    <Button><input type='text' value={text} onChange={({ target: { value }}) => setText(value)} />{text}</Button>
  </main>)
}

export default LoginPage;
