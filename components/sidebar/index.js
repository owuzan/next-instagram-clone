import React from 'react'
import './style.scss'
import UserImage from '../user-image'
import SuggessionUser from '../suggession-user'


export default function Sidebar() {
    return (
        <div className="sidebar-inner">
            <div className="change-bar">
                <UserImage size={56} status="default" src={"/owuzan.jpg"} />
                <div className="user-meta">
                    <p>owuzan</p>
                    <span>Oğuzhan Yılmaz</span>
                </div>
                <button>Geçiş Yap</button>
            </div>
            <div className="suggested">
                <div className="suggested-header">
                    <p>Senin İçin Öneriler</p>
                    <button>Tümünü Gör</button>
                </div>
                <ul>
                    <li>
                        <SuggessionUser username={"elonmusk"} name={"Elon Musk"} src={"elon.jpg"} />
                    </li>
                    <li>
                        <SuggessionUser username={"ivanasert"} name={"Ivana"} src={"ivana.jpg"} />
                    </li>
                    <li>
                        <SuggessionUser username={"mserdark"} name={"M. Serdar Kuzuloglu"} src={"serdar.jpg"} />
                    </li>
                    <li>
                        <SuggessionUser username={"thisisbillgates"} name={"Bill Gates"} src={"bill.jpg"} />
                    </li>
                    <li>
                        <SuggessionUser username={"betulhoca"} name={"Betül Ay"} src={"betul.jpg"} />
                    </li>
                </ul>
            </div>
            <footer className="instagram-footer">
                <ul>
                    <li>
                        <a href="#">Hakkında</a>
                    </li>
                    <li>
                        <a href="#">Yardım</a>
                    </li>
                    <li>
                        <a href="#">Basın</a>
                    </li>
                    <li>
                        <a href="#">API</a>
                    </li>
                    <li>
                        <a href="#">İş Fırsatları</a>
                    </li>
                    <li>
                        <a href="#">Gizlilik</a>
                    </li>
                    <li>
                        <a href="#">Koşullar</a>
                    </li>
                    <li>
                        <a href="#">Konumlar</a>
                    </li>
                    <li>
                        <a href="#">Başlıca Hesaplar</a>
                    </li>
                    <li>
                        <a href="#">Konu Etiketleri</a>
                    </li>
                    <li>
                        <a href="#">Dil</a>
                    </li>
                </ul>
                <p className="footer-text">© 2020 INSTAGRAM FROM FACEBOOK</p>
            </footer>
        </div>
    )
}

