const cube = document.querySelector('.cube');
const time = 2

cube.addEventListener('click',() => {
    cube.style.transition = ''; 
    cube.style.transform = `translateY(200px) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg)`;

    setTimeout(() => {
        cube.style.transition = `transform ${time}s`;
        const randomValue = Math.floor((Math.random() * 6) + 1);
        console.log(`randomValue: ${randomValue}` );

        switch(randomValue) {
            case 1:
                cube.style.transform = `translateY(200px) 
                rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 2:
                cube.style.transform = `translateY(200px) 
                rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 3:
                cube.style.transform = `translateY(200px) 
                rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                break;
            case 4:
                cube.style.transform = `translateY(200px) 
                rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                break;
            case 5:
                cube.style.transform = `translateY(200px) 
                rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 6:
                cube.style.transform = `translateY(200px) 
                rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                break;
        };
    }, time * 10);
});

let btnAbrir=document.querySelector("#btn-abrir");
let btnCerar=document.querySelector("#btn-no");
let modal=document.querySelector("#modal");

btnAbrir.addEventListener("click", ()=> {
    modal.showModal();
});

btnCerar.addEventListener("click", ()=>{
    modal.close();
})