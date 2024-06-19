
// This file will be the web component 
// It only needs to run, not be imported by main.js

const template  = document.createElement('template');
template.innerHTML = `
 <style>

 /* @import url(); */

 div {
   /* border: 2px solid black;*/
   padding: 3rem;
   margin: 3rem;
   
 }

 :host {
    /* for the shadow root -- bu create qilingan tag masalan: cust-el */
    background-color: yellow;
    display: block;
}

:host(cust-el){
/*background-color: cornflowerblue;*/
}

:host-context (main){
    background-color: gold;
}

 </style>

<div>
<slot name = "list"></slot>
    <h1>custom element theory 2 </h1>
   <slot name="title">characters</slot>

</div>
`;



class customEl extends HTMLElement {
    constructor() {
     super();   
   
    const shadowRoot = this.attachShadow({mode: 'closed'});
    // let div  = document.createElement('div');
    // div.textContent = 'Custom element theory';
    // shadowRoot.append(div);

    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
    } 
}

customElements.define('cust-el',customEl);