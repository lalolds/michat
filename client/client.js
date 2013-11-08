Template.alvin.events = {
  'click .saludo': function() {
   alert('diste click'); 
  }
}

Template.prueba.events = {
  'click .hola' :function() {
    alert('que tarao');
  }
}

Template.chat.mensajitos = function() {
  return Datos.find({});
}

Template.ingreso.events = {
  'keydown #caja' : function(event) {
    if(event.which == 13) {
      var nombre = document.getElementById('nombre');
      var mensaje = document.getElementById('caja');

      if(nombre.value == '') {
        nombre.value = 'Anonimo';
      }

      if(mensaje.value != '') {
        var elmensaje = {
          'nombre': nombre.value,
          'msg': mensaje.value,
          'time': Date.now()
        };
        Datos.insert(elmensaje);

        mensaje.value = '';
      }
    }
  }
}