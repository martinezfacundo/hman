const angletoradian = (angle) => {
    return angle * (Math.PI / 180)
}

const radius = 100;
const diameter = radius*2;

const circle = document.getElementsByClassName('circular-text')[0]

circle.style.width = `${diameter}px`;
circle.style.height = `${diameter}px`;

const text = circle.innerText;
const characters = text.split('');
circle.innerText = null;

let angle = -90;

const deltaAngle = 360/characters.length;

characters.forEach((char,index) => {
    const charElement = document.createElement('span');
    charElement.innerText = char;
    const xpos = radius * Math.cos(angletoradian(angle));
    const ypos = radius * Math.sin(angletoradian(angle));

    const transform = `translate(${xpos}px, ${ypos}px)`;
    const rotate = `rotate(${index * deltaAngle}deg)`;
    charElement.style.transform = `${transform} ${rotate}`;

    angle += deltaAngle;
    circle.appendChild(charElement);
});