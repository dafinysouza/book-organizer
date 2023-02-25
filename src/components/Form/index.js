import InputText from '../InputText';

import './style.css';

const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Prencha os campos para cadastrar um livro</h2>
                <InputText label='Livro' placeholder='Digite o nome do livro' />
                <InputText label='Gênero' placeholder='Digite o gênero do livro' />
                <InputText label='Imagem' placeholder='Insira a imagem de capa' />
            </form>
        </section>
    )
}

export default Form;