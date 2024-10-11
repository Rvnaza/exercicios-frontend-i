import './HoraAtual.css'

/*. Crie um componente chamado 'HoraAtual' que mostra o texto:
"20" em uma <div> redonda 50x50 px centralizada com o fundo azul, texto na cor
amarelo.*/

const HoraAtual = () => {
    const horaAtual = new Date().getHours()

    return (
        <>
            <div className='divHoraAtual'>

                <div className='horaAtual'>
                    {horaAtual} H
                </div>
            </div>
        </>
    )
}

export default HoraAtual;