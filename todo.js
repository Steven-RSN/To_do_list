


const ol = document.getElementById('tacheListe')
const li = document.querySelectorAll('li')
const bouton_submit = document.getElementById('submitButton')
const case_a_cocher = document.querySelectorAll('.case')
const bouton_hidden = document.querySelectorAll('.button_hidden')
const div_a_numero = document.querySelectorAll('.conteneur_pour-numero')
let liste_numero = [1]
const numero=liste_numero.length +1
const lis=document.querySelectorAll('li')




  
const ajouter_une_nouvelle_tache = function (event) {
    event.preventDefault()
    const tache_input= document.getElementById("tache_input")
    const text = tache_input.value

    

    if(text !== ''){

        let numero=liste_numero.length +1
        console.log(numero)
        liste_numero.push(numero)
        console.log(liste_numero)




        const boite_task = document.createElement('div')
        boite_task.classList.add('boite_task')
        ol.appendChild(boite_task)

     
       

        const new_div = document.createElement('div')
        new_div.innerHTML=numero +'.'
        new_div.classList.add('conteneur_pour-numero')
        boite_task.appendChild(new_div)
  
       
        
        const newli = document.createElement('li')
        newli.innerHTML = text
        newli.classList.add("elementListeNOchecked")
        boite_task.appendChild(newli)



        const new_checkbox = document.createElement('input')
        new_checkbox.type = 'checkbox'
        new_checkbox.classList.add('case')
        newli.appendChild(new_checkbox)



        const new_bouton_hidden = document.createElement('button')
        new_bouton_hidden.innerHTML='<img src="logos/icons8-corbeille-26.png" alt="corbeille" class="logo_poubelle">'
        new_bouton_hidden.classList.add('button_hidden')
        newli.appendChild(new_bouton_hidden)

        const boite_UpDown = document.createElement('div')
        boite_UpDown.classList.add('boite_UpDown')
        newli.appendChild(boite_UpDown)
        

        new_checkbox.addEventListener('click', function () {
            if (new_checkbox.checked) {
                
                newli.classList.add('elementListechecked');
            } else {

                newli.classList.remove('elementListechecked');
            }
        });
        



        const boutton_up = document.createElement('button')
        boutton_up.innerHTML='<img src="logos/icons8-chevron-32 (h).png" alt="chevron" class="chevron">'
        boutton_up.classList.add('move_up')
        boite_UpDown.appendChild(boutton_up)

        const boutton_down = document.createElement('button')
        boutton_down.innerHTML='<img src="logos/icons8-chevron-32 (b).png" alt="chevron" class="chevron">'
        boutton_down.classList.add('move_down')
        boite_UpDown.appendChild(boutton_down)

        function swapTasks(task1, task2) {
            const parent = task1.parentNode;
            parent.insertBefore(task2, task1);
            parent.insertBefore(task1, task2.nextSibling);
        }
        
        function moveElement(element, direction) {
            element.classList.add(direction === 'up' ? 'translate-up' : 'translate-down');
            setTimeout(() => {
                element.classList.remove('translate-up', 'translate-down');
                if (direction === 'up') {
                    ol.insertBefore(element, element.previousElementSibling);
                    const div_a_numero = document.querySelectorAll('.conteneur_pour-numero')
            
                    div_a_numero.forEach((div,index_de_la_div)=>{
    
                        
                        div.innerHTML = (index_de_la_div +1)+'!'
                        console.log( "liste new numero div: "+index_de_la_div )
                    })
                } else {
                    ol.insertBefore(element.nextElementSibling, element);
                    
                }
                const div_a_numero = document.querySelectorAll('.conteneur_pour-numero')
            
                div_a_numero.forEach((div,index_de_la_div)=>{

                    
                    div.innerHTML = (index_de_la_div +1)+'.'
                    console.log( "liste new numero div: "+index_de_la_div )
                })
            }, 150); 
        }

        boutton_up.addEventListener('click', function (event) {
            event.preventDefault()
            const boite_prev = boite_task.previousElementSibling;
            if (boite_prev && boite_prev.classList.contains('boite_task')) {
                moveElement(boite_task, 'up');
                
            }
        });

        boutton_down.addEventListener('click', function (event) {

            event.preventDefault();
            const boite_next = boite_task.nextElementSibling;
            if (boite_next && boite_next.classList.contains('boite_task')) {
                moveElement(boite_task, 'down');
               
            }
        });




        new_bouton_hidden.addEventListener('click',function(){
           

            console.log(numero)
            console.log(liste_numero)

            const index = liste_numero.indexOf(numero); 
           
            if (index > -1) {

                liste_numero.splice(index, 1); 
                newli.remove()
                new_div.remove()

        
                const div_a_numero = document.querySelectorAll('.conteneur_pour-numero')
            
                div_a_numero.forEach((div,index_de_la_div)=>{

                    
                    div.innerHTML = (index_de_la_div +1)+'.'
                    console.log( "liste new numero div: "+index_de_la_div )
                })
                    
               
            }

            console.log(liste_numero)
        })
     

    }else{
        console.log('entrez une tache')
    }
    
    tache_input.value=''
   
}



case_a_cocher.forEach((checkbox,index)=>{ 
    checkbox.addEventListener('click',function () {
        if(checkbox.checked){
            li[index].classList.add('elementListechecked')
        }else{
            li[index].classList.remove('elementListechecked')
        }
        
    })
})

bouton_submit.addEventListener('click',ajouter_une_nouvelle_tache )

const tache_input = document.getElementById('tache_input')

tache_input.addEventListener('keydown',function (event) {
    if(event.key==='Enter')
        ajouter_une_nouvelle_tache(event)
    
})