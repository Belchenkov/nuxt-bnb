export default (dateStr) => {
    return new Date(dateStr).toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
}