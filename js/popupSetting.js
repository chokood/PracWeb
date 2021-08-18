var modal = document.getElementById("modal");
//var btn = document.getElementById("btnLogin");
//var span = document.getElementsByClassName("close")[0];

function openPopupSetting()
{
    console.log('openSetting');
    modal.style.display = "block";
}

window.onclick = function(event) 
{
    if( event.target == modal ) {
        modal.style.display = "none";
    }
};