export function convertTime(postedAtTimestamp) {
    const now = Math.floor(Date.now() / 1000);
    const differenceInSeconds = now - postedAtTimestamp;

    const secondsInDay = 86400;
    const secondsInWeek = 604800;
    const secondsInMonth = 2592000;

    if (differenceInSeconds >= secondsInMonth) {
        const monthsPassed = Math.floor(differenceInSeconds / secondsInMonth);
        return `${monthsPassed}mo ago`;
    } else if (differenceInSeconds >= secondsInWeek) {
        const weeksPassed = Math.floor(differenceInSeconds / secondsInWeek);
        return `${weeksPassed}w ago`;
    } else if (differenceInSeconds >= secondsInDay) {
        const daysPassed = Math.floor(differenceInSeconds / secondsInDay);
        return `${daysPassed}d ago`;
    }
}


