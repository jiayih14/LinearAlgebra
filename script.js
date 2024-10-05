
//importing


// graphing feature

const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');
const height = canvas.height;
const width = canvas.width;
const scale = 20;

function clear(){
    // clear the canvas
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
}

function drawAxes(){

    // draw the axis of the graph

    ctx.beginPath();
    // drawing the x - axis
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);

    // drawing the y - axis
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);

    // color and draw
    ctx.strokeStyle = 'black';
    ctx.stroke();
}


function plotFunction(equation){

    
    // plotting the function
    ctx.beginPath();
    for( let x = - width / 2; x < width / 2; x++){
        const y = math.evaluate(equation, {x: x / scale}); // evaluate the equation based on virtual graph
        ctx.lineTo(x + width / 2, height / 2 - y * scale); // drawing lines for the x, y to correspond to the actual graph
    }

    ctx.strokeStyle = 'red';
    ctx.stroke();

}

function reset(){
        clear();
        drawAxes();
}
function main(){
// add action listener to the plot button

reset(); 

document.getElementById('plotButton')
.addEventListener(
    'click', () => {
        const equation = document.getElementById('functionInput').value;
        console.log(`Equation to plot: ${equation}`);
        plotFunction(equation);
    }
);


}

main();