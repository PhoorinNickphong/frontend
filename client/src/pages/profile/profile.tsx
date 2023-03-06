import "./profile.css";
import ActivityAppBar from "../../components/app-bar"
function Profile() {
  return(
   <html>
    <ActivityAppBar></ActivityAppBar>
    <link
          href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
          rel="stylesheet"
        />
    <body>
    <div className="box99">
        <img src="./pro.jpg" />
        <p>
        <label style={{fontSize: "200%"}}>My account</label>
        </p>  
    </div>
    <div className="box2">
        <div className="grid">
            <label>ชื่อ</label>
            <label>นามสกุล</label>
            <div className="box"></div>  
            <div className="box"></div>
            <label>อีเมล</label>
            <label>เบอร์โทร</label>
            <div className="box"></div>
            <div className="box"></div>
        </div>
    </div>
    </body>
   </html>
  )
}

export default Profile;