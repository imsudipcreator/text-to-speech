let speech=  new SpeechSynthesisUtterance;

let voices=[];
let voiceSelect=document.querySelector('select');

window.speechSynthesis.onvoiceschanged =()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice , i)=>(voiceSelect.options[i]= new Option(voice.name , i)))
}

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
})




//toast
let toastBox=document.querySelector('.toastbox');
function showToast(){
    let toast=document.createElement("div");
    toast.classList.add("toast");
    toastBox.appendChild(toast);
    toast.innerHTML="Write Something bro...";
    setTimeout(()=>{
        toast.remove()
    },4000)
}
//toast

let textArea=document.querySelector("textarea");

document.querySelector("button").addEventListener('click',()=>{
    if(textArea.value===''){
console.log('empty');
showToast()
    }else{
        console.log('not empty');
        speech.text=document.querySelector('textarea').value;
        window.speechSynthesis.speak(speech);
    }

}

) 









