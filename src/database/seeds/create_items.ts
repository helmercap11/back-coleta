import knex from 'knex';

export async function seed(knex: knex) {
    await knex('items').insert([
        { title: 'Lámpadas', image: 'lampadas.svg'},
        { title: 'Pilhas e Baterias', image: 'baterias.svg'},
        { title: 'Papeis e Papelão', image: 'papeis-papelao.svg'},
        { title: 'Residuos Electrónicos', image: 'eletronicos.svg'},
        { title: 'Resíduos Orgânicos', image: 'organicos.svg'},
        { title: 'Óleo de Cozinha', image: 'oleo.svg'},
    ])
}