import './MinutoAtual.css'

// 6. Crie um componente chamado 'MinutoAtual' que mostra o texto:
// "30" em uma <div> redonda 50x50 px centralizada com o fundo rosa, texto na cor
// preta

const MinutoAtual = () => {
    const minutoAtual = new Date().getMinutes();

    return (
        <>
            <div className='divMinutoAtual'>

                <div className='minutoAtual'>
                    {minutoAtual}
                </div>

            </div>
        </>
    );

};

export default MinutoAtual;