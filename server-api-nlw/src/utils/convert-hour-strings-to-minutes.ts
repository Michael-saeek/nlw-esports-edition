// 18:00 ->  convert to 1080    

/*  method split retorna strings */

export function convertHourToMinutes (hourString: string) {

    const [ hours, minutes ] = hourString.split(':').map(Number)

    const minutesAmount = (hours * 60) + minutes
    return minutesAmount
}