document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    var boton = document.querySelector('.mostrar-animacion');
    var agua = document.querySelector('.water');
    var fuego = document.querySelector('.flame');
    var agitador = document.querySelector('.windmill');
    var bannerClasses = ['banner', 'banner2']; // Classes for the water banner

    boton.addEventListener('click', proceso.bind(null, agua, fuego, agitador, bannerClasses, boton));
}

function proceso(agua, fuego, agitador, bannerClasses, boton){
    boton.disabled = true;

    toggleClass(agua, bannerClasses[0]); // Show water animation

    setTimeout(function(){
        toggleClass(fuego, 'hidden'); // Show flame
        toggleClass(agitador, 'hidden'); // Show windmill
    }, 10000);

    setTimeout(function(){
        toggleClass(fuego, 'hidden'); // Hide flame
        toggleClass(agitador, 'hidden'); // Hide windmill
        toggleClass(agua, bannerClasses[1]); // Change water animation
    }, 20000);

    setTimeout(function(){
        boton.disabled = false;
        agua.classList.remove('banner2');
        agua.classList.remove('banner');
        agua.classList.add('water');
    }, 30000);
}

function toggleClass(element, className){
    element.classList.toggle(className);
}
