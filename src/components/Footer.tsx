import '../style/footer.css';

function Footer() {
    return(
        <footer>
            <div className="left">
                <h2>Boba Games</h2>
                <p>Created 2023</p>
            </div>
            <div className="right">
                <h2>Пользователям</h2>
                <a href="" className='foot'>О нас</a>
                <a href="" className='foot'>Новости</a>
                <a href="" className='foot'>Контакты</a>
            </div>
        </footer>
    );
  }
  
  export default Footer;