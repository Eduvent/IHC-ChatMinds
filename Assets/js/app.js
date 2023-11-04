//   contacto
const btnsPlanes = document.querySelectorAll('.btn_planes');

// btnsPlanes.forEach(btn => {
//     btn.addEventListener('click', () => {
//         window.location.href = '/page/registro.html';
//     });
// });
btnsPlanes.forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = 'registro.html';
    });
});

// // 1. Selecciona todos los elementos con la clase 'list_fir_footer' y guardar en una constante llamada 'elementos'.
// const elementos = document.querySelectorAll('.list_fir_footer');
// // 2. Definir una función llamada 'clickPromise' que toma un elemento como argumento.
// function clickPromise(elemento) {
//     // 3. Devuelve una nueva Promesa.
//     return new Promise((resolve) => {
//         // 4. Agrega un evento de clic al elemento.
//         elemento.addEventListener('click', () => {
//             // 5. Cuando el elemento es clickeado, alternamos la clase 'alt' del mismo.
//             elemento.classList.toggle('alt');
//             // 6. Una vez hecho esto, "resolvemos" la promesa. 
//             setTimeout(() => { elemento.classList.toggle('alt'); }, 600);
//             resolve();            
//         });
//     });
// }
// // 7. Iterar sobre cada elemento en 'elementos'.
// elementos.forEach(elemento => {
//     // 8. Por cada elemento, llamamos a 'clickPromise' y luego encadenamos un método '.then()'.
//     clickPromise(elemento).then(() => {
//         // 9. Dentro del '.then()', escribimos una función que se ejecuta una vez que la promesa se haya resuelto (es decir, después de que se haya hecho clic en el elemento).
//         // console.log('Elemento ha sido clickeado y clase alterada!');
//     });
// });
// para el boton contactanos
const boton_con = document.querySelector('.boton_contact');
boton_con.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.article_contac input');
    let todosTienenContenido = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            todosTienenContenido = false;
        }
    });
    if (todosTienenContenido) { alert('Mensaje enviado'); } 
    else { alert('Complete los campos'); }
});
