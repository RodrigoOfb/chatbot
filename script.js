clicou = false

function iHaveTelegram() { }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ola() {
    var text1 = "Opa, me chamo André, tudo bem com você?"
    addTextInChat(text1);

    setTimeout(addImg, text1.length * 40 + 1000, './perfil.png')

    var text2 = "Talvez você me conheça pelas minhas redes sociais, onde eu tenho quase 700.000 pessoas que me acompanham diariamente..."
    setTimeout(addTextInChat, (text1.length * 40) + 2000, text2);

    var text3 = "É o seguinte... Existe uma plataforma secreta totalmente gratuita que está virando febre e fazendo os brasileiros lucrarem apenas com o celular... 🤑"
    setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + 2000, text3);

    var text4 = "Eu vou te ensinar a ganhar R$100,00 nos próximos 15 minutos de graça!"
    setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + 2000, text4);

    var text5 = "Mas antes, eu quero que saiba que..."
    setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + 2000, text5);

    var text6 = "Eu não sou mais um desses gurus da internet que só arrancam o seu dinheiro!"
    setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + 2000, text6);

    var text7 = "Assim como você, eu já vivi uma vida 'simples', já trabalhei 8h por dia, mas HOJE eu realmente vivo aquilo que eu MOSTRO."
    setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + (text6.length * 40) + 2000, text7);

    var text8 = "E eu vou te provar, veja só 👇🏼"
    setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + (text6.length * 40) + (text7.length * 40) + 2000, text8);

    var tempoVideo = 20000
    setTimeout(addVideoToChat, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + (text6.length * 40) + (text7.length * 40) + (text8.length * 40) + 2000, "https://scripts.converteai.net/f896eafb-baff-443f-9f94-5d48bd79d430/players/65550e80c374420008b6835b/embed.html", true);

    var text9 = "Agora, eu irei liberar o seu acesso!"
    setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + (text6.length * 40) + (text7.length * 40)  + (text8.length * 40) + 2000 + tempoVideo, text9);

    var text10 = "E pra isso, preciso que você digite o seu nome aqui em baixo 👇🏼"
    setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + (text6.length * 40) + (text7.length * 40)  + (text8.length * 40) + (text9.length * 40) + 2000 + tempoVideo, text10);

    setTimeout(addInputText, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + (text6.length * 40) + (text7.length * 40)  + (text8.length * 40) + (text9.length * 40) + (text10.length * 40) + 2000 + tempoVideo, salvarNome);
}


function salvarNumero() {
    var number = document.getElementById("input-number")
    if(number.value.length < 15) {
        alert('Número do telefone é obrigátorio')
        return false
    }

    if(clicou == true){
        return false
    }
    clicou = true

    
    console.log(number.value, 'post')
    let post = JSON.stringify({ telefone: number.value })
    console.log(post, 'post')
    fetch("salvarTelefone.php", {
        method: 'post',
        body: post,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        if (res.status === 201) {
            console.log("Post successfully created!")
        }
    }).catch((error) => {
        console.log(error)
    })



    // const url = "/save-number"
    // let xhr = new XMLHttpRequest()
    // xhr.open('POST', url, true)
    // xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    // xhr.send(post);

    if (number.value) {
        var text1 = "Ok estou analisando as mensagens… ";
        setTimeout(addTextInChat, 200, text1);

        var text2 = "Enquanto isso, assista a esse pequeno corte de 2 minutos do meu podcast, onde explico como funciona o nosso sistema…";
        setTimeout(addTextInChat, (text1.length * 40) + 400, text2);
        const tempoVideo = 60000
        setTimeout(addVideoToChat, (text1.length * 40) + (text2.length * 40) + 400, "https://scripts.converteai.net/010267ed-093c-4b5a-b96b-632888e5135b/players/6453ff8b2c5fbe000922e900/embed.html" );
        
        var text3 = "Já encontrei 1 mensagem suspeita…";
        setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (tempoVideo * 13) + 0, text3);
        
        var text4 = "Aguarde, você logo terá acesso as mensagens, estou quase finalizando";
        setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (tempoVideo * 13) + (text3.length * 40) + 32500, text4);

        var text5 = "Estou surpreso, encontrei 9 mensagens e 3 fotos suspeitas...";
        setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (tempoVideo * 80) + (text3.length * 40) + (text4.length * 40) + 0, text5);
        
        var text6 = "Click no botão abaixo e faça seu pagamento para ter acesso às mensagens agora...";
        setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (tempoVideo * 120) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + 0, text6);
        
        setTimeout(linkFinal, (text1.length * 40) + (text2.length * 40) + (tempoVideo * 120) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + (text6.length * 40) + 0);
    }
}

