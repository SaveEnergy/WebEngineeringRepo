function onMouseOver(id) {

    string = document.getElementById(id).innerText;

    if ( string != 'Changed') {
        document.getElementById(id).addEventListener('mouseover', function () {
            document.getElementById(id).textContent = 'Changed';
        });
    }

    document.getElementById(id).addEventListener('mouseout', function () {
        document.getElementById(id).textContent = 'JS Testseite';
    });

}

function init() {

    console.log('DOM loaded!');

    document.getElementById('source').innerHTML = '<div ' +
        ' id = "content"></div>';
    document.getElementById('content').innerHTML = '<h1 ' +
        ' id="headline">JS Testseite 2</h1>';

    onMouseOver('headline');


}

document.addEventListener('DOMContentLoaded', init);