var count = 0;

var btns = document.querySelectorAll('.btn');
var output = document.querySelector('.output')
btns.forEach(function(btn){
    btn.addEventListener('click',()=>{
        if(btn.classList.contains('subtrai')){
            count--;
            output.innerHTML = count
        }
        else if(btn.classList.contains('adicionar')){
            count++;
            output.innerHTML = count
            if(count === 100){
                alert('parabens por ter chegado até aqui')
            }
        }
        else{
            count = 0;
            output.innerHTML = count
        }

        if(count > 0){
            output.style.color = '#5dad5d'
        }
        else if(count < 0){
            output.style.color = '#a1451b'
        }
        else{
            output.style.color = '#647f8b'
        }
    })
})