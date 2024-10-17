import "./ListaProdutos.css";
/*9. Crie um componente chamado 'ListaProdutos' que aceita uma prop chamada
'produtos' e deve ser uma lista de nomes de produtos.
O componente deve listar os itens em tela em uma <ul> com o fundo roxo e a letra
amarela.*/

const ListaProtudos = (props) => {

  return (
    <>
      <div className="listaProdutos">
        <ul>

        {props.produtos.map((itemProduto) => {
            return <li>{itemProduto.nome}</li>
        })}
        </ul>
      </div>
    </>
  );
};

export default ListaProtudos;
