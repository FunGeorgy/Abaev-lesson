export function AbayContainer(app) {
const contalex = new PIXI.Container();
this.app.stage.addChild(contalex);

// Создаем новую текстуру
const texture = PIXI.Texture.from('assets/abay.jpg');

// Создание сетки 5 на 5 из объектов
for(let i = 0; i < numbersofabaev; i++)
{
const face = new PIXI.Sprite(texture);
face.scale.set(0.05);
// anchor = якорь, точка куда ставится нужный объект
face.anchor.set(0.5);
face.x = (i % 5) * 40;
face.y = Math.floor(i / 5) * 40;
contalex.addChild(face);
}
// размещаем контейнер в центре
contalex.x = 250;
contalex.y = 150;

// размещаем объект в координатах контейнеров (правильный синтаксис)
contalex.pivot.set(contalex.width / 2, contalex.height / 2);
// Проверка(?) обновления анимации
this.app.ticker.add((delta) => 
{
// вращение контейнера
contalex.rotation -= 0.01 * delta;
});}