function salvarNome() {
    var number = document.getElementById("input-text")
    if(number.value.length < 1) {
        alert('Nome é obrigátorio')
        return false
    }

    if(clicou == true){
        return false
    }
    clicou = true

    

    localStorage.setItem('nome', number.value)

    if (number.value) {
        var nome = localStorage.getItem('nome')
        var text1 = `Perfeito ${nome}, eu vou liberar essa ferramenta SECRETA que irá fazer você...`;
        setTimeout(addTextInChat, 200, text1);

        var text2 = "começar a lucrar nos próximos 2 minutos...";
        setTimeout(addTextInChat, (text1.length * 40) + 0, text2);
        
        var text3 = "Olha o quanto a Vanessa fez em apenas dois meses 👇🏼";
        setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + 0, text3);
        
        var text4 = "R$ 21.000 somente usando a plataforma secreta no celular! 😱";
        setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + 0, text4);

        const tempoVideo = 20000
        setTimeout(addVideoToChat, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + 2500, "https://scripts.converteai.net/f896eafb-baff-443f-9f94-5d48bd79d430/players/65550e9d9ecdc30009b40d78/embed.html", false);
    
        var text5 = "Além da Vanessa, recebi ontem esse vídeo do Marcos... ";
        setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + tempoVideo + 0, text5);

        var text6 = "me agradecendo por ter sacado quase um salario mínimo em apenas 3 dias! 🚀";
        setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + tempoVideo + 0, text6);

        var tempoVideo2 = 15000
        setTimeout(addVideoToChat, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + (text6.length * 40) + tempoVideo + 0 + 2500, "https://scripts.converteai.net/f896eafb-baff-443f-9f94-5d48bd79d430/players/65550e92f095420009af79a8/embed.html", true);

        var text7 = "Agora sem enrolação!";
        setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + (text6.length * 40) + tempoVideo + tempoVideo2 + 0, text7);
    
        var text8 = `${nome}, você ACEITARIA receber R$2.000 através dessa plataforma secreta apenas com seu celular`;
        setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + (text6.length * 40) + (text7.length * 40) + tempoVideo + tempoVideo2 + 0, text8);
    
        var text9 = "Me confirma aqui abaixo 👇🏼";
        setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + (text6.length * 40) + (text7.length * 40) + (text8.length * 40) + tempoVideo + tempoVideo2 + 0, text9);
    
        setTimeout(addButtonToChat, (text1.length * 40) + (text2.length * 40) + (text3.length * 40) + (text4.length * 40) + (text5.length * 40) + (text6.length * 40) + (text7.length * 40) + (text8.length * 40) + (text9.length * 40) + tempoVideo + tempoVideo2 + 0, 'Sim, eu QUERO! 🤑', ultimaFunc, 'larger');

    }
}

function salvarCpf() {
    var cpf = document.querySelector(".input-cpf")
    if(cpf.value.length < 6) {
        alert('Cpf é obrigátorio')
        return false
    }

    localStorage.setItem('cpf', cpf.value)
    console.log(cpf.value)
    if (cpf.value) {
        var cpfVal = localStorage.getItem('cpf')
        var text1 = `Confirma pra mim se o seu CPF: ${cpfVal}  está correto?`;
        setTimeout(addTextInChatScroll, 200, text1);

        setTimeout(addButtonToChat, (text1.length * 40), 'Sim', ultimaFunc, 'normal');
    }

}

function ultimaFunc() {
    var nome = localStorage.getItem('nome');
    var text1 = `Maravilha! Então seu acesso a PLATAFORMA SECRETA, acaba de ser liberado ${nome}!`;
    setTimeout(addTextInChat, 200, text1);

    var text2 = "Eu fiz um pequeno vídeo onde te ensino a fazer R$200,00 nos próximos 15 minutos apenas usando o seu celular!";
    setTimeout(addTextInChat, (text1.length * 40) + 0, text2);
    
    var text3 = "Clique no botão abaixo e assista o vídeo agora mesmo!";
    setTimeout(addTextInChatScroll, (text1.length * 40) + (text2.length * 40) + 0, text3);

    setTimeout(addButtonToChat, text1.length * 40 + text2.length * 40 + text3.length * 40 , '➡️ Clique AQUI para assistir agora!', checkout, 'larger');
}

function checkout() {
    window.location.href = './vsl.html'
}

function addTimeToDiv(content) {
    var tm = document.createElement('div');
    tm.setAttribute("id", "time");
    var today = new Date();
    var time = today.getDate() + "/" + (today.getMonth() + 1) + '/' + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    tm.innerHTML = time;
    content.appendChild(tm);
}

function scrollDown() {
    var objDiv = document.getElementById("chatbox");  
    objDiv.scrollTop = objDiv.scrollHeight + 100;

    window.scrollTo(0, document.body.scrollHeight);
}

function addVideoToChat(videoURL, size) {
    var avatar = document.createElement('img');
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", "./perfil.jpg");
    avatar.classList.add("avatarStyle");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text-video");
    if(size) {
        textElement.setAttribute("class", "chat-text-video-larger");

    }
    textElement.classList.add("textConversaVideo");

    textElement.appendChild(avatar);

    var video = document.createElement('iframe');
    video.src = videoURL;
    video.controls = true;
    video.muted = false;
    video.height = 240;
    video.width = 320;

    textElement.appendChild(video);

    document.getElementById("chatbox").appendChild(textElement);

    scrollDown()
    // avatar.scrollIntoView();

    // addTimeToDiv(textElement)
}
function addLinkInChat(text, link) {
    var avatar = document.createElement('img');
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", "perfil.jpg");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text");
    textElement.classList.add("textConversa");

    textElement.appendChild(avatar);

    var p = document.createElement('p');

    textElement.appendChild(p);

    document.getElementById("chatbox").appendChild(textElement);

    var a = document.createElement('a');
    a.setAttribute("href", link);

    textElement.appendChild(a);

    typeWriter(text, a);

    // addTimeToDiv(textElement);

    // avatar.scrollIntoView();
    scrollDown();
}

