type getTimeFromSecondsReturn = {
	hoursStr: string 
	minutesStr: string 
	secondsStr: string 
}

export const getTimeFromSeconds = (
	seconds: number
): getTimeFromSecondsReturn => {
	let minutes = Math.floor(seconds / 60)
	const hours = Math.floor(minutes / 60)
	minutes = minutes - hours * 60
	seconds = seconds - (minutes + hours * 60) * 60

	return {
		hoursStr: hours > 9 ? `${hours}` : `0${hours}`,
		minutesStr: minutes > 9 ? `${minutes}` : `0${minutes}`,
		secondsStr: seconds > 9 ? `${seconds}` : `0${seconds}`,
	}
}
