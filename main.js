function preload()
{
imagee = loadImage('https://i.imgflip.com/76si2c.jpg');
}

function setup()
{
canvas = createCanvas(400, 400)
canvas.center()


}

function draw()
{
    fill(0, 255, 0) 
    rect(30, 20, 300, 55);
    rect(325, 20, 55, 300);
    rect(30, 325, 300, 55);
    rect(30, 20, 55, 300);
    fill(255, 0, 0)
    circle(50, 50, 80);
    circle(350, 50, 80);
    circle(50, 350, 80);
    circle(350, 350, 80);
    image(imagee, 120, 100, 150, 150)
}

function take_snapshot()
{
    save('myFilterImage.png')
}