function Login(){
  return(
    <>
      <input type="text" placeholder="username" required style={{marginRight: "20px"}}/>
      <input type="password" placeholder="password" required style={{marginRight: "20px"}}/>
      <button>Đăng nhập</button>
    </>
  )
}
export default Login;
