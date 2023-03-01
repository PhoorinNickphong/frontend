import "../sign.css"


function signup() {
  return (
      
      <html lang="en">
      <head>

          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Sign up</title>

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Assistant:400,700" />
          <link rel="stylesheet" href="./pages/signin.css" />
      </head>
      <body>
          <section className="login" id="login">
              <div className="head">
                  <h1 className="company">Register</h1>
              </div>
              <p className="msg">signup with @psu.ac.th account</p>
              <div className='form'>
                  <form action="" method="post">
                      <input type="text" placeholder='Usename' className='text' id='username' required/><br/><br/>
                      <input type="email" placeholder='Email' className='text' id='email' required/><br/>
                      <input type="password" placeholder='Password' className='password'/><br/>
                      <br />
                      <a href="/#" className='btn-login' id='do-login'>Sign up</a>
                      <a href="/#" className='forgot'>Login?</a>
                  </form>
              </div>
          </section>


      </body>
      </html>

  )}

export default signup;