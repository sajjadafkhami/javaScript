const upload = document.querySelector("#upload");
const data = document.querySelector("#data");
const form = document.querySelector("form");

upload.addEventListener('change', function(){
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/upload.php");
    
    const formData = new FormData(form); 

    xhr.addEventListener("load", function(){
        console.log("xhr.responseText");
    });

    
    xhr.upload.addEventListener("progress", function(event){
        data.innerHTML += "progress: " + event.loaded + "bytes received. <br />";
        if(event.lengthComputable){
            let percent = parseInt((event.loaded / event.total) * 100);
            data.innerHTML += "progress: " + percent + "% loaded.";
        }

    });

    xhr.send(formData);
});
