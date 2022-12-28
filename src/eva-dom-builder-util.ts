//class EvaDOMBuilderUtil
export class EvaDOMBuilderUtil {
    //consecutive nums
    private parentNodeConsecutiveNum: number;
    private childNodeConsecutiveNum: number;

    //dom nodes
    static parentNode: HTMLElement;
    static childNode: HTMLElement;
    static prevParentNode: HTMLElement;
    static prevChildNode: HTMLElement;

    //refs 
    static parentNodeTempRef: Node;
    static childNodeTempRef: Node;

    //dom builder parent
    public DOMBuilderParent(
        nodeType: keyof HTMLElementTagNameMap, 
        attributeType: string, 
        attributeName: string, 
        appendToNode: Node,
        ) {
        EvaDOMBuilderUtil.parentNode = document.createElement(nodeType);
        EvaDOMBuilderUtil.parentNode.setAttribute(attributeType, attributeName);    

        //set prevParentNode to current parentNode for reference later
        EvaDOMBuilderUtil.prevParentNode = EvaDOMBuilderUtil.parentNode;
        
        appendToNode.appendChild(EvaDOMBuilderUtil.parentNode);
    }

    //dom builder child
    public DOMBuilderChild(
        nodeType: keyof HTMLElementTagNameMap, 
        attributeType: string, 
        attributeName: string, 
        setInnerHTML: string | undefined,
        appendToNode: Node,
        repeatCount: number,
        addConsectiveNumber: boolean,
        ) {

        //assign childNOdeConsecutiveNum 
        this.childNodeConsecutiveNum = 0;

        for(let i = this.childNodeConsecutiveNum; i < repeatCount; i++) {
            if(addConsectiveNumber == false) {
                EvaDOMBuilderUtil.childNode = document.createElement(nodeType);
                EvaDOMBuilderUtil.childNode.setAttribute(attributeType, attributeName);
    
                //set prevChildNode to current childNode for reference later
                EvaDOMBuilderUtil.prevChildNode = EvaDOMBuilderUtil.childNode;
    
                //check setInnerHTML argument
                if(setInnerHTML) {
                    EvaDOMBuilderUtil.childNode.innerHTML = setInnerHTML;
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);
                } else if(setInnerHTML === undefined) {
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);            
                }
            } else if(addConsectiveNumber === true) {
                EvaDOMBuilderUtil.childNode = document.createElement(nodeType);
                EvaDOMBuilderUtil.childNode.setAttribute(attributeType, attributeName);
    
                //set prevChildNode to current childNode for reference later
                EvaDOMBuilderUtil.prevChildNode = EvaDOMBuilderUtil.childNode;
    
                //check setInnerHTML argument
                if(setInnerHTML) {
                    EvaDOMBuilderUtil.childNode.innerHTML = setInnerHTML + this.childNodeConsecutiveNum;
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);
                } else if(setInnerHTML === undefined) {
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);            
                }
            }
        }
    }

    //dom builder child no attributes
    public DOMBuilderChildNoAttr(        
        nodeType: keyof HTMLElementTagNameMap, 
        setInnerHTML: string | undefined,
        appendToNode: Node,
        repeatCount: number,
        addConsectiveNumber: boolean
        ) {

        //assign childNOdeConsecutiveNum 
        this.childNodeConsecutiveNum = 0;

        for(let i = this.childNodeConsecutiveNum; i < repeatCount; i++) {
            if(addConsectiveNumber == false) {
                EvaDOMBuilderUtil.childNode = document.createElement(nodeType);
    
                //set prevChildNode to current childNode for reference later
                EvaDOMBuilderUtil.prevChildNode = EvaDOMBuilderUtil.childNode;
    
                //check setInnerHTML argument
                if(setInnerHTML) {
                    EvaDOMBuilderUtil.childNode.innerHTML = setInnerHTML;
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);
                } else if(setInnerHTML === undefined) {
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);            
                }
            } else if(addConsectiveNumber === true) {
                EvaDOMBuilderUtil.childNode = document.createElement(nodeType);
    
                //set prevChildNode to current childNode for reference later
                EvaDOMBuilderUtil.prevChildNode = EvaDOMBuilderUtil.childNode;
    
                //check setInnerHTML argument
                if(setInnerHTML) {
                    EvaDOMBuilderUtil.childNode.innerHTML = setInnerHTML + this.childNodeConsecutiveNum;
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);
                } else if(setInnerHTML === undefined) {
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);            
                }
            }
        }
    }

    //dom builder child with string array
    public DOMBuilderChildWithStringArray(        
        nodeType: keyof HTMLElementTagNameMap, 
        attributeType: string, 
        attributeName: string, 
        appendToNode: Node,
        stringArray: string[],
        addRef: boolean
        ) {    

        //check stringArray argument
        if(stringArray) {
            stringArray.forEach((elements) => {
                EvaDOMBuilderUtil.childNode = document.createElement(nodeType);
                EvaDOMBuilderUtil.childNode.setAttribute(attributeType, attributeName);

                //check ref argument
                if(addRef === true) {
                    //set prevChildNode to current childNode for reference later
                    EvaDOMBuilderUtil.prevChildNode = EvaDOMBuilderUtil.childNode;
                } else if(addRef === false) {
                    EvaDOMBuilderUtil.prevChildNode;
                }

                //set childNode innerHTML to iterated elements
                EvaDOMBuilderUtil.childNode.innerHTML = elements;

                appendToNode.appendChild(EvaDOMBuilderUtil.childNode);
            });
        }
    }

    //dom builder child with reference
    public DOMBuilderChildWithRef(
        nodeType: keyof HTMLElementTagNameMap, 
        attributeType: string, 
        attributeName: string, 
        //setTextContent: string | undefined, 
        setInnerHTML: string | undefined,
        appendToNode: Node,
        repeatCount: number,
        addConsectiveNumber: boolean,
        tempRef: boolean
        ) {

        //assign childNOdeConsecutiveNum 
        this.childNodeConsecutiveNum = 0;

        for(let i = this.childNodeConsecutiveNum; i < repeatCount; i++) {    
            if(addConsectiveNumber == false && tempRef === true) {
                EvaDOMBuilderUtil.childNode = document.createElement(nodeType);
                EvaDOMBuilderUtil.childNode.setAttribute(attributeType, attributeName);
    
                //set prevChildNode to current childNode for reference later
                EvaDOMBuilderUtil.prevChildNode = EvaDOMBuilderUtil.childNode;
    
                //temp ref child
                EvaDOMBuilderUtil.childNodeTempRef = EvaDOMBuilderUtil.childNode;

                //check setInnerHTML argument
                if(setInnerHTML) {
                    EvaDOMBuilderUtil.childNode.innerHTML = setInnerHTML;
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);
                } else if(setInnerHTML === undefined) {
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);            
                }
            } else if(addConsectiveNumber === true) {
                EvaDOMBuilderUtil.childNode = document.createElement(nodeType);
                EvaDOMBuilderUtil.childNode.setAttribute(attributeType, attributeName);
    
                //set prevChildNode to current childNode for reference later
                EvaDOMBuilderUtil.prevChildNode = EvaDOMBuilderUtil.childNode;
    
                //check setInnerHTML argument
                if(setInnerHTML) {
                    EvaDOMBuilderUtil.childNode.innerHTML = setInnerHTML + this.childNodeConsecutiveNum;
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);
                } else if(setInnerHTML === undefined) {
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);            
                }
            }
        }
    }

    //dom builder child with reference and no attributes
    public DOMBuilderChildWithRefNoAttr(
        nodeType: keyof HTMLElementTagNameMap, 
        setInnerHTML: string | undefined,
        appendToNode: Node,
        repeatCount: number,
        addConsectiveNumber: boolean,
        tempRef: boolean
        ) {

        //assign childNOdeConsecutiveNum 
        this.childNodeConsecutiveNum = 0;

        for(let i = this.childNodeConsecutiveNum; i < repeatCount; i++) {
            if(addConsectiveNumber == false && tempRef === true) {
                EvaDOMBuilderUtil.childNode = document.createElement(nodeType);
            
                //set prevChildNode to current childNode for reference later
                EvaDOMBuilderUtil.prevChildNode = EvaDOMBuilderUtil.childNode;
                
                //temp ref child
                EvaDOMBuilderUtil.childNodeTempRef = EvaDOMBuilderUtil.childNode;

            //check setInnerHTML argument
            if(setInnerHTML) {
                EvaDOMBuilderUtil.childNode.innerHTML = setInnerHTML;
                appendToNode.appendChild(EvaDOMBuilderUtil.childNode);
            } else if(setInnerHTML === undefined) {
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);            
                }
            } else if(addConsectiveNumber === true) {
                EvaDOMBuilderUtil.childNode = document.createElement(nodeType);
            
                //set prevChildNode to current childNode for reference later
                EvaDOMBuilderUtil.prevChildNode = EvaDOMBuilderUtil.childNode;

                //temp ref child
                //EvaDOMBuilderUtil.childNodeTempRef = EvaDOMBuilderUtil.childNode;

                //check setInnerHTML argument
                if(setInnerHTML) {
                    EvaDOMBuilderUtil.childNode.innerHTML = setInnerHTML + this.childNodeConsecutiveNum;
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);
                } else if(setInnerHTML === undefined) {
                    appendToNode.appendChild(EvaDOMBuilderUtil.childNode);            
                }
            }
        }
    }
}