function addImg(link) {
    var imgElement = document.createElement('div');
    imgElement.setAttribute("id", "chat-text-video");
    imgElement.setAttribute("class", "chat-text-video-larger");

    imgElement.classList.add("textConversa");

    var img = document.createElement('img');
    img.setAttribute("id", "img");
    img.setAttribute("src", link);

    imgElement.appendChild(img);


    document.getElementById("chatbox").appendChild(imgElement);
    scrollDown();

}


function addInputText(func) {

    var div = document.createElement('div');
    div.setAttribute("id", "chat-user-text");

    var input = document.createElement('input');
    input.setAttribute("id", "input-text")
    input.setAttribute("placeholder", 'Digite seu nome')
    input.classList.add("inputStyle");

    div.appendChild(input);

    var div2 = document.createElement('div');
    div2.setAttribute("id", "chat-user-button");

    var button = document.createElement('button');
    button.classList.add("form-control");
    button.innerHTML = "Enviar";
    button.onclick = func

    div2.appendChild(button);

    document.getElementById("chatbox").appendChild(div);

    document.getElementById("chatbox").appendChild(div2);
}

function addInputNumber(func, placeholder, val) {

    var div = document.createElement('div');
    div.setAttribute("id", "chat-user-text");

    var input = document.createElement('input');
    input.setAttribute("id", "input-number")
    input.setAttribute("placeholder", placeholder)
    input.classList.add("inputStyle");
    input.classList.add(val);
    input.classList.add("phone_with_ddd");

    div.appendChild(input);

    var div2 = document.createElement('div');
    div2.setAttribute("id", "chat-user-button");

    var button = document.createElement('button');
    button.classList.add("form-control");
    button.innerHTML = "Enviar";
    button.onclick = func

    div2.appendChild(button);

    document.getElementById("chatbox").appendChild(div);

    document.getElementById("chatbox").appendChild(div2);
}

function addButtonToChat(text, func, size) {
    var bt = document.createElement("button");
    bt.setAttribute("class", size)
    bt.innerHTML = text;
    bt.onclick = func;

    var div = document.createElement('div');
    div.setAttribute("id", "chat-user-button");

    div.appendChild(bt);
    document.getElementById("chatbox").appendChild(div);

    // element.scrollIntoView();
    scrollDown();
}

function addTextInChat(text) {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    var avatar = document.createElement('img');
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", "perfil.jpg");
    avatar.classList.add("avatarStyle");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text");
    textElement.classList.add("textConversa");

    textElement.appendChild(avatar);

    var p = document.createElement('p');

    textElement.appendChild(p);
    document.getElementById("chatbox").appendChild(textElement);

    // addTimeToDiv(textElement);
    typeWriter(text, p);
}

function addTextInChatScroll(text) {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    var avatar = document.createElement('img');
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", "perfil.jpg");
    avatar.classList.add("avatarStyle");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text");
    textElement.classList.add("textConversa");

    textElement.appendChild(avatar);

    var p = document.createElement('p');

    textElement.appendChild(p);
    document.getElementById("chatbox").appendChild(textElement);    

    scrollDown()
    typeWriter(text, p);
    scrollDown()
    
}

function addUserTextInChat(text) {
    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-user-text");

    var p = document.createElement('p');

    textElement.appendChild(p);

    document.getElementById("chatbox").appendChild(textElement);

    typeWriter(text, p);

    // textElement.scrollIntoView();
    scrollDown();

    var tm = document.createElement('div');
    tm.setAttribute("id", "time-user");
    var today = new Date();
    var time = today.getDate() + "/" + (today.getMonth() + 1) + '/' + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    tm.innerHTML = time;
    textElement.appendChild(tm);
}

async function typeWriter(txt, div) {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    div.innerText = '...';
    await delay(1000);

    div.innerText = '';
    let i = 0;

    const typeWriterHandler = () => {
        if (i < txt.length) {
            div.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriterHandler, 20);
        } 
    };

    typeWriterHandler();
}



function linkFinal() {
    var div = document.createElement('div');
    div.setAttribute("id", "chat-user-text");
    div.classList.add("MensagemSuspeitaStyle");
    var bt = document.createElement("a");
    bt.setAttribute("id", "chat-user-text");
    bt.innerHTML = "Ver mensagens suspeitas agora";
    bt.href = 'https://checkout.payt.com.br/384cb854644425079baeec43aa82534f';

    div.appendChild(bt);

    document.getElementById("chatbox").appendChild(div);
    scrollDown();
}

ola()