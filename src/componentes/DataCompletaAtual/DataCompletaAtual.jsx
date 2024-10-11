import './DataCompletaAtual.css'

/*7. Crie um componente chamado 'DataCompletaAtual' que mostra o texto:
"15/03/2024 20:30" em uma <div> com o fundo marrom, texto centralizado na cor
branca.*/

const DataCompletaAtual = () => {
    const diaCompletoAtual = new Date().getDate();
    const mesCompletoAtual = new Date().getMonth() + 1;
    const anoCompletaAtual = new Date().getFullYear();

    return (
        <>
            <div className='dataCompletaAtual'>
                {diaCompletoAtual}/{mesCompletoAtual}/{anoCompletaAtual}
            </div>
        </>
    );
};

export default DataCompletaAtual