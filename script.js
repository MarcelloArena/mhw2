/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
const image_checked = "checked.png";
const image_unchecked = "unchecked.png";

function imgCliccata(event)
{
    const container = event.currentTarget; 
    for(var i=0; i<div.length;i++)
    {
        if(div[i].dataset.questionId===container.dataset.questionId)
        {
            div[i].classList.add('overlay');
            div[i].classList.remove('corretta');
            div[i].childNodes[3].src=image_unchecked;
        }
    }

    container.classList.add('corretta');
    container.classList.remove('overlay');

    container.childNodes[3].src=image_checked;

   // verificaRisposte(event);
    
   
}

function verificaRisposte(event)
{
    var cnt = 0;
    for(var i = 0; i<array.length; i++)
    {
        if(array[i].dataset.questionId==event.currentTarget.dataset.questionId)
        {
            cnt = 1;
            array.splice(i, 1, event.currentTarget);
            break;
        }

    }

    if(cnt==0)
    {
        array.unshift(event.currentTarget);
    }


     if(array.length===3)
    {
        for(var i = 0; i<div.length; i++)
        {
            div[i].removeEventListener('click',funzionamento);
        }
    }
    
}

function trovaTesto()
{
    var stringa="";
    for(var i = 0; i<array.length; i++)
    {
        for(var k = 0; k<array.length; k++)
        {
            if(array[i].dataset.choiceId==array[k].dataset.choiceId && i!=k)
            {
                stringa= array[i].dataset.choiceId;
            }
        }
    }

    if(stringa=="")
    {
        for(var i = 0; i<array.length; i++)
        {
            if(array[i].dataset.questionId=="one")
            {
                stringa=array[i].dataset.choiceId;
                break;
            }
        }
    }
    return stringa;

}
   



function aggiungiTesto()
{
    
        var stringa=trovaTesto();

        if(array.length==3)
        {
            const h1 = document.createElement('h1');
            const p = document.createElement('p');
            const button = document.createElement('button');
            h1.textContent = RESULTS_MAP[stringa].title;
            p.textContent = RESULTS_MAP[stringa].contents;
            button.textContent='Ricomincia il quiz';
            const art = document.querySelector('article');
            const section = document.createElement('section');
            section.classList.add('risposta');
            art.appendChild(section);
            section.appendChild(h1);
            section.appendChild(p);
            section.appendChild(button);
            const but = document.querySelector('button');
            but.addEventListener('click',restart);

        }


}



function funzionamento(event)
{
    imgCliccata(event);
    verificaRisposte(event);
    aggiungiTesto();

}

function restart()
{
    const section = document.querySelector('article .risposta');
    section.remove();
    rimuoviRisposte();
    aggiungiAscoltatore();

}


function aggiungiAscoltatore()
{
    for(var i = 0; i<div.length; i++)
    {
        div[i].addEventListener('click',funzionamento);
    }
}

function rimuoviRisposte()
{
    for(var i = 0; i<div.length; i++)
    {
        div[i].classList.remove('overlay');
        div[i].classList.remove('corretta');
        div[i].childNodes[3].src=image_unchecked;
    }
    array = [];
}


const div = document.querySelectorAll('section div');
let array = [];
aggiungiAscoltatore();








