function redirecionarWhatsApp(item) {
    var numeroVendedora = "558399999999"; // Coloque o número da vendedora aqui
    var mensagem = "Olá, estou interessado(a) no item: " + item;
    var url = "https://wa.me/" + numeroVendedora + "?text=" + encodeURIComponent(mensagem);
    window.open(url, "_blank");
}

function buscarProduto() {
    var input = document.getElementById('searchBar').value.toLowerCase();
    var items = document.querySelectorAll('.item');
    
    items.forEach(function(item) {
        var nome = item.getAttribute('data-name').toLowerCase();
        if (nome.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
