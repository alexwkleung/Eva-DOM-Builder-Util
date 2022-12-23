import { EvaDOMBuilderUtil } from "../src/eva-dom-builder-util.js";

function Eva() {
    const EvaDOM = new EvaDOMBuilderUtil();

    //parent folder
    EvaDOM.DOMBuilderParent(
        'div', 
        'id', 
        'TopContainer',
        document.body
    );

    //ul node
    EvaDOM.DOMBuilderChild(
        'ul', 
        'class', 
        "someUl",  
        undefined,
        EvaDOMBuilderUtil.parentNode,
        1,
        false
    );

    EvaDOM.DOMBuilderChildNoAttr(
        'li',
        undefined,
        EvaDOMBuilderUtil.prevChildNode,
        1,
        false
    );

    EvaDOM.DOMBuilderChild(
        'span',
        'class',
        "caret",
        "Users",
        EvaDOMBuilderUtil.prevChildNode,
        1,
        false
    );

    EvaDOM.DOMBuilderChildWithRef(
        'ul',
        'class',
        "nested",
        undefined,
        document.querySelector('li') as HTMLElement,
        1,
        false, 
        true
    )

    EvaDOM.DOMBuilderChildNoAttr(
        'li',
        "User",
        EvaDOMBuilderUtil.prevChildNode,
        2,
        true
    );

    const toggle = document.getElementsByClassName("caret");
    
    const nested = document.querySelector('.nested') as HTMLElement;

    for(let i = 0; i < toggle.length; i++) {
      toggle[i].addEventListener('click', function(this: Element) {
        nested.classList.toggle('active');
        (this as Element).classList.toggle('caret-down');
      });
    }

    console.log(EvaDOMBuilderUtil.childNodeTempRef);
}   
Eva();