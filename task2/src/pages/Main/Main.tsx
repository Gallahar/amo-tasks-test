import { IconBallBig } from '../../assets/icons/IconBallBig'
import { IconBallMedium } from '../../assets/icons/IconBallMedium'
import { IconBallSmall } from '../../assets/icons/IconBallSmall'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { MainContent } from '../../components/MainContent/MainContent'
import s from './main.module.css'

export const Main = () => {
	return (
		<main className={s.mainWrapper}>
			<IconBallBig className={s.ballBig} />
			<IconBallMedium className={s.ballMedium} />
			<IconBallSmall className={s.ballSmall} />
			<div className={s.Ellipse1} />
			<div className={s.Ellipse2} />
			<Header />
			<MainContent />
			<Footer />
		</main>
	)
}
