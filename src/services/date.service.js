export function formatDate(date, withTime) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let time = '';
    if(withTime) time = `-${date.getHours()}:${date.getMinutes()}`;
    return `${date.toLocaleDateString(undefined, options)}${time}`;
}