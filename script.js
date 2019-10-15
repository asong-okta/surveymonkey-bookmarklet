var defaultScore = prompt('Score?');
document.querySelectorAll('label>span[data-position="' + (defaultScore-1) +'"]').forEach(function(e) {e.click()});
document.querySelector('select').selectedIndex = (6-defaultScore);
