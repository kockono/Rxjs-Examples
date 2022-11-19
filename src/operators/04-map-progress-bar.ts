import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div')

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit massa et metus auctor, ut consectetur magna mattis. Duis id odio sagittis, viverra dolor ut, elementum purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam consequat faucibus aliquam. Sed sit amet leo vitae ante imperdiet tempus. Proin nisl enim, vulputate non purus eu, ultrices sagittis nulla. Pellentesque fermentum a lacus ac molestie.
<br/><br/>
Donec lacinia ac massa in condimentum. Sed suscipit rhoncus viverra. Phasellus quis ipsum lectus. Etiam eget fringilla eros. In tristique massa hendrerit magna ultrices consectetur vel quis sem. Duis eros leo, elementum nec dignissim ut, lobortis ut metus. Morbi mattis porttitor risus sit amet egestas. In hendrerit, lectus ac pharetra vehicula, justo neque hendrerit velit, ut cursus orci leo in dolor.
<br/><br/>
Aliquam erat volutpat. Nullam condimentum quis leo quis lacinia. In quis risus sit amet justo tristique convallis ut semper ex. Sed facilisis libero arcu, quis tempus orci hendrerit et. Vivamus lobortis ornare mi, sed suscipit nisl commodo eget. Nulla semper elementum enim. Vestibulum efficitur, lacus non varius facilisis, risus lectus fringilla augue, eu fringilla arcu libero quis elit.
<br/><br/>
Donec lacinia ante sed mollis luctus. Sed auctor tempus fringilla. Vestibulum fermentum nunc dolor. Curabitur ipsum nisi, venenatis eget augue ac, accumsan aliquet nisl. Aenean auctor, sem ultricies semper hendrerit, velit libero faucibus mauris, et tempor lorem ante non mi. Nullam placerat lectus eu lacus tincidunt, et lobortis erat tristique. Etiam tincidunt ipsum odio, sed tincidunt tortor luctus a. Proin vestibulum sagittis orci, consequat rutrum ipsum gravida eu. Praesent pharetra blandit leo ut euismod.
<br/><br/>
Aliquam id est eget tortor consequat elementum sed sit amet lorem. Quisque auctor pretium nulla, in posuere odio dapibus vel. Maecenas a turpis libero. Fusce nulla magna, rutrum at molestie vitae, semper non massa. Aliquam fermentum lacinia erat, et finibus velit lacinia eu. Donec ultrices efficitur turpis et posuere. Nunc in porta felis. Phasellus sit amet eleifend ex, sit amet dictum nisi. Morbi lacus eros, aliquet eget erat in, tempus molestie purus. Morbi semper turpis id laoreet commodo. Maecenas nec enim quis massa egestas bibendum eu sed odio. Fusce tincidunt dui erat, nec ullamcorper dui feugiat eget.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
 const { scrollTop, 
         scrollHeight, 
         clientHeight 
       } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent<MouseEvent>(document, 'scroll')

const progress$ = scroll$.pipe( 
    // map(event => calcularPorcentajeScroll((event)))
    map(calcularPorcentajeScroll),
    tap(console.log)
 );

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});
