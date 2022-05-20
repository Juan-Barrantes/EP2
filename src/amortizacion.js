function loadScreen (){
    const body = document.querySelector('body');
    
    const container = document.createElement('div');
    container.classList.add=('container');

    const subContainer = document.createElement('div');
    subContainer.classList.add=['row' ,'mt-3'];

    const containerForm = document.createElement('div');
    containerForm.classList.add=('col-6');
    
    
    const h2Tag = document.createElement('h2');
    h2Tag.innerHTML = 'Calcule su amortización con el método francés';

    
    let inputsList = [
        {
            labelFor:'monto',
            labelInner:'Monto',
            inputID: 'monto',
            inputPH: 'Ingresar monto'
        },
        {
            labelFor:'tiempo',
            labelInner:'Meses',
            inputID: 'tiempo',
            inputPH: 'N° meses'
        },
        {
            labelFor:'interes',
            labelInner:'Monto',
            inputID: 'monto',
            inputPH: 'Tasa de interés mensual'
        }
    ];

    let labelInner = ['Monto','Tiempo (en meses)', 'Interés mensual'];

    let labelFor = ['monto','text','text'];
    
    // appendChild
    body.appendChild(container);
    container.appendChild(subContainer);
    subContainer.appendChild(containerForm);
    containerForm.appendChild(h2Tag);
    

    inputsList.forEach(item =>{
        const divForm = document.createElement('div');
        divForm.classList.add=('form-group');    
        const labelForm =document.createElement('label');
        //labelForm.for
        const inputForm = document.createElement('input');

        //labelFor.=item;
        
        containerForm.appendChild(divForm)
        divForm.appendChild(labelForm);
        divForm.appendChild(inputForm);   
    })



    const buttonCalc = document.createElement('button');
    
    console.log('Funcó la vaina');
}


document.addEventListener('DOMContentLoaded',loadScreen);