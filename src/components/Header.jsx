export default function Header() {
    return (
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
    );
}