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
}

const audioConstants = {
    zeroTime: '00:00',
    iconStart: "play",
    iconPause: "pause",
    iconVolumeUp: 'volume-up',
    iconVolumeOff: 'volume-off',
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

const gameEndBlock = {
    hightScore: 30,
    congratulations: 'Поздравляем',
    scoreInformation: (score) => `Вы прошли викторину и набрали ${score} из 30 возможных баллов`,
    repeatButtonName: 'Попробовать еще раз',
    winCongratulations: 'ХЭЙ',
    winInformation: 'Вы выйграли и набрали максимальный балл!!!',
    winJoke: 'Вы точно не друид?',
}

export {
    headerContent,
    questionBlockContent,
    audioConstants,
    nextLvlButton,
    appConstants,
    birdDescriptionBlock,
    gameEndBlock,
};