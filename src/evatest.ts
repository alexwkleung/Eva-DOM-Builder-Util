import { EvaDOMBuilderUtil } from "./eva-dom-builder-util.js";

function Eva() {
    const Eva = new EvaDOMBuilderUtil();

    Eva.DOMBuilderParent('div', 'id', 'test', document.body);

    console.log(EvaDOMBuilderUtil.parentNode);

    Eva.DOMBuilderChild(
        'button', 
        'class', 
        'button1', 
        'A Button!', 
        undefined
    );

    console.log(EvaDOMBuilderUtil.childNode);

    Eva.DOMBuilderChild(
        'div', 
        'id', 
        'idk', 
        undefined, 
        "Hello World!"
    );

    console.log(EvaDOMBuilderUtil.childNode);
}   
Eva();