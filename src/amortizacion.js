
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
                    <label for="monto">Valor del bien adquirido</label>
                    <input type="number" class="form-control" id="valorBien" placeholder="Valor del Bien" min="0" >
                </div>
                <div class="form-group">
                    <label for="monto">Inicial</label>
                    <input type="number" class="form-control" id="inicial" placeholder="Valor inicial" min="0">
                </div>
                <div class="form-group">
                    <label for="monto">Deuda</label>
                    <input type="number" class="form-control" id="monto" placeholder="Préstamo" disabled>
                </div>
                <div class="form-group">
                    <label for="tiempo">Meses</label>
                    <input type="number" class="form-control" id="tiempo" placeholder="Ingresar cantidad de meses" min="1">
                </div>
                <div class="form-group">
                    <label for="interes">Tasa Anual (i%)</label>
                    <input type="number" class="form-control" id="interes" placeholder="Ingresar tasa de interés mensual" min="0">
                </div>
                <button type="submit" class="btn btn-primary" id="btnCalcular" onclick='validarInicial()'>Calcular</button>
                <button type="submit" class="btn btn-primary" id="btnReset" onclick='reset()' disabled >Reset</button>
    `;
    containerTable.innerHTML = `
    <table id="tabla-amortizacion" class="table">
    <thead id="tHead">
        <tr style="background-color: #7CFBD7;"      
            id="saldoInicial" >
        </tr>
        <tr>
            <th>N°</th>
            <th>Amortización</th>
            <th>Interés</th>
            <th>Pago</th>
            <th>Desgravamen</th>
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
   

    
  //Boton reset cargar en disable
  document.querySelector('#btnReset').disabled=true;
  
}

//capturar valores
function tableAmortización(){
    //Identificación y selección de elementos
    let valorBien = document.getElementById('valorBien').value;
    let inicial = document.getElementById('inicial').value;
    
    let monto = valorBien-inicial;
    document.getElementById('monto').setAttribute('value',`${monto}`);

    const meses = document.getElementById('tiempo').value;
    const interes = document.getElementById('interes').value;
    const button = document.getElementById('btnCalcular');

    const cargarDatos = document.querySelector('#tabla-amortizacion');
    const saldoInicial = document.querySelector('#saldoInicial');
    
    //Mostrar saldo inicial
    saldoInicial.innerHTML = `Deuda: ${monto}`
   
    // Hallando datos para la tabla
    let columnaIntereses = 0;
    let columnaAmortizacion =0;

    const cuota  =  monto*(Math.pow(1+interes/100, meses)*interes/100)/(Math.pow(1+interes/100,meses)-1);
    console.log(cuota.toFixed(2));

    //Construyendo la tabla
    for(let i=1; i<=meses; i++){
        columnaIntereses = parseFloat(monto*(interes/100));
        columnaAmortizacion = cuota-columnaIntereses;
        monto = parseFloat(monto-columnaAmortizacion);
        columnaDesgravamen = parseFloat(monto*0.005);


        const fila = document.createElement('tr');
        fila.setAttribute("class","classTr")

        fila.innerHTML = `
        <td>${i}</td>
        <td>${columnaAmortizacion.toFixed(2)}</td>    
        <td>${columnaIntereses.toFixed(2)}</td>
        <td>${cuota.toFixed(2)}</td>
        <td>${columnaDesgravamen.toFixed(2)}</td>
        <td>${monto.toFixed(2)}</td>
        `;
        cargarDatos.appendChild(fila);   
    }
    button.disabled = true;
    document.getElementById('btnReset').disabled=false;
}

function reset(){
    document.getElementById('btnCalcular').disabled=false;
    const buttonReset = document.getElementById('btnReset');

    //document.getElementById('idTr').remove();
    const tableTr = document.getElementsByClassName('classTr');
    while(tableTr.length > 0){
        tableTr[0].parentNode.removeChild(tableTr[0]);
    }
    //tableTr.parentNode.removeChild(tableTr);
    buttonReset.disabled = true;    
    const saldoInicial = document.querySelector('#saldoInicial').innerHTML='';

    //Borrando datos de los inputs
    document.getElementById('valorBien').value = "";
    document.getElementById('inicial').value = "";
    document.getElementById('tiempo').value = "";
    document.getElementById('interes').value = "";
    
}
//mostrar tablas


function validarInicial(){
    document.getElementById('btnReset').disabled=false;

    let valorBien = document.getElementById('valorBien').value;
    let inicial = document.getElementById('inicial').value;

    if(inicial>=0.2*valorBien && inicial<=0.8*valorBien){
        tableAmortización();
    }else{
        alert("Inicial fuera de rango (20%-80%) 📢‼");
        alert("Presiona Reset para volver a intentar");
        document.getElementById('btnCalcular').disabled = true;
    }
}

document.addEventListener('DOMContentLoaded',loadScreen);
