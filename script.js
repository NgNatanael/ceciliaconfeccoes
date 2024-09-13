function redirecionarWhatsApp(item) {
    var numeroVendedora = "558399999999"; // Coloque o número da vendedora aqui
    var mensagem = "Olá, estou interessado(a) no item: " + item;
    var url = "https://wa.me/" + numeroVendedora + "?text=" + encodeURIComponent(mensagem);
    window.open(url, "_blank");
}
