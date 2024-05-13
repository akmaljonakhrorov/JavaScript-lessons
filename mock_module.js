        /* 13 may, 2024 yil */
        
        /* 
        what is module? - works only http(s) not local
        type = "module";

        old organization way:
        1) AMD by reuired.js
        2) CommonJS - by Node.js server
        3) UMD by AMD and CommonJS

        import and default import
        export and default export
        import directly file name itself  - import "text.js"
        import as change name
        */

export let users = {
    id:1, name: "Eshmat",
    id:2, name: "Eshmat",
    id:3, name: "Eshmat",
    id:4, name: "Eshmat",
    id:5, name: "Eshmat",
    id:6, name: "Eshmat",
    id:7, name: "Eshmat",
    id:8, name: "Eshmat",
    id:9, name: "Eshmat",
    id:10, name: "Eshmat",
};

const mentor = ()=>{
    console.log("hi, mentor");
}

const student = ()=>{
    console.log("hi, student");
}

export default mentor;