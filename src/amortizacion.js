
function loadScreen (){
    const body = document.querySelector('body');
    
    const container = document.createElement('div');
    container.classList.add=("container");
    container.style.margin = '20px 5%';
    container.style.padding = '30px';
    container.style.border = 'solid 1px'
    container.style.borderRadius = '20px'
    

    const subContainer = document.createElement('div');
    subContainer.classList.add=("row" ,"mt-3");
    subContainer.style.display = 'flex';

    const containerForm = document.createElement('div');
    containerForm.classList.add=("col-6");
    
    const containerTable = document.createElement('div');
    containerTable.style.paddingLeft = '5%';
    
    const h2Tag = document.createElement('h2');
    h2Tag.innerHTML = 'Calcule su amortización con el método francés';

    containerForm.innerHTML=`
                <h2>Calcular deuda 💰</h2>
                <div class="form-group">
                    <label for="monto">Monto</label>
                    <input type="text" class="form-control" id="monto" placeholder="Ingresar monto">
                </div>
                <div class="form-group">
                    <label for="tiempo">Meses</label>
                    <input type="text" class="form-control" id="tiempo" placeholder="Ingresar cantidad de meses">
                </div>
                <div class="form-group">
                    <label for="interes">Interés Mensual</label>
                    <input type="text" class="form-control" id="interes" placeholder="Ingresar tasa de interés mensual">
                </div>
                <button type="submit" class="btn btn-primary" id="btnCalcular">Calcular</button>
    `;
    containerTable.innerHTML = `
    <table id="lista-tabla" class="table">
    <thead>
        <tr>
            <th>Parc</th>
            <th>Amortización</th>
            <th>Interés</th>
            <th>Pago</th>
            <th>Saldo</th>
        </tr>
    </thead>
    <tbody></tbody>
    </table>
    `;

    // appendChild
    
    body.appendChild(container);
    container.appendChild(subContainer);
    subContainer.appendChild(containerForm);
    subContainer.appendChild(containerTable);
   

    const buttonCalc = document.createElement('button');
    
    console.log('Funcó la vaina');
  
}


document.addEventListener('DOMContentLoaded',loadScreen);

function amortización(){
    const monto = document.querySelector()
}

