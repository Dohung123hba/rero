function Login(){
  const log = () => {
    alert("Phát ngu")
  }
  return(
    <>
      <input type="text" placeholder="username" required style={{marginRight: "20px"}}/>
      <input type="password" placeholder="password" required style={{marginRight: "20px"}}/>
      <button onclick={log}>Đăng nhập</button>
    </>
  )
}
export default Login;
