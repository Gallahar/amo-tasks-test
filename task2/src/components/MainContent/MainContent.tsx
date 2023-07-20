import { useMediaQuery } from '../../lib/hooks/useMediaQuery'
import s from './mainContent.module.css'

export const MainContent = () => {
	const isMobile = useMediaQuery('(max-width:760px)')

	return (
		<section className={s.main}>
			<div className={s.mainContainer}>
				<div className={s.mainLeft}>
					<div className={s.leftTitle}>
						<h1>
							Зарабатывайте больше
							<br />
							<span className={s.grText}>c WELBEX</span>
						</h1>
					</div>
					<h3 className={s.leftSubtitle}>
						Развиваем и контролируем продажи за вас
					</h3>
				</div>
				<div className={s.mainRight}>
					<h2 className={s.rightTitle}>
						Вместе c <span>бесплатной консультацией</span> мы дарим:
					</h2>
					<div className={s.infoBlock}>
						<div className={s.infoItem}>
							<h4 className={s.infoItemTitle}>
								{isMobile ? 'Skype аудит' : 'Виджеты'}
							</h4>
							<p className={s.infoItemText}>30 готовых решений</p>
						</div>
						<div className={s.infoItem}>
							<h4 className={s.infoItemTitle}>
								{isMobile ? '30 виджетов' : 'Dashboard'}
							</h4>
							<p className={s.infoItemText}>с показателями вашего бизнеса</p>
						</div>
						<div className={s.infoItem}>
							<h4 className={s.infoItemTitle}>
								{isMobile ? 'Dashboard' : 'Skype Аудит'}
							</h4>
							<p className={s.infoItemText}>отдела продаж и CRM системы</p>
						</div>
						<div className={s.infoItem}>
							<h4 className={s.infoItemTitle}>
								{isMobile ? 'Месяц amoCRM' : '35 дней'}
							</h4>
							<p className={s.infoItemText}>использования CRM</p>
						</div>
					</div>
				</div>
			</div>
			<button className={s.getConsultation}>Получить консультацию</button>
		</section>
	)
}
