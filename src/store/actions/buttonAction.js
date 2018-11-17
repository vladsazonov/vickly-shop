
export const BUTTON_ACTION="BUTTON_ACTION";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



export default function changeButtonColor() {

    return {
        type: BUTTON_ACTION,
        color: getRandomColor()
    };
}
