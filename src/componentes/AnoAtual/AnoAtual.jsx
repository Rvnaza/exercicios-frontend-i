import './AnoAtual.css'

/*Crie um componente chamado 'AnoAtual' que mostra o texto:
"2024" em uma <div> com o fundo vermelho, justificado à direita na cor amarelo.
*/

const AnoAtual = () => {
    const anoAtual = new Date().getFullYear()
    return (

        <>
            <div className='anoAtual'>
Ano atual: {anoAtual}


            </div>
        </>
    )
};

export default AnoAtual;