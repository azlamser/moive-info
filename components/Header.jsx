import style from "./Header.module.css"
function Header(){
    return(
        <>
        <nav className={style.navbar}>
             <input type="search" name="search" id="searbar" placeholder="search " className={style.searchBar}/>
            <ol className={style.navbarBox}>
            <li className={style.list}><a href="#" className={style.itemTitle} >watch now</a></li>
            <li className={style.list}><a href="#" className={style.itemTitle} >trending</a></li>
            <li className={style.list}><a href="#" className={style.itemTitle} > my account </a></li>
            <li className={style.list}><a href="#" className={style.itemTitle} >sign in</a></li>
            </ol>
           
        </nav>
        </>
    )
    
}
export default Header;