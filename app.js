let nome = document.querySelector('h1');
nome.textContent = 'Leonel Pereira de Almeida';

let social1 = document.getElementById('social1');
let linkSocial1 = document.createElement('a');
linkSocial1.href = 'https://www.linkedin.com/in/leonel-almeida-240228229/';
linkSocial1.textContent = 'LinkedIn \u{1F517}';
linkSocial1.target = '_blank';
social1.appendChild(linkSocial1);

let social2 = document.getElementById('social2');
let linkSocial2 = document.createElement('a');
linkSocial2.href = 'https://github.com/Leonel-p-a';
linkSocial2.textContent = 'GitHub \u{1F517}';
linkSocial2.target = '_blank';
social2.appendChild(linkSocial2);

let telefone = document.getElementById('telefone');
telefone.textContent = '(21) 97615-7347';

let email = document.getElementById('email');
email.textContent = 'leonelalmeida.10.la@gmail.com';

let endereco = document.getElementById('endereco');
let linkEndereco = document.createElement('a');
linkEndereco.href = 'https://www.google.com.br/maps/place/R.+Alzira+Brand%C3%A3o+-+Tijuca,+Rio+de+Janeiro+-+RJ,+20550-035/@-22.9220775,-43.2272582,17z/data=!3m1!4b1!4m6!3m5!1s0x997e45bba18';
linkEndereco.textContent = 'Rio de Janeiro - RJ - 20550-035';
linkEndereco.target = '_blank';
endereco.appendChild(linkEndereco);

let tituloSobre = document.getElementById('tituloSobre');
tituloSobre.textContent = 'Resumo';

let paragrafoSobre = document.getElementById('paragrafoSobre');
paragrafoSobre.textContent = 'Estudante de Tecnologia da Informação, apaixonado por tecnologia. Com grande interesse em especial pela área de desenvolvimento de software, desejo sempre ampliar meus conhecimentos nessa área, bem como poder prover soluções práticas para outros por meio da tecnologia.';

let tituloFormacao = document.getElementById('tituloFormacao');
tituloFormacao.textContent = 'Formação acadêmica';

let ensinoMedio = document.getElementById('ensinoMedio');
ensinoMedio.textContent = 'Ensino Médio Completo';

let ensinoSuperior = document.getElementById('ensinoSuperior');
ensinoSuperior.textContent = 'Ensino Superior Cursando (Ciência da Computação - Universidade Veiga de Almeida - 2025 - 2028)';

let tituloExperiencia = document.getElementById('tituloExperiencia');
tituloExperiencia.textContent = 'Experiência';

let experiencia1 = document.getElementById('experiencia1');
experiencia1.textContent = 'Analista de Sinistro - Falcão Serviços Administrativos - 02/2022 - 10/2024';

let experiencia2 = document.getElementById('experiencia2');
experiencia2.textContent = 'Jovem Aprendiz Administrativo - Hospital Pró-Cardíaco - 09/2018 - 10/2019';

let tituloHabilidades = document.getElementById('tituloHabilidades');
tituloHabilidades.textContent = 'Habilidades';

let habilidade1 = document.getElementById('habilidade1');
habilidade1.textContent = 'HTML';

let habilidade2 = document.getElementById('habilidade2');
habilidade2.textContent = 'CSS';

let habilidade3 = document.getElementById('habilidade3');
habilidade3.textContent = 'JavaScript';

let habilidade4 = document.getElementById('habilidade4');
habilidade4.textContent = 'Git';

let habilidade5 = document.getElementById('habilidade5');
habilidade5.textContent = 'GitHub';

let tituloIdiomas = document.getElementById('tituloIdiomas');
tituloIdiomas.textContent = 'Idiomas'

let idiomaPortugues = document.getElementById('idiomaPortugues');
idiomaPortugues.textContent = 'Português - Nativo'

let idiomaIngles = document.getElementById('idiomaIngles');
let englishProciciencyLink = document.createElement('a');
englishProciciencyLink.href = 'https://cert.efset.org/SGhRRP';
englishProciciencyLink.textContent = 'Inglês - C1 \u{1F517}';
englishProciciencyLink.target = '_blank';
idiomaIngles.appendChild(englishProciciencyLink)