import { useState, useRef, ChangeEvent, useEffect } from 'react'

interface TimerReturn {
	seconds: string
	sanitatedSeconds: number
	handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
	handleClickStart: () => void
	handleClickReset: () => void
	handleClickPause: () => void
}

export const useTimer = (speed?: number): TimerReturn => {
	const [seconds, setSeconds] = useState('')
	const [sanitatedSeconds, setSanitatedSeconds] = useState(0)
	const timerRef = useRef<ReturnType<typeof setInterval>>(0)

	const createTimerAnimator = (sec: number) => {
		setSeconds('')
		if (!sec) return alert('пожалуйста, введите секунды')
		timerRef.current = setInterval(() => {
			setSanitatedSeconds(sec - 1)
			sec = sec - 1
			if (sec === 0) clearInterval(timerRef.current)
		}, speed || 1000)
	}

	const handleClickReset = () => {
		clearInterval(timerRef.current)
		setSanitatedSeconds(0)
	}

	const handleClickPause = () => {
		clearInterval(timerRef.current)
	}

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSeconds(e.target.value)
		setSanitatedSeconds(+e.target.value.replace(/[^0-9]*/g, ''))
	}

	useEffect(() => {
		return () => clearInterval(timerRef.current)
	}, [])

	return {
		seconds,
		sanitatedSeconds,
        handleClickStart:()=>createTimerAnimator(sanitatedSeconds),
		handleClickReset,
		handleClickPause,
		handleChangeInput,
	}
}
