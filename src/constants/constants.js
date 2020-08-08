const headerContent = {
    navigationNames: [
        "Разминка",
        "Воробьиные",
        "Лесные птицы",
        "Певчие птицы",
        "Хищные птицы",
        "Морские птицы",
    ],
    scroe: "Score",
    logo: "SongBird",
}

const questionBlockContent = {
    misteryText: "*****",
    defaultImageWay: './src/assets/images/random-bird.jpg',
}

const audioConstants = {
    zeroTime: '00:00',
    iconStart: "play",
    iconPause: "pause",
}

const nextLvlButton = {
    name: "Next Level",
}

const appConstants = {
    birdsInOneBox: 6,
    hightestScoreForLvl: 5,
}

const birdDescriptionBlock = {
    defaultText: 'Послушайте плеер.\nВыберите птицу из списка',
}

export {
    headerContent,
    questionBlockContent,
    audioConstants,
    nextLvlButton,
    appConstants,
    birdDescriptionBlock,
};