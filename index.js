const inputBtn = document.querySelector("#songName")
const showArea = document.querySelector("#showArea")
const songOpt  = document.querySelector("#songOpt")

inputBtn.addEventListener("change",readfile)
songOpt.addEventListener("change",selectSong)

createOpt()

function readfile()
{
    // console.log(inputBtn.value)
    const songName = inputBtn.value
    console.log("/sheets/"+songName+".txt"+", "+inputBtn.value)
    fetch("/sheets/"+songName+".txt")
                .then(response => response.text())
                .then(text => {
                    showArea.innerHTML = text;
                })
                .catch(error => {
                    console.error('取得檔案時出錯:', error);
                });   
    inputBtn.value = "";
}

function selectSong()
{
    const songName = songOpt.value;
    console.log("/sheets/"+songName+".txt"+", "+songOpt.value)
    fetch("/sheets/"+songName+".txt")
                .then(response => response.text())
                .then(text => {
                    showArea.innerHTML = text;
                })
                .catch(error => {
                    console.error('取得檔案時出錯:', error);
                });   

    songOpt.value = "orig";
}

function createOpt()
{   
    songList = "_songList"
    
    fetch("/sheets/"+songList+".txt")
                .then(response => response.text())
                .then(text => {
                    let songArr = text.split(";")
                //for each file
                    songArr.forEach((songName) => {
                    let newOpt = document.createElement("option")
                    newOpt.value = songName;
                    newOpt.innerHTML = songName;
                    songOpt.appendChild(newOpt)
                    })
                })
                .catch(error => {
                    console.error('取得檔案時出錯:', error);
                });   

}

