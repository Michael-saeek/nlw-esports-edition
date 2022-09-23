// 1080  -> to hours   

/*  method split retorna strings */

export function convertMinutesToHours (minuts: number) {

    const hours = Math.floor(minuts / 60)
    const minutes = minuts % 60

    return `${hours}: ${minutes}`
}