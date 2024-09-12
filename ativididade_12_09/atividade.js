function Number() {

    let numero_usuario = document.getElementById('number').value 
    localStorage.setItem('numero', numero_usuario)
    alert('Número armazenado com sucesso')

}