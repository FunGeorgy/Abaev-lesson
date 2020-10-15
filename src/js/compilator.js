import * as PIXI from 'pixi.js'
import anime from 'animejs/lib/anime.es.js'

export class Animation extends PIXI.Container{
constructor(app, directory1, directory2, directory3, directory4) {
    super();
    this.app = app;
    this.directory1 = directory1;
    this.directory2 = directory2;
    this.directory3 = directory3;
    this.directory4 = directory4;
}
Rotation() {
    document.body.appendChild(this.app.view);
 
    const contalex = new PIXI.Container();
    this.app.stage.addChild(contalex);
   
   // Создаем новую текстуру
   const texture = PIXI.Texture.from(this.directory1);
   
   // Создание сетки 5 на 5 из объектов
   for(let i = 0; i < 25; i++){
   const face = new PIXI.Sprite(texture);
   face.scale.set(0.05);
   // anchor = якорь, точка куда ставится нужный объект
   face.anchor.set(0.5);
   face.x = (i % 5) * 40;
   face.y = Math.floor(i / 5) * 40;
   contalex.addChild(face);}
   // размещаем контейнер в центре
   contalex.x = 250;
   contalex.y = 150;
   
   // размещаем объект в координатах контейнеров (правильный синтаксис)
   contalex.pivot.set(contalex.width / 2, contalex.height / 2);
   // Проверка(?) обновления анимации
   this.app.ticker.add((delta) => {
   // вращение контейнера
   contalex.rotation -= 0.01 * delta;
   });
}
RotationAbovePoint(){
const texture = PIXI.Texture.from(this.directory1);
const bunny = new PIXI.Sprite(texture);
const texture2 = PIXI.Texture.from(this.directory2);
const bunny2 = new PIXI.Sprite(texture2);
bunny.anchor.set(0,1);
bunny.x = 160
bunny.y = 160 
const bunnyCont = new PIXI.Container();
bunnyCont.pivot.set(0.5, 0);
bunnyCont.x = 200;
bunnyCont.y = 200;
bunnyCont.width = 500;
bunnyCont.height = 300;
bunnyCont.scale.set(0.5);


bunny2.anchor.set(0.5);
bunny2.x = 160;
bunny2.y = 100;
bunnyCont.addChild(bunny, bunny2)
this.app.stage.addChild(bunnyCont);

this.app.ticker.add((delta) => {
  bunnyCont.rotation -= 0.01 * delta;
  bunny2.rotation += 0.01*delta;
});
}
CenterGuy(){
    // создаем новый спрайт
document.body.appendChild(this.app.view);
const abayface = PIXI.Sprite.from(this.directory1);
const abayContainer = new PIXI.Container;

// централизуем точку спрайта

abayface.anchor.set(0.5);

// централизуем спрайт по экрану
abayContainer.addChild(abayface);
abayContainer.x = this.app.screen.width / 2;
abayContainer.y = this.app.screen.height / 2;
abayface.pivot.set(abayface.width / 2,abayface.height / 2);
console.log('w:', this.app.screen.width,'h:', this.app.screen.height)
console.log('x ab:', abayContainer.x,'y ab:', abayContainer.y)
abayface.scale.set(0.2)
this.app.stage.addChild(abayContainer);

this.app.ticker.add(() =>
{
  abayContainer.rotation += 0.1;
});

}
ManyGuys(){
document.body.appendChild(this.app.view);
const freaks = [];
const totalguys = 25;
for(let i = 0; i < totalguys; i++ ) {
  const freak = PIXI.Sprite.from(this.directory1);
  freak.anchor.set(0.5);
  freak.scale.set(0.8 + Math.random() * 0.3);
  freak.x = Math.random() * this.app.screen.width;
  freak.y = Math.random() * this.app.screen.height;
  freak.tint = Math.random() * 0xFFFFFF;
  freak.direction = Math.random() * Math.PI * 2;
  freak.turningSpeed = Math.random() - 0.8;
  freak.speed = 2 + Math.random() * 2;
  freaks.push(freak);
  this.app.stage.addChild(freak);
}
const freakbox = 100;
const freakboxes = new PIXI.Rectangle(-freakbox,
  -freakbox,
  this.app.screen.width + freakbox * 2,
  this.app.screen.height + freakbox * 2);
this.app.ticker.add(() => {
  for(let i = 0; i < freaks.length; i++)
  { const freakk = freaks[i];
    freaks[i].scale.set(0.05);
    freakk.direction += freakk.turningSpeed * 0.01;
    freakk.x += Math.sin(freakk.direction) * freakk.speed;
    freakk.y += Math.cos(freakk.direction) * freakk.speed;
    freakk.rotation = -freakk.direction - Math.PI / 2;
    if (freakk.x < freakboxes.x)
    freakk.x += freakboxes.width;
    else if (freakk.x > freakboxes.x + freakboxes.width)
    freakk.x -= freakboxes.width;
    if (freakk.y < freakboxes.y)
    freakk.y += freakboxes.height;
    else if (freakk.y > freakboxes.y + freakboxes.height)
      freakk.y -= freakboxes.height;
  }
})
}
ZoomRotation(){  
    document.body.appendChild(this.app.view);
    this.app.stop(); 
    this.app.loader
    .add('assets/')
    .load(onAssetsLoaded);  
    const faces = [];
    const facesFrames = [this.directory1,this.directory2,this.directory3,this.directory4];  
    let count = 0; 
    app1 = this.app; 
    const faceContainer = new PIXI.Container();
    faceContainer.x = 200;
    faceContainer.y = 300;  
    this.app.stage.interactive = true;
    this.app.stage.addChild(faceContainer);  
    function onAssetsLoaded() {
        for(let i = 0; i < 100; i++) {
          const frameName = facesFrames[i % 4]
          var texture = PIXI.Texture.from(frameName);
          var human = new PIXI.Sprite(texture);
          human.tint = Math.random() * 0xFFFFFF;
          human.x = Math.random() * 800 - 400;
          human.y = Math.random() * 600 - 300;
          human.anchor.x = 0.5;
          human.anchor.y = 0.5;
          faces.push(human);
          faceContainer.addChild(human);  
        }
        app1.start();
      }
      
      this.app.stage.on('pointertap', onClick);
      
      //Не работает функцию по прекращению анимации, хз почему надо бы разобраться) 
      
      function onClick() 
      {
        faceContainer.cacheAsBitmap = !faceContainer.cacheAsBitmap;
      }
      
      this.app.ticker.add(() => {
        for (let i = 0; i < 100; i++)
        {
        const human = faces[i];
        human.rotation +=0.1;
        }
      
      count += 0.01;
      
      faceContainer.scale.x = Math.sin(count);
      faceContainer.scale.y = Math.sin(count);
      faceContainer.rotation += 0.01;
      });
}
ParticleContainer(){
document.body.appendChild(this.app.view);
const sprites = new PIXI.ParticleContainer(10000, {
  scale: true,
  position: true,
  rotation: true,
  uvs: true,
  alpha: true,
});
this.app.stage.addChild(sprites);

const faces = [];

const totalSprites = this.app.renderer instanceof PIXI.Renderer ? 1000 : 100;

for (let i = 0; i < totalSprites; i++)
{
  const texture = PIXI.Texture.from(this.directory2);
  const face = PIXI.Sprite.from(texture);
  face.tint = Math.random() * 0xE8D4CD;
  face.anchor.set(0.5);
  face.scale.set(0.3 + Math.random());
  face.x = Math.random() * this.app.screen.width;
  face.y = Math.random() * this.app.screen.height;
  face.tint = Math.random() * 0x808080;
  face.direction = Math.random() * Math.PI * 2;
  face.turningSpeed = Math.random() - 0.8;
  face.speed = (2 + Math.random() * 2);
  face.offset = Math.random()*100;
  faces.push(face);
  sprites.addChild(face);
}
console.log(totalSprites);
const faceBoundsPadding = 100;
const faceBounds = new PIXI.Rectangle(
  -faceBoundsPadding,-faceBoundsPadding,this.app.screen.width + faceBoundsPadding * 2, this.app.screen.height + faceBoundsPadding * 2,
);

let tick = 0;

this.app.ticker.add(() => 
{
  for(let i = 0; i < faces.length; i++)
  {
    const face1 = faces[i];
    face1.scale.y = 0.95 + Math.sin(tick + face1.offset) * 0.05;
    face1.direction += face1.turningSpeed * 0.01;
    face1.x += Math.sin(face1.direction) * (face1.speed * face1.scale.y);
    face1.y += Math.cos(face1.direction) * (face1.speed * face1.scale.y);
    face1.rotation = -face1.direction + Math.PI;

    if(face1.x < faceBounds.x) 
    {
      face1.x += faceBounds.width;
    }
    else if(face1.x > faceBounds.x + faceBounds.width)
    {
      face1.x -= faceBounds.width;
    }

    if (face1.y < faceBounds.y)
    {
      face1.y += faceBounds.height;
    }
    else if(face1.y > faceBounds.y + faceBounds.height)
    {
      face1.y -= faceBounds.height;
    }
  }
  tick += 0.1;
});
}
BlendModes(){
    document.body.appendChild(this.app.view);
const backgroung = PIXI.Sprite.from('assets/unnamed.jpg');
backgroung.width = this.app.screen.width;
backgroung.height = this.app.screen.height;
this.app.stage.addChild(backgroung);

const faces = [];

const totalfaces = 20;

for(let i = 0; i < totalfaces; i++)
{
  const face = PIXI.Sprite.from(this.directory1);
  face.anchor.set(0.5);
  face.scale.set(0.8 + Math.random() * 0.3);
  face.x = Math.floor(Math.random() * this.app.screen.width);
  face.y = Math.floor(Math.random() * this.app.screen.height);
  face.blendMode = PIXI.BLEND_MODES.ADD;
  face.direction = Math.random()*Math.PI * 2;
  face.turningSpeed = Math.random() - 0.8;
  face.speed = 2 + Math.random() * 2;
  faces.push(face);
  this.app.stage.addChild(face);
}

const faceBoundsPadding = 100;
const faceBounds = new PIXI.Rectangle(
  -faceBoundsPadding,
    -faceBoundsPadding,
    this.app.screen.width + faceBoundsPadding * 2,
    this.app.screen.height + faceBoundsPadding * 2,
);

this.app.ticker.add(() =>
{
  for(let i = 0; i < faces.length; i++)
  {
    const face1 = faces[i];
    face1.direction += face1.turningSpeed * 0.01;
    face1.x += Math.sin(face1.direction) * face1.speed;
    face1.y += Math.cos(face1.direction) * face1.speed;
    face1.rotation = -face1.direction - Math.PI/2;
    if(face1.x < faceBounds.x)
    {
      face1.x += faceBounds.width;
    }
    else if (face1.x > faceBounds.x + faceBounds.width)
    {
      face1.x -= faceBounds.width;
    }

    if(face1.y < faceBounds.y)
    {
      face1.y += faceBounds.height;
    }
    else if (face1.y > faceBounds.y + faceBounds.height)
    {
      face1.y -= faceBounds.height;
    }
  }
});
}
RemoveState(){
  for (var i = this.app.stage.children.length - 1; i>= 0; i--)
  {
  this.app.stage.removeChild(this.app.stage.children[i]);
  }
}
}