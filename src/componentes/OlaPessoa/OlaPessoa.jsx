import './OlaPessoa.css'
/*8. Crie um componente chamado 'OlaPessoa' que aceita uma prop chamada 'nome'
e mostra o texto:
"Olá, [nome]!" em uma <div> com o fundo laranja, texto centralizado na cor branca.*/

const OlaPessoa = () => {

const nomePessoa = prompt('Digite seu nome: ')

return (
    <>
    <div className='olaPessoa'>
        Olá, {nomePessoa}
    </div>
    </>
)

};

export default OlaPessoa;