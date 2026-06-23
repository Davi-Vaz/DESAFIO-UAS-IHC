    //A: Classe Item
class Item {
    public nome: string;
    public descricao: string;
    public preco: number;
    public marca: string;
    public categoria: string;

    constructor(
        nome: string,
        descricao: string,
        preco: number,
        marca: string,
        categoria: string
    ) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.marca = marca;
        this.categoria = categoria;
    }
}

//B: Classe Checkout
class Checkout {
    public listaProdutos: Item[];

    constructor(listaProdutos: Item[]) {
        this.listaProdutos = listaProdutos;
    }

    public calcularTotal(): number {
        let soma: number = 0;
        for (const item of this.listaProdutos) {
            soma += item.preco;
        }
        return soma;
    }
}

//C: Criando produtos e realizando a soma
const ultrabook = new Item(
    "Ultrabook Pro",
    "Computador leve com SSD rápido e bateria duradoura",
    3499.90,
    "Acer",
    "Notebooks"
);

const tecladoMecanico = new Item(
    "Teclado Mecânico RGB",
    "Teclado retroiluminado com switches táteis",
    259.90,
    "Redragon",
    "Periféricos"
);

const pedido = new Checkout([ultrabook, tecladoMecanico]);
const total = pedido.calcularTotal();

console.log("Resumo do Pedido");
console.log(`${ultrabook.nome} - R$ ${ultrabook.preco.toFixed(2)}`);
console.log(`${tecladoMecanico.nome} - R$ ${tecladoMecanico.preco.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);