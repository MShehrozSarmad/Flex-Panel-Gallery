let pnls = document.querySelectorAll('.panel');

function active(){
    this.classList.toggle('activePnl');
}

function openActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

pnls.forEach(pnl => pnl.addEventListener('click', active));
pnls.forEach(pnl => pnl.addEventListener('transitionend', openActive));