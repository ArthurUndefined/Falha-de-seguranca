const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 0;

function Main(){

    //slide 1
    ArrayPassword.forEach((password) => {
        

            //slide 2
            for(var i = 0; i < ArrayPassword.length; i++) {
                
                if(ArrayPassword[i].length >= password.length){

                    let senha = [];

                    senha.push(ArrayPassword[i]);  

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