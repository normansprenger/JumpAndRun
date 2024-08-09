let level1;

function initLevel() {
    level1 = new Level(
        [
            new SlimeGreen(700),
            new SlimeBlue(900),
            new SlimeGreen(1100),
            new SlimeBlue(1200),
            new SlimeGreen(1400),
            new SlimeBlue(1800),
            new SlimeGreen(2200),
            new SlimeBlue(2600),
            new SlimeGreen(3000),
            new SlimeBlue(3500),
            new Endboss(),
        ],
        [
            new Cloud(30, 20),
            new Cloud(800, 20),
            new Cloud(1300, 20),
            new Cloud(2000, 20),
            new Cloud(2800, 20),
            new Cloud(3500, 20),
            new Cloud(3700, 20),
            new Cloud(4300, 20),

        ],
        [
            new Coin(500, 350),
            new Coin(800, 150),
            new Coin(1100, 250),
            new Coin(1400, 350),
            new Coin(1700, 100),
            new Coin(2000, 310),
            new Coin(2500, 100),
            new Coin(2800, 350),
            new Coin(3100, 250),
            new Coin(3500, 50),
        ],
        [   //1st BG
            new BackgroundObject('img/4_Background/nature_1/1.png', -720, 0),
            new BackgroundObject('img/4_Background/nature_1/2.png', -720, 0),
            new BackgroundObject('img/4_Background/nature_1/3.png', -720, 0),
            new BackgroundObject('img/4_Background/nature_1/5.png', -720, 0),
            new BackgroundObject('img/4_Background/nature_1/6.png', -720, 0),
            new BackgroundObject('img/4_Background/nature_1/7.png', -720, 0),
            new BackgroundObject('img/4_Background/nature_1/8.png', -720, 0),
            //2nd BG
            new BackgroundObject('img/4_Background/nature_1/1.png', 0, 0),
            new BackgroundObject('img/4_Background/nature_1/2.png', 0, 0),
            new BackgroundObject('img/4_Background/nature_1/3.png', 0, 0),
            new BackgroundObject('img/4_Background/nature_1/5.png', 0, 0),
            new BackgroundObject('img/4_Background/nature_1/6.png', 0, 0),
            new BackgroundObject('img/4_Background/nature_1/7.png', 0, 0),
            new BackgroundObject('img/4_Background/nature_1/1st.png', 0, 0),
            //3rd BG
            new BackgroundObject('img/4_Background/nature_1/1.png', 720, 0),
            new BackgroundObject('img/4_Background/nature_1/2.png', 720, 0),
            new BackgroundObject('img/4_Background/nature_1/3.png', 720, 0),
            new BackgroundObject('img/4_Background/nature_1/5.png', 720, 0),
            new BackgroundObject('img/4_Background/nature_1/6.png', 690, 0),
            new BackgroundObject('img/4_Background/nature_1/7.png', 780, 0),
            new BackgroundObject('img/4_Background/nature_1/8.png', 720, 0),
            //4th BG
            new BackgroundObject('img/4_Background/nature_1/1.png', 1420, 0),
            new BackgroundObject('img/4_Background/nature_1/2.png', 1420, 0),
            new BackgroundObject('img/4_Background/nature_1/3.png', 1420, 0),
            new BackgroundObject('img/4_Background/nature_1/5.png', 1420, 0),
            new BackgroundObject('img/4_Background/nature_1/6.png', 1520, 0),
            new BackgroundObject('img/4_Background/nature_1/7.png', 1220, 0),
            new BackgroundObject('img/4_Background/nature_1/8.png', 1420, 0),
            //5th BG
            new BackgroundObject('img/4_Background/nature_1/1.png', 2140, 0),
            new BackgroundObject('img/4_Background/nature_1/2.png', 2140, 0),
            new BackgroundObject('img/4_Background/nature_1/3.png', 2140, 0),
            new BackgroundObject('img/4_Background/nature_1/5.png', 2140, 0),
            new BackgroundObject('img/4_Background/nature_1/6.png', 2000, 0),
            new BackgroundObject('img/4_Background/nature_1/7.png', 2140, 0),
            new BackgroundObject('img/4_Background/nature_1/8.png', 2140, 0),
            //6th BG
            new BackgroundObject('img/4_Background/nature_1/1.png', 2860, 0),
            new BackgroundObject('img/4_Background/nature_1/2.png', 2860, 0),
            new BackgroundObject('img/4_Background/nature_1/3.png', 2860, 0),
            new BackgroundObject('img/4_Background/nature_1/5.png', 2860, 0),
            new BackgroundObject('img/4_Background/nature_1/8.png', 2860, 0),
            //7th BG
            new BackgroundObject('img/4_Background/nature_1/1.png', 3580, 0),
            new BackgroundObject('img/4_Background/nature_1/2.png', 3580, 0),
            new BackgroundObject('img/4_Background/nature_1/3.png', 3580, 0),
            new BackgroundObject('img/4_Background/nature_1/5.png', 3580, 0),
            new BackgroundObject('img/4_Background/nature_1/8.png', 3580, 0),
            //8th BG
            new BackgroundObject('img/4_Background/nature_1/1.png', 4300, 0),
            new BackgroundObject('img/4_Background/nature_1/2.png', 4300, 0),
            new BackgroundObject('img/4_Background/nature_1/3.png', 4300, 0),
            new BackgroundObject('img/4_Background/nature_1/5.png', 4300, 0),
            new BackgroundObject('img/4_Background/nature_1/9.png', 4300, 0),
        ],
    );
}
