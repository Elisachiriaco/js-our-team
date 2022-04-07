// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

const membri = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'img/walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto:'img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'img/scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'img/barbara-ramos-graphic-designer.jpg'
    }
];
console.log(membri);


function card() {
    let cardMembri = document.getElementsByClassName('team-container')[0];
    for (let i = 0; i < membri.length; i++) {
        cardMembri.innerHTML += `
    <div class="team-card">
            <div class="card-image">
                <img src=" ${membri[i].foto} " alt="Wayne Barnett">
            </div>
        <div class="card-text">
            <h3> ${membri[i].nome} </h3>
            <p> ${membri[i].ruolo} </p>
         </div>
    </div>`
    }
}
card();