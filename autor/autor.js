let resposta = prompt("O que você acha de uma perguntinha, ein? Você está pronto? Responda sim ou não.");

switch (resposta){
    case 'sim':
        alert("Muito bem. Clique em OK ou aperte a tecla ENTER para receber a pergunta.");
        let autor = prompt("Agora responda: Quem é o autor de One Piece?");
        switch(autor){
            case 'Eiichiro':
                alert("Meus Parabéns!!! O nome do autor de Naruto é Masashi Kishimoto! Confira agora a sua bibliografia.");
                break;  
            case 'Oda':
                alert("Meus Parabéns!!! O nome do autor de Naruto é Masashi Kishimoto! Confira agora a sua bibliografia.");
                break;
            case 'Eiichoro oda':
                alert("Meus Parabéns!!! O nome do autor de One Piece é Eiichiro Oda! Você Acertou em Cheio! Confira agora a sua bibliografia.");
                break;
            default :
                alert("Você errrou!!! Mas relaxa. A seguir você vai poder aprender muito sobre Eiichiro oda, autor de One Piece. Confira!");      
        }   
        break;     
    case 'não':
        alert("Poxa, que pena. Espero que você saiba que Luffy não desistiria facil assim de achar o One Piece. Acho que será bom para você aprender sobre ele. Somente por isso te deixarei ler o artigo.");
        break;
    }


