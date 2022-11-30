let btnAbrir=document.querySelector("#btn-abrir");
let btnCerar=document.querySelector("#btn-cerrar");
let modal=document.querySelector("#modal");

btnAbrir.addEventListener("click", ()=> {
    modal.showModal();
});

btnCerar.addEventListener("click", ()=>{
    modal.close();
})