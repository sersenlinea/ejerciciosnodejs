function Login({changeValue,user,password,login}) {
    
    return (
     <form >
        <div>
          <label htmlFor="user">User</label>
          <input type="text" ref={user} name="user" id="user" onChange={changeValue} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" ref={password} name="password" id="password" onChange={changeValue} />
        </div>
        <input type={'button'} onClick={login} value="LogIn"/>
  </form>
  );
}

export default Login;