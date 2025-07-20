import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Navbar.module.css";
import {useRouter} from 'next/router';
import {useEffect, useState} from "react";

const Navbar = () => {
    const router = useRouter()

    const [title, setTitle] = useState("")
    const getSearchHandler = () => {
        if (title.trim()) {
            router.push(`/search?q=${title}`)

        }
    }

    useEffect(()=>setTitle(router.query.q),[])

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_search}>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="جستجو کنید...."
                />
                <span
                    onClick={getSearchHandler} className={styles.navbar_search_icon}>
          <FontAwesomeIcon icon={faSearch}/>
        </span>
            </div>
            <div className={styles.navbar_user_avatar}>
                <img src="/images/avatar/avatar.png" alt=""/>
            </div>
        </nav>
    )
}

export default Navbar
