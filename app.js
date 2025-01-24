let nome = document.querySelector('h1');
nome.textContent = 'Leonel Pereira de Almeida';

let telefone = document.getElementById('telefone');
telefone.textContent = '(21) 97615-7347';

let email = document.getElementById('email');
email.textContent = 'leonelalmeida.10.la@gmail.com';

let endereco = document.getElementById('endereco');
let link = document.createElement('a');
link.href = 'https://www.google.com.br/maps/place/R.+Alzira+Brand%C3%A3o+-+Tijuca,+Rio+de+Janeiro+-+RJ,+20550-035/@-22.9220775,-43.2272582,17z/data=!3m1!4b1!4m6!3m5!1s0x997e45bba185ef:0x376aa87a9a9e1138!8m2!3d-22.9221873!4d-43.2247729!16s%2Fg%2F11c0r59ysg?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D';
link.textContent = 'Rio de Janeiro - RJ - 20550-035';
link.target = '_blank';
endereco.appendChild(link);

let tituloSobre = document.getElementById('tituloSobre');
tituloSobre.textContent = 'Resumo';

let paragrafoSobre = document.getElementById('paragrafoSobre');
paragrafoSobre.textContent = 'Estudante de Tecnologia da Informação, apaixonado por tecnologia. Com grande interesse em especial pela área de desenvolvimento de software, desejo sempre ampliar meus conhecimentos nessa área, bem como poder prover soluções práticas para outros por meio da tecnologia.';

let tituloFormacao = document.getElementById('tituloFormacao');
tituloFormacao.textContent = 'Formação acadêmica';

let ensinoMedio = document.getElementById('ensinoMedio');
ensinoMedio.textContent = 'Ensino Médio Completo';

let ensinoSuperior = document.getElementById('ensinoSuperior');
ensinoSuperior.textContent = 'Ensino Superior Cursando (Ciência da Computação)';

let tituloExperiencia = document.getElementById('tituloExperiencia');
tituloExperiencia.textContent = 'Experiência';

let experiencia1 = document.getElementById('experiencia1');
experiencia1.textContent = 'Jovem Aprendiz Administrativo - Hospital Pró-Cardíaco';

let experiencia2 = document.getElementById('experiencia2');
experiencia2.textContent = 'Analista de Sinistro - Falcão Serviços Administrativos';

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