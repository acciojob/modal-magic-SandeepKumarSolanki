//your JS code here. If required.

let openModal = document.getElementsByClassName('modal');
let modalBody = document.getElementsByClassName('modal-body')
let closeBtn = document.getElementsByClassName('close-modal');

openModal.addEventListener('click' , ()=>{
	modalBody.style.display='block';
})

function closeModal() {
	modalBody.style.display='none';
}

closeBtn.addEventListener('click',closeModal);

window.addEventListner('click', (e)=>{
	if(e.target === modal){
		closeModal();
	}
})
