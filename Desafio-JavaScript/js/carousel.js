//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(imagem, texto, pagina) {
        this.imagem = imagem
        this.texto = texto
        this.pagina = pagina
    }

    static Start(arr) {
        const imagem = document.getElementById("carousel")
        const title = document.getElementById("carousel-title")
        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                arr.forEach(element => {
                    imagem.innerHTML += `<img src="img/${element.imagem}" alt="${element.imagem}">`
                    title.innerHTML += `<a href= "${element.pagina}">${element.texto}</a>`      
                });
                Carousel.Render(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Render() {
        const title = document.getElementById("carousel-title")

        const imagem = document.getElementById("carousel")

        let foto = imagem.querySelector("img");

        let texto = title.querySelector("a");
        
        let deslocamento = -(Carousel._sequence * 100);

        foto.style.marginLeft = `${deslocamento}%`;

        texto.style.marginLeft = `${deslocamento}%`;



        

    }

    static Next() {
        Carousel._sequence++;
        if(Carousel._sequence > Carousel._size - 1){Carousel._sequence = 0;}
        Carousel.Render();
    }

    static PrevManual() {
        clearInterval(Carousel._interval);

        Carousel._sequence -= 1;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }

        Carousel.Render();
        Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000);
    }
    static NextManual() {
        clearInterval(Carousel._interval);

        Carousel._sequence += 1;
        if(Carousel._sequence > Carousel._size -1){
            Carousel._sequence = 0;
        

        }
        Carousel.Render();
        Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000);


    }
}
