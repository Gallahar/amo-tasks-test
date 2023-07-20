import { Time } from '../components/Time'
import { useTimer } from '../lib/hooks/useTimer'

export const Main = () => {
	const {
		handleChangeInput,
		handleClickPause,
		handleClickReset,
		handleClickStart,
		sanitatedSeconds,
		seconds,
	} = useTimer()

	return (
		<>
			<input
				value={seconds}
				onChange={handleChangeInput}
				placeholder='Seconds'
				type='text'
			/>

			<button onClick={handleClickStart}>Start</button>
			<button onClick={handleClickPause}>Pause</button>
			<button onClick={handleClickReset}>Reset</button>

			<br />
			<br />

			<Time seconds={sanitatedSeconds} />
		</>
	)
}
