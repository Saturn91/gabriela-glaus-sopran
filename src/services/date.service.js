export function formatDate(date, withTime) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let time = '';
    let min0 = date.getMinutes() < 9 ? '0' : '';
    if(withTime) time = `-${date.getHours()}:${min0}${date.getMinutes()}`;
    return `${date.toLocaleDateString(undefined, options)}${time}`;
}