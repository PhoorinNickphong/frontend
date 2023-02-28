import "./sign.css"


function signin() {
  return (
      
      <html lang="en">
      <head>

          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Sign In</title>

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Assistant:400,700" />
          <link rel="stylesheet" href="./pages/signin.css" />
      </head>
      <body>
          <section className="login" id="login">
              <div className="head">
                  <h1 className="company">Login</h1>
              </div>
              <p className="msg">signin with @psu.ac.th account</p>
              <div className='form'>
                  <form action="" method="post">
                      <input type="email" placeholder='Email' className='text' id='username' required/><br/>
                      <input type="password" placeholder='Password' className='password'/><br/>
                      <br />
                      <a href="/#" className='btn-login' id='do-login'>Login</a>
                      <a href="/#" className='forgot'>sign up</a>
                  </form>
              </div>
          </section>


      </body>
      </html>

  )}

export default signin;