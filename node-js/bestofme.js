//declaro questões

const questions = [
    "Qual o seu nome?",
    "Qual é a sua idade?", 
    "Qual é a sua comida favorita?"
]

// crio uma função que irá imprimir no console utilizando stdout.write a questão escolhida

const ask = (index = 0) => {
    process.stdout.write(questions[index] + " > ");
}

ask();

const answers = []; 

//criando um listener para observar o comportamento do usuario interagindo com o console
process.stdin.on("data", data => {
    answers.push(data.toString().trim()); 
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        // process.stdout.write(answers.toString());
        // console.log(answers);
        process.exit();
    }
})

process.on('exit', () => 
{
    console.log(`
        Obrigada pelas respostas, ${answers[0]}!

        Achei muito legal saber que você tem ${answers[1]} anos e que sua comida favorita é ${answers[2]}! 

        Até a próxima ;)
    `)
})
