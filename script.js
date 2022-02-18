function calcular(){
     
    var anonasc = document.getElementById('txtano');    
    var ano = new Date().getFullYear();
    var res = document.getElementById('res');

    if (anonasc.value.length == 0  || anonasc.value >= ano )
    {
        alert('Verifique os dados e tente novamente.');
    } else {
        var sexo = document.getElementsByName('radsex');
        var idade = ano - Number(anonasc.value);
        var genero = '';
        var img = document.createElement('img'); //CRIA UM ELEMENTO DO TIPO IMG DECLARADO
        img.setAttribute('id', 'foto') //ATRIBUI UM "ID" DO TIPO "FOTO" QUE ESCOLHEMOS
        if (sexo[0].checked){
            genero = 'homem';
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'menino.png') //ATRIBUI UM SRC JA PUXANDO A FOTO PARA O ELEMENTO IMG
            } else if(idade < 21){
                //JOVEM
                img.setAttribute('src','garoto.png')
            }
            else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'homemadulto.png')
            }
            else {
                //IDOSO
                img.setAttribute('src', 'senhor.png')
            }
        } else{
            genero = 'mulher';
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'menina.png')
            } else if(idade < 21){
                //JOVEM
                img.setAttribute('src', 'garota.png')
            }
            else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'mulheradulta.png')
            }
            else {
                //IDOSO
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img); //PUXA O ELEMENTO IMG CRIADO
        
    }
  
  
    

  
  
    



    
}
    
