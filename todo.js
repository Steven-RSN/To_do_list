


const ol = document.getElementById('tacheListe')
const li = document.querySelectorAll('li')
const bouton_submit = document.getElementById('submitButton')
const case_a_cocher = document.querySelectorAll('.case')
const bouton_hidden = document.querySelectorAll('.button_hidden')
const div_a_numero = document.querySelectorAll('.conteneur_pour-numero')
let liste_numero = [1]
const numero=liste_numero.length +1
const lis=document.querySelectorAll('li')




//bouton_submit.addEventListener('click',function(){  
    const ajouter_une_nouvelle_tache = function (event) {
    event.preventDefault()
    const tache_input= document.getElementById("tache_input")
    const text = tache_input.value
    
    

    if(text !== ''){

       let numero=liste_numero.length +1
       console.log(numero)
       liste_numero.push(numero)
       console.log(liste_numero)

        
        const new_div = document.createElement('div')
        new_div.innerHTML=numero +'.'
        new_div.classList.add('conteneur_pour-numero')
        ol.appendChild(new_div)


       
        
        const newli = document.createElement('li')
        newli.innerHTML = text
        newli.classList.add("elementListeNOchecked")
        ol.appendChild(newli)



        const new_checkbox = document.createElement('input')
        new_checkbox.type = 'checkbox'
        new_checkbox.classList.add('case')
        newli.appendChild(new_checkbox)



        const new_bouton_hidden = document.createElement('button')
        new_bouton_hidden.innerHTML='<img src="logos/icons8-corbeille-26.png" alt="corbeille" class="logo_poubelle">'
        new_bouton_hidden.classList.add('button_hidden')
        newli.appendChild(new_bouton_hidden)



        new_checkbox.addEventListener('click', function () {
            if (new_checkbox.checked) {
                newli.classList.add('elementListechecked');
            } else {
                newli.classList.remove('elementListechecked');
            }
        });
        
        
        new_bouton_hidden.addEventListener('click',function(){
           

            console.log(numero)
            console.log(liste_numero)

            const index = liste_numero.indexOf(numero); // Trouve l'index du numéro à supprimer
           
            if (index > -1) {

                liste_numero.splice(index, 1); // Supprime le numéro du tableau
                newli.remove()
                new_div.remove()

              //  for(let i=index ; i<liste_numero.length; i++){


                  //  liste_numero[i] = liste_numero[i]-1
                    const div_a_numero = document.querySelectorAll('.conteneur_pour-numero')
                    
                        div_a_numero.forEach((div,index_de_la_div)=>{

                           
                            div.innerHTML = (index_de_la_div +1)+'*'
                            console.log( "liste new numero div: "+index_de_la_div )
                        })
                      
               // }
            }
            console.log(liste_numero)
        })

        
       

    }else{
        console.log('entrez une tache')
    }
    
    tache_input.value=''
   
}//)

/*bouton_hidden.forEach((bouton,index_de_li)=>{
    bouton.addEventListener('click',function(){
    
        li[index_de_li].remove()
        div_a_numero[index_de_li].remove()
        liste_numero.splice(index_de_li,1)
        

            for(let i=index_de_li ; i<liste_numero.length; i++){
                
                liste_numero[i] = liste_numero[i]-1
                const div_a_numero_new =document.querySelectorAll('.conteneur_pour-numero')
                
                div_a_numero_new.forEach((div,index_de_div)=>{
                    
                    div.innerHTML=(index_de_div+1)+'.'
                })
            }
        

        
    })
   

})*/

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