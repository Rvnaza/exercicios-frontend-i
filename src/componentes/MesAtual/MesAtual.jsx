import './MesAtual.css';
/*3. Crie um componente chamado 'MesAtual' que mostra o texto:
"03" em uma <div> com o fundo verde, texto justificado à esquerda na cor branco.*/

const MesAtual = () => {
    const mesAtual = new Date().getMonth() +1
    return (
        <>
            <div className='mesAtual'>
             Mês de hoje:   {mesAtual}
            </div>
        </>
    );
};
export default MesAtual;