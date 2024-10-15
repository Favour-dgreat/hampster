window.scrollTo(0, 0);
function copyPress(copy) {
    copy ? navigator.clipboard.writeText(copy) : console.log('error copy');
}