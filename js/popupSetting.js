var modal = document.getElementById("modal");

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