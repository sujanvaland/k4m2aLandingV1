// Utility to convert 'MM/DD/YYYY HH:mm:ss' to 'Month DD, YYYY'
export function formatToLongDate(dateTimeString) {
    // Extract only the date part
    const [datePart] = dateTimeString.split(' ');
    const [month, day, year] = datePart.split('/');
    const dateObj = new Date(`${year}-${month}-${day}`);
    if (isNaN(dateObj.getTime())) return null;
    return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    });
} 