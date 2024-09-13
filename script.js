let cartItems = [];

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

function abrirModal(titulo) {
    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modal-title');
    var modalImg = document.getElementById('modal-img');
    
    // Define o título e imagem (você pode ajustar com base nos produtos)
    modalTitle.innerText = titulo;
    modalImg.src = "https://source.unsplash.com/random/300x400?" + titulo.toLowerCase().replace(" ", "");

    modal.classList.add("open");
}

function fecharModal() {
    var modal = document.getElementById('modal');
    modal.classList.remove("open");
}

function adicionarAoCarrinho(item) {
    var tamanhoSelecionado = document.getElementById('sizes').value;
    var itemComTamanho = item + " - Tamanho: " + tamanhoSelecionado;
    cartItems.push(itemComTamanho);
    atualizarCarrinho();
    fecharModal(); // Fecha o modal ao adicionar ao carrinho
}

function atualizarCarrinho() {
    var cartList = document.getElementById('cart-items');
    cartList.innerHTML = "";
    cartItems.forEach(function(item) {
        var li = document.createElement('li');
        li.innerText = item;
        cartList.appendChild(li);
    });

    // Abre o carrinho automaticamente ao adicionar itens
    document.getElementById('cart').classList.add('open');
}

function finalizarCompra() {
    if (cartItems.length > 0) {
        var numeroVendedora = "558399999999"; // Coloque o número da vendedora aqui
        var mensagem = "Olá, estou interessado(a) nos seguintes itens: " + cartItems.join(", ");
        var url = "https://wa.me/" + numeroVendedora + "?text=" + encodeURIComponent(mensagem);
        window.open(url, "_blank");
    } else {
        alert("Seu carrinho está vazio!");
    }
}
