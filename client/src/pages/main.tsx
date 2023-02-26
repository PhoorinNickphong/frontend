import "./main.css";

function App() {
  return(
    <html>
      <head>
        <title>UniAct</title>
        <link rel="stylesheet" href="main.css"></link>
        <link 
        href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"  
        rel="stylesheet">
        </link>
      </head>
      <body>
        <div className="box0">
            <h2>UniAct</h2>
        </div>
        <div className="emp">
            <p>
                <label>ลงทะเบียนเข้าร่วมกิจกรรม</label>
            </p>
        </div>
        <div className="box">
            <h2>กิจกรรม</h2>
        </div>
        <div  className="box1">
            <h2>ค่าย/ค่ายออนไลน์</h2>
        </div>
        <div  className="box2">
            <h2>หมวดหมู่</h2>
        </div>
        <a className="button0">ค่ายทั้งหมด</a> 
        <a className="button"  href="#">ค่ายออนไลน์</a>
        <a className="button"  href="#">ค่ายลงพื้นที่</a>
        <a className="button"  href="#">ค่ายวิชาการ</a>
        <div  className="box2">
            <h2>กิจกรรมที่เปิดอยู่</h2>
        </div>
        <div className="card">
           <img className="image" src="./image/img0.jpg"></img>
           <h2>ค่ายออนไลน์</h2>
           <p className="textcard">รายละเอียดของค่าย</p>
            <a className="button1" href="#">Readmore</a>
        </div>
        <div  className="box3">
        </div>
      </body>
    </html>
  )
}

export default App;