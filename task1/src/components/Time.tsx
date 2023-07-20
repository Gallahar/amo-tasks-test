import { FC } from 'react'
import { getTimeFromSeconds } from '../lib/utils/getTimeFromSeconds'

interface TimeProps {
	seconds: number
}

export const Time: FC<TimeProps> = ({ seconds }) => {
	const { hoursStr, minutesStr, secondsStr } = getTimeFromSeconds(seconds)

	return (
		<span>
			{+hoursStr > 24
				? 'Ведите время меньше 24 часов в секундах'
				: `${hoursStr}:${minutesStr}:${secondsStr}`}
		</span>
	)
}
