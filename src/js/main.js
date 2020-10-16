import * as PIXI from 'pixi.js'
import anime from 'animejs'
import {app} from '../js/applicationtype.js'
import {Animation} from '../js/compilator.js'

document.body.appendChild(app.view);
const v = 'assets/images/abay1.jpg'
const s = 'assets/images/bunny.png'
const y = 'assets/images/dick.png'
const x = 'assets/images/abay.jpg'
let animation = new Animation(app, v, s, y, x);
const container = new PIXI.Container();
const sprite = PIXI.Sprite.from(x);
const sprites = [x,y,s,v];
const picture = [];
const buggys = [];
for(let i = 0; i < sprites.length; i++)
{
  const sprited = PIXI.Sprite.from(sprites[i]);
  sprited.tint = Math.random() * 0x1F75FE;
  container.addChild(sprited);
  picture.push(sprited);
}
sprite.scale.set(0.05);
sprite.anchor.set(0.5);
container.scale.set(0.25);
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;
sprite.interactive = true;
sprite.buttonmode = true;
sprite.on('pointerdown', onClick);
app.stage.addChild(container);
app.stage.addChild(sprite);
// for(let i = 0; i < 100; i++)
// {
// const buggy = PIXI.Sprite.from(s);
// buggy.tint = Math.random() * 0xFFFFFF;
// byggy.x =  Math.random() * 800 - 400;
// byggy.y = Math.random() * 600 - 300;
// byggy.anchor.x = 0.5;
// byggy.anchor.y = 0.5;
// buggys.push(buggy)
// app.stage.addChild(byggy);
// }

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
let i = 0;

function onClick() {
     
    sprite.scale.x *= 1.25;
    sprite.scale.y *= 1.25;
    animation.RemoveState();
    if(i == 0){
    sprite.alpha += 0.25;
    animation.BlendModes();
    }
    else if(i == 1){
    sprite.alpha -= 0.25;
    animation.ManyGuys();}
    else if(i == 2)
    {animation.ParticleContainer();
    sprite.alpha -= 0.25;}
    else if(i == 3){
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;
    sprite.alpha -= 0.25;
     animation.RotationAbovePoint();
    }
    else if(i == 4){
      sprite.scale.x /= 1.25;
      sprite.scale.y /= 1.25;
      sprite.alpha -= 0.25;}
     //animation.ZoomRotation();   
    else if(i == 5)   
     {animation.CenterGuy();
     sprite.x = app.screen.width / 2;
     sprite.y = app.screen.height / 2;
     sprite.alpha -= 0.25;}
    else
    {
    i = 0;
    sprite.alpha = 1;
    sprite.scale.set(0.05);
    console.log('размер абаева',sprite.scale.x, sprite.scale.y);
    }
    i++;
    

app.stage.addChild(container);
app.stage.addChild(sprite);

}
console.log('спрайт', sprite);
// anime({
//   targets:[sprite],
//     x: {
//     value: 500,
//     duration: 1000
//   },
//   easing: 'easeInOutQuad',
//   duration: 500,
//   easing: 'linear',
//   direction: 'alternate',
//   rotation: 36,
//   loop: true,
  
// })

// anime({
//   targets:[picture[0]],
//     x: {
//     value: -500,
//     duration: 1000
//   },
//   y:{
//     value:1000,
//     duration: 1000
//   },
//   easing: 'easeInOutQuad',
//   duration: 500,
//   easing: 'linear',
//   direction: 'alternate',
//   rotation: 2,
//   loop: true,
// })
// anime({
//   targets:[picture[1]],
//     x: {
//     value: -500,
//     duration: 500
//   },
//   y:{
//     value:200,
//     duration: 500
//   },
//   easing: 'easeInOutQuad',
//   duration: 300,
//   easing: 'linear',
//   direction: 'alternate',
//   loop: true,
// })

// // for(let i = 0; i < 100; i++)
// // {
// //   anime({
// //     targets:[buggys[i]],
// //       x: {
// //       value: Math.Random() *800 - 400,
// //       duration: Math.Random() + 200,
// //     },
// //     y:{
// //       value: Math.Random() *600 - 300,
// //       duration: Math.Random() + 200,
// //     },
// //     duration: 300,
// //     easing: ('steps([0])',Math.Random() + 2),
// //     direction: 'alternate',
// //     rotation: Math.Random() + 10,
// //     loop: true,
// //     alpha: 0.4,
// //   })
// // }

// anime({
//   targets:[picture[4]],
//     x: {
//     value: -350,
//     duration: 1000
//   },
//   y:{
//     value:-400,
//     duration: 1000
//   },
//   easing: 'easeInOutQuad',
//   duration: 300,
//   easing: 'steps(5)',
//   direction: 'alternate',
//   loop: true,
// })

// anime({
//   targets:[picture[4]],
//     x: {
//     value: 400,
//     duration: 500
//   },
//   y:{
//     value: 400,
//     duration: 1000
//   },
//   easing: 'easeInOutQuad',
//   duration: 1000,
//   direction: 'alternate',
//   loop: true,
// })

// const app = new PIXI.Application();
