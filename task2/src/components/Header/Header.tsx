import { IconLogo } from '../../assets/icons/IconLogo'
import { icons, links } from './data'

import s from './header.module.css'

export const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.headerContainer}>
				<div className={s.headerContent}>
					<IconLogo />
					<nav className={s.headerLinks}>
						{links.map((link) => (
							<a key={link}>{link}</a>
						))}
					</nav>
					<a href='callto:+75555555555'>{'+7 555 555-55-55'}</a>
					<div className={s.iconsWrapper}>
						{icons.map((icon, i) => (
							<a key={i}>{icon}</a>
						))}
					</div>
				</div>
				<small>{'крупный интегратор CRM\nв Росcии и ещё 8 странах'}</small>
			</div>
		</header>
	)
}
