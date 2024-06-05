

//              04/06/2024

// window.addEventListener(('scroll'), ()=> {
//     console.log('scrolled');
// })


//              forms

// let form = document.forms.bunkerForm;

// console.log(form.elements[0]);
// console.log(form.elements.login.value[0]);

//              onblur

/*
login.onblur = (event) => {
    console.log("test", event.target.value);

    if(event.target.value.includes("@")){
        loginError.innerHtml = null;
    } else {
        loginError.innerHtml = "hey";
        loginError.style.color = "red";
    }
}
//                      onkeypress
login.onkeypress = (event)=> {
    loginError.innerHtml = 'null';
};
//                                  onfocus
login.onfocus = (event)=> {
    loginError.innerHtml = null;
}
*/

const getData = (e)=> {
    console.log(e, window.location);
}
