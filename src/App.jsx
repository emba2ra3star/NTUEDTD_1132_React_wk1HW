import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <header className="headerArea">
          <div className="header_box">
            <h1 className="header_title head1">Vegetables</h1>
            <div className="header_rightSideBox">
              <a className="header_icon" href="https://www.facebook.com/groups/1517468085196003" target="_blank"><img
                title="facebook" src="./img/icon_facebook.png" alt="link to facebook" /></a>
              <a className="header_icon" href="https://www.instagram.com/ntuedtd_ig/" target="_blank"><img
                title="instagram" src="./img/icon_instagram.png" alt="link to instagram" /></a>
              <div className="vertical_line"></div>
              <a className="header_btn text1" href="./backToHomepage.html">login</a>
              <a className="header_btn text1" href="./backToHomepage.html">join</a>
            </div>
          </div>

          <nav className="nav head2">
            <ul className="nav_list">
              <li className="nav_item"><a className="nav_item_title head2" href="./backToHomepage.html">Home</a></li>
              <li className="nav_item"><a className="nav_item_title head2" href="./backToHomepage.html">About Us</a></li>
              <li className="nav_item"><a className="nav_item_title head2" href="./backToHomepage.html">Vegetables</a></li>
              <li className="nav_item"><a className="nav_item_title head2" href="./backToHomepage.html">Oline</a></li>
              <li className="nav_item"><a className="nav_item_title head2" href="./backToHomepage.html">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <img className="main_img" src="./img/img_main_pumpkin.png" alt="pumpkin" />
          <div className="main_secondBox">
            <div className="main_leftBox">
              <h2 className="leftBox_title head2">vegetables</h2>
              <div className="leftBox_content">
                <img className="leftBox_img" src="./img/img_vegetables_carrot.png" alt="carrot" />
                <img className="leftBox_img" src="./img/img_vegetables_corn.png" alt="corn" />
                <img className="leftBox_img" src="./img/img_vegetables_pepper.png" alt="pepper" />
              </div>
            </div>
            <div className="main_rightBox">
              <h2 className="rightBox_title head2">Contact</h2>
              <div className="rightBox_content">
                <p className="rightBox_text text2">
                  For any questions or suggestions about Vegetables, Vegetables
                  Club or your online order you can contact Vegetables Customer
                  Service by phone, email or post and we’ll be happy to help.
                </p>
                <div className="horizontal_line"></div>
                <p className="rightBox_info text2">
                  E-mail : Vegetables@aaabbccc.com <br />
                  PHONE : +886-123-456-789
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="footer">
        <p className="text2">Copyrights 2017 Vegetables cise / Design by Vegetables</p>
      </footer>
    </>
  )
}

export default App
