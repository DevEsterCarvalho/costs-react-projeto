import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
	return (
		<footer>
			<ul className={styles.footer_list}>
				<li>
					<FaFacebook />
				</li>
				<li>
					<FaInstagram />
				</li>
				<li>
					<FaLinkedin />
				</li>
			</ul>
			<p className={styles.paragrafo_footer}>
				<span className={styles.destaque_footer}>Costs</span> &copy; 2025
			</p>
		</footer>
	);
}

export default Footer;
