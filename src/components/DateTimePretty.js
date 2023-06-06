import DateTime from './DateTime';

export default function DateTimePretty({date}) {
	const diff = Date.now() - Date.parse(date)
	const MS_PER_DAY = 24 * 60 * 60 * 1000
	const MS_PER_HOUR = 60 * 60 * 1000
	const MS_PER_MINUTE = 60 * 1000
	const diffDay = diff / MS_PER_DAY
	const diffHour = diff / MS_PER_HOUR
	const diffMinute = diff / MS_PER_MINUTE
	let timestamp = ''
	if (diffDay > 1) {
		timestamp = `${Math.floor(diffDay)} дней назад`
	} else if (diffHour > 1) {
		timestamp = `${Math.floor(diffHour)} часов назад`
	} else {
		timestamp = `${Math.floor(diffMinute)} минут назад`
	}
	return <DateTime date={timestamp}/>
}
