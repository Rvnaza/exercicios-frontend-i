import './DiaAtual.css';
/*2. Crie um componente chamado 'DiaAtual' que mostra o texto: "15" em uma <div> com o fundo azul, texto centralizado na cor branco*/

const DiaAtual = () => {
    const diaAtual = new Date().getDate();
    return (
        <>
        <div className='diaAtual'>
           Dia de hoje: {diaAtual}
        </div>
        </>
    );
};
export default DiaAtual;