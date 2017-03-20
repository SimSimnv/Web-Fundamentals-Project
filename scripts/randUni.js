function startApp(){

    let verbs=['ближат','пиянстват','мързелуват','дъртеят','зяпат','тъпеят'];
    let action=['пиене','спане','мързелуване'];
    let noun=['бира','отлежала ракия','мързел'];
    let nouns=['изхабени бъбреци','анаболи'];
    let adjective=['селски','неадекватен','бавен','бъгав','секси'];
    let adjectives=['мързеливи','мускулести', 'възбудени','криминални','скандални','миризливи'];
    let people=['майка ти', 'баба ти', 'стринка ти'];

    function getRandomWord(wordsArray){
        let randNum= Math.floor(Math.random() * wordsArray.length);
        return wordsArray[randNum];
    }

    function randomizeWords(){
        let words=$('.random-word');
        for(let word of words){
            let className= $(word).attr('class').split(' ')[1];
            let randomWord='';
            switch (className){
                case 'noun':
                    randomWord=getRandomWord(noun);
                    break;
                case 'nouns':
                    randomWord=getRandomWord(nouns);
                    break;
                case 'action':
                    randomWord=getRandomWord(action);
                    break;
                case 'adjectives':
                    randomWord=getRandomWord(adjectives);
                    break;
                case 'adjective':
                    randomWord=getRandomWord(adjective);
                    break;
                case 'verbs':
                    randomWord=getRandomWord(verbs);
                    break;
                case 'people':
                    randomWord=getRandomWord(people);
                    break;
            }
            $(word).text(randomWord);
        }
    }
    $('.randomize-btn').on('click',randomizeWords);
    randomizeWords();
}