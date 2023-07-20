import { icons } from '../Header/data'
import { companyData, menuData_1, menuData_2 } from './data'
import s from './footer.module.css'

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.footerWrapper}>
			<div className={s.footerContainer}>
				<div className={s.footerSection}>
					<h3 className={s.footerSectionTitle}>о компании</h3>
					<ul className={s.footerList}>
						{companyData.map((d) => (
							<li key={d} className={s.footerListItem}>
								<a>{d}</a>
							</li>
						))}
					</ul>
				</div>
				<div className={s.footerSection}>
					<h3 className={s.footerSectionTitle}>меню</h3>
					<div className={s.footerSectionContainer}>
						<ul className={s.footerList}>
							{menuData_1.map((d) => (
								<li key={d} className={s.footerListItem}>
									<a>{d}</a>
								</li>
							))}
						</ul>
						<ul className={s.footerList}>
							{menuData_2.map((d) => (
								<li key={d} className={s.footerListItem}>
									<a>{d}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className={s.footerContactsSection}>
					<h3 className={s.footerSectionTitle}>контакты</h3>
					<span>+7 555 555-55-55</span>
					<ul className={s.contactsIcons}>
						{icons.map((icon, i) => (
							<li key={i}>{icon}</li>
						))}
					</ul>
					<p>Москва, Путевой проезд 3c1, к 902</p>
				</div>
			</div>
			<div className={s.copyrightBlock}>
				<span>©WELBEX 2022. Все права защищены.</span>
				<a>Политика конфиденциальности</a>
			</div>
			</div>
		</footer>
	)
}
