import * as PIXI from 'pixi.js'

export const app = new PIXI.Application({
    width: window.innerWidth/2,
    height: window.innerHeight/2,
    backgroundColor: 0x1099bb,
    view: document.querySelector('#scene'),
    resolution: window.devicePixelRatio || 1, 
});

