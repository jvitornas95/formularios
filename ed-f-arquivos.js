var inputs = document.querySelectorAll('[type=file]');

var btnSubmit = document.querySelector('[type=submit]');
var btnAgua = document.querySelector('.btn-agua'); 
var btnEnergia = document.querySelector('.btn-energia'); 
var btnGas = document.querySelector('.btn-gas'); 

var formAgua = document.querySelector('.form-agua');
var formEnergia = document.querySelector('.form-energia');
var formGas = document.querySelector('.form-gas');

getParams = () => {
        
    var parametros = location.search.slice(1);
    var partes = parametros.split('&');
    var data = {};

    partes.forEach(pt => {

        var chave = pt.split('=');
        data[chave[0]] = chave[1];

    });

    return data;

}

document.getElementById('id').value = getParams().id;
document.getElementById('contrato').value = getParams().contrato;

formAgua.style.display = 'block';
btnAgua.style.backgroundColor = '#fdb813';

inputs.forEach(el => {
    
    el.addEventListener('change', () => {

        document.querySelector(`[for=${el.id}]`).innerHTML = el.files[0].name;        
        
    });

});

btnAgua.addEventListener('click', evt => {
   
    evt.preventDefault();
    togleForm(formAgua);
    
    formAgua.classList.add('form-animation');

    
    colorButtons(btnAgua);

});

btnEnergia.addEventListener('click', evt => {
    
    evt.preventDefault();
    togleForm(formEnergia);
    
    formEnergia.classList.add('form-animation');
    
    
    colorButtons(btnEnergia);

});

btnGas.addEventListener('click', evt => {
    
    evt.preventDefault();
    togleForm(formGas);
    
    formGas.classList.add('form-animation');

   
    colorButtons(btnGas);

});

togleForm = form => {

    [...document.querySelectorAll('.form-itens')].forEach(el => {

        if(el == form){

            if(el.style.display == 'block'){

                el.style.display = 'none';
                
            } else {
                el.style.display = 'block';
            }

        } else {
        
            el.style.display = 'none';

        }

    })

    

};

colorButtons = btn => {
    [...document.querySelectorAll('.btn')].forEach(el => {

        if (btn == el) {
            el.style.backgroundColor = '#fdb813';
        } else {
            el.style.backgroundColor = '#eee';
        }

    })
}