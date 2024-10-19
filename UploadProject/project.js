const upload = document.querySelector("#files");


upload.addEventListener('change', function(){
    
    const files = upload.files;
    for (let i = 0; i < files.length; i++){
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost/upload.php");
    
        const formData = new FormData(); 
        formData.append(files[i].name, files[i]);
        const block = addProgressBlock(files[i]);

        xhr.upload.addEventListener("progress", function(event){
            const progressDiv = block.querySelector(".progress-bar div");
            const progressSpan = block.querySelector("span");
            
            if(event.lengthComputable){
                let percent = ((event.loaded / event.total) * 100).toFixed(1);
                data.innerHTML += "progress: " + percent + "% loaded.";
                progressSpan.innerHTML = percent + "%";
                progressDiv.Style.width = percent + "%"
            }
    
        });

        xhr.send(formData);
    }   
});

function addProgressBlock(file){
    const progressAreea = document.querySelector('#progress=area');
    const html = `<label>file: ${file.name}</label>
                    <div class="progress-bar>
                        <div style="width: 18%;"></div>
                            <span>0%</span>
                            </div>`
    const block = document.createElement("div");
    block.setAttribute("class", "progress-block");
    block.innerHTML = html;
    progressAreea.appendChild(block);
    return block;
}