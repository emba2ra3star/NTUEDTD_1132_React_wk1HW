export default function Contants() {
    return (
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
    );
}