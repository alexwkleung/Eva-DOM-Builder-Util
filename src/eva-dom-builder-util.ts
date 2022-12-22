//class EvaDOMBuilderUtil
export class EvaDOMBuilderUtil {
    static parentNode: HTMLElement;
    static childNode: HTMLElement;

    //dom builder parent
    public DOMBuilderParent(
        nodeType: keyof HTMLElementTagNameMap, 
        attributeType: string, 
        attributeName: string, 
        appendToRootNode: Node
        ) {
        EvaDOMBuilderUtil.parentNode = document.createElement(nodeType);
        EvaDOMBuilderUtil.parentNode.setAttribute(attributeType, attributeName);    

        appendToRootNode.appendChild(EvaDOMBuilderUtil.parentNode);
    }

    //dom builder child
    public DOMBuilderChild(
        nodeType: keyof HTMLElementTagNameMap, 
        attributeType: string, 
        attributeName: string, 
        setTextContent: string | undefined, 
        setInnerHTML: string | undefined
        ) {
        EvaDOMBuilderUtil.childNode = document.createElement(nodeType);
        EvaDOMBuilderUtil.childNode.setAttribute(attributeType, attributeName);

        //check setTextContent argument
        if(setTextContent) {
            EvaDOMBuilderUtil.childNode.textContent = setTextContent;
            EvaDOMBuilderUtil.parentNode.appendChild(EvaDOMBuilderUtil.childNode);
        } else if(setTextContent === undefined) {
            EvaDOMBuilderUtil.parentNode.appendChild(EvaDOMBuilderUtil.childNode); 
        }

        //check setInnerHTML argument
        if(setInnerHTML) {
            EvaDOMBuilderUtil.childNode.innerHTML = setInnerHTML;
            EvaDOMBuilderUtil.parentNode.appendChild(EvaDOMBuilderUtil.childNode);
        } else if(setInnerHTML === undefined) {
            EvaDOMBuilderUtil.parentNode.appendChild(EvaDOMBuilderUtil.childNode);            
        }
    }
}