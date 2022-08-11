let traces = document.getElementsByClassName('wordMistery')[0]
let tip = document.getElementById('tipText')
let img = document.getElementsByClassName('imgF')[0]
let errors = 0
let res = document.getElementsByClassName('res-flex')[0]
let response = document.getElementById('res')
let wordRes = document.getElementById('word-res')
let altWord = document.getElementById('word')
let altTip = document.getElementById('tip')
let wordTip = ''
let text = ''
let free = true

let predefined = {
    
    words: [
        ['abacaxi', 'abacate', 'cacau', 'banana', 'cajá', 'durião', 'coco', 'goiaba', 'kiwi', 'melão', 'limão', 'maçã', 'mamão', 'nectarina', 'pera', 'pêssego', 'pitanga', 'romã', 'uva'],
        ['Rio de janeiro', 'são paulo', 'goiânia', 'belo horizonte', 'rio branco', 'salvador', 'brasília', 'fortaleza', 'manaus', 'recife', 'porto alegre', 'guarulhos', 'belém', 'campinas', 'são luís', 'natal', 'teresina', 'osasco'],
        ['lápis', 'caneta', 'batom', 'televisão', 'monitor', 'cabo', 'tesoura'],
        ['algodão-doce', 'ameixa-preta', 'batata-doce', 'maria-mole', 'cachorro-quente', 'couve-flor', 'feijoada'],
        ['wi-fi', 'smartphone', 'computador', 'programação', 'nanotecnologia', 'globalização', 'internet', 'videogame'],
        ['cosmos', 'galáxia', 'buraco negro', 'planetas', 'estrelas', 'sátelites naturais', 'poeira cósmica'],
        ['pessoas', 'região', 'penhasco', 'floresta', 'montanhas', 'plantações', 'fazenda', 'animais', 'fauna e flora'],
        ['beija-flor', 'abelha', 'alpaca', 'andorinha', 'arara', 'avestruz', 'antílope', 'babuíno', 'bem-te-vi', 'borboleta', 'boto', 'burro', 'cachalote', 'cágado', 'camaleão', 'camelo', 'camundongo', 'canário', 'canguru', 'caranguejo', 'cavalo-marinho', 'chimpanzé', 'cisne', 'coelho', 'dinossauro', 'dragão-de-komodo', 'elefante', 'escorpião', 'estrela-do-mar', 'flamingo', 'fraca-da-guiné', 'freijinha', 'gafanhoto', 'gavião', 'galinha', 'golfinho', 'guaxinim', 'hipopótamo', 'itapema', 'jararaca', 'jão-de-barro', 'kowari', 'lagartixa', 'leã-marinho', 'leopardo', 'macaco', 'mamute', 'mariposa', 'meduza', 'morcego', 'nhacundá', 'noitibó', 'orangotango', 'ouriço-do-mar', 'ovelha', 'pássaro', 'papagaio', 'pica-pal', 'peixe-boi', 'porco-espinho', 'preguiça']
    ],
    tips: [['fruta'],['cidade'],['objeto'],['comida'],['tecnologia'],['universo'],['planeta terra'],['animal']]
}

function choice(){
    
     wordTip = add()
     text = att()
    
     letersTraceAndTip(wordTip)
}
function add(){
    let alternativeWord = altWord.value
    let alternativeTip = altTip.value
    if(alternativeTip == undefined || alternativeWord == undefined){
        alternativeTip = ''
        alternativeWord = ''
    }
    
    if(alternativeTip != '' && alternativeWord != ''){

        alternativeWord.trim()
        alternativeTip = alternativeTip.trim()
        const noNumbers = (value) =>{
            value.replace(/[0-9]/g, '')
            return value
        } 
        alternativeTip = noNumbers(alternativeTip)
        alternativeWord = noNumbers(alternativeWord)
    }
    
    
    if(alternativeTip != '' && alternativeWord != ''){
        return [alternativeTip, alternativeWord]
    }
    else{
        let w = wordMistery(predefined)
        return w
    }
}
//retona a palavra e a dica de um obj com 2 arrays words, tips
function freeKeybord(){
    free = !free
}
function wordMistery(obj){
    
    let theme = Math.round(Math.random() * obj.words.length)
    
    if(theme > 0){
        theme -= 1
    
    }

    let index = (Math.round(Math.random() * obj.words[theme].length))
    
    if(index > 0){
        index -= 1
    }

    let word = obj.words[theme][index]
    let tip = obj.tips[theme][0]
 
    
    return  [tip, word]
}
function letersTraceAndTip(wordAndTip){
    
    let tipText =  wordAndTip[0]
    let word = wordAndTip[1].toLowerCase()
    let wordNormalized = normalize(word)

    tip.innerHTML = 'Dica: '+  tipText.toLowerCase() 
    clear()
    for(i = 0; i < word.length; i++){

        if(wordNormalized[i].match(/[A-Z]/i)){
            traces.innerHTML += `<div class="trace"></div>`; //`<div class="trace">${word[i]}</div>`;
        }
        if(word[i] == '-'){
            traces.innerHTML += '<div class="space"><div class="ifen"></div></div>';
        }
        if(word[i] == ' '){
            traces.innerHTML += '<div class="space"></div>';
        }
    }
   
    
}
function clear(){
              
    traces.innerHTML = ''
}

function normalize(msg){
    return msg.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
function containsSpecialChars(str) {
    const specialChars = /[`´!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}
function att(){
    text = normalize(wordTip[1])
    text = text.split('-').join('')
    text = text.split(' ').join('')
    return text
}
function keybord(key){

    if(free){
        
        let keyString = key
        let word = normalize(wordTip[1])
        let wordAsci = wordTip[1]
        let leters = document.getElementsByClassName('trace')
        
        const isNumeric = (value) => {
            return /^-?\d+$/.test(value);
        }

        wordAsci = wordAsci.split('-').join('')
        wordAsci = wordAsci.split(' ').join('')
        word = word.split('-').join('')
        word = word.split(' ').join('')
        
        if(keyString == 'ç'){
            keyString = 'c'
        }

        if(!isNumeric(keyString) && !containsSpecialChars(keyString)){
            
            if(word.includes(`${keyString}`)){
                
                for(i = 0; i < word.length; i++){
                    if(word[i] == keyString){
                        
                        leters[i].innerHTML = wordAsci[i]
                        
                        text = text.split(word[i]).join('')
                        
                        if(text == '' && errors < 6){
                            endGame(false, wordTip[1])
                        }
                    }
                }
            }else{
                
                errors++
                if(errors <= 6){
                    img.style.backgroundImage = `url('src/images/forca/forca${errors}.svg')`  
                }
                if(errors == 6){
                    endGame(true, wordTip[1])
                }
            }
        }

    }  
}
function endGame(bollean, word){
    if(bollean){
        res.classList.toggle('hidden')
        res.classList.add('lose')
        response.innerHTML = 'Você Foi Enforcado!'
        wordRes.innerHTML = `A palavra era: <a href="https://pt.wikipedia.org/wiki/${word}">${word}</a>`

    }else{
        res.classList.toggle('hidden')
        wordRes.innerHTML = `A palavra era: <a href="https://pt.wikipedia.org/wiki/${word}">${word}</a>`
    }
}
document.body.addEventListener('keypress', function (event) {
    const key = event.key;
    keybord(key)
});
function reload(){
    location.reload();
}
choice()
// letersTraceAndTip(wordTip)