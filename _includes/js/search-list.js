// Via http://stackoverflow.com/questions/15597736/filter-search-for-ul
var input = document.getElementById('input');
input.onkeyup = function() {
    var filter = input.value.toUpperCase();
    var lis = document.getElementsByTagName('li');
    for(var i = 0; i < lis.length; i++) {
        var name = lis[i].getElementsByClassName('name')[0].innerHTML;
        if(name.toUpperCase().indexOf(filter) == 0) {
            lis[i].style.display = 'block';
        } else {
            lis[i].style.display = 'none';
        }
    }
}