 //considere a quantidade de alunos presente na sala, percorra do zero até o numero.

 //se o número for par, escreva "par" e o numero correspondente.
 //se o numero for impar, escreva "impar" e o número correspondente.
 //se o número for zero, escreva "zero" e o número correspondente.

 let alunosPresentes = 17;

 for (let aluno = 0; aluno <= alunosPresentes; aluno++){
    if(aluno == 0){

        console.log("zero" + aluno)
    }
    if(aluno % 2 == 0){
        console.log("par" + aluno);
    }else{
        console.log("impar" + aluno);
    }
    }

 