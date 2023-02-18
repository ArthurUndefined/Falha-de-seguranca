const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let ArrayPassword = []
let contador = 0;

function Main(){

    //slide 1
    ArrayPassword.forEach((password) => {
        

            //slide 2
            for(var i = 0; i < ArrayPassword.length; i++) {
                
                //criar lista de senhas maiores ou do mesmo tamanho que a atual
                if(ArrayPassword[i].length >= password.length){

                    let senha = [];

                    //não colocar a propria palavra da lista
                    if(i != ArrayPassword.indexOf(password)){
                        senha.push(ArrayPassword[i]);  

                        //test
                        console.log(`as senhas maiores que ${password} são: ${senha}`)
                    }

                }
            }

    });

}

rl.question('número de usuários: ', (passwordLength) => {

    let i = 1;
    const askPassword = () => {

        rl.question(`senha do usuário ${i}º: `, (password) => {

            ArrayPassword.push(password);
            i++;

            if (i > passwordLength) {
                Main()
                rl.close();
            } else {
                askPassword();
            }

        });
    };

    askPassword();

});