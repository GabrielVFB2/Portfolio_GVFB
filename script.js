window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const conteudo = document.getElementById("conteudo");
    const logo = document.getElementById("logo");

    const botaoExplorer =
        document.querySelector(".explorer");

    const taskbarExplorer =
        document.getElementById("taskbar-explorer");

    const explorerWindow =
        document.getElementById("explorer-window");

    const fecharExplorer =
        document.getElementById("fechar-explorer");


    const cmdButton =
        document.getElementById("cmd-button");

    const cmdWindow =
        document.getElementById("cmd-window");

    const fecharCmd =
        document.getElementById("fechar-cmd");

    const cmdInput =
        document.getElementById("cmd-input");

    const cmdOutput =
        document.getElementById("cmd-output");

    conteudo.style.display = "block";

    setTimeout(() => {

        loader.classList.add("saindo");
        logo.classList.add("logo-saindo");

    }, 300);


    setTimeout(() => {

        loader.style.display = "none";

    }, 1500);

    function abrirExplorer() {

        explorerWindow.classList.add("aberto");

        explorerWindow.style.zIndex = "6000";

        cmdWindow.style.zIndex = "5500";
    }


    function fecharExplorerJanela() {

        explorerWindow.classList.remove("aberto");
    }


    botaoExplorer.addEventListener(
        "click",
        abrirExplorer
    );


    taskbarExplorer.addEventListener(
        "click",
        abrirExplorer
    );


    fecharExplorer.addEventListener(
        "click",
        fecharExplorerJanela
    );

    function abrirCMD() {

        cmdWindow.classList.add("aberto");

        cmdWindow.style.zIndex = "6000";

        explorerWindow.style.zIndex = "5500";


        setTimeout(() => {

            cmdInput.focus();

        }, 100);
    }


    function fecharCMD() {

        cmdWindow.classList.remove("aberto");
    }


    cmdButton.addEventListener(
        "click",
        abrirCMD
    );


    fecharCmd.addEventListener(
        "click",
        fecharCMD
    );


    cmdInput.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Enter") {
                return;
            }


            const comando =
                cmdInput.value
                    .trim()
                    .toLowerCase();


            if (!comando) {
                return;
            }


            adicionarLinha(
                `<span class="cmd-green">
                    portfolio@GVFB:~$
                </span> ${comando}`
            );


            executarComando(comando);


            cmdInput.value = "";
        }
    );
    function adicionarLinha(texto) {

        const linha =
            document.createElement("div");


        linha.innerHTML = texto;


        cmdOutput.appendChild(linha);


        cmdOutput.scrollTop =
            cmdOutput.scrollHeight;
    }

    function executarComando(comando) {

        switch (comando) {

            case "help":

                adicionarLinha(`
                    <br>

                    <span class="cmd-yellow">
                        Comandos disponíveis:
                    </span>

                    <br><br>

                    <span class="cmd-blue">about</span>
                    - Sobre mim<br>

                    <span class="cmd-blue">skills</span>
                    - Minhas habilidades<br>

                    <span class="cmd-blue">projects</span>
                    - Meus projetos<br>

                    <span class="cmd-blue">contact</span>
                    - Informações de contato<br>

                    <span class="cmd-blue">whoami</span>
                    - Quem sou eu<br>

                    <span class="cmd-blue">clear</span>
                    - Limpa o terminal<br>

                    <span class="cmd-blue">date</span>
                    - Mostra a data atual<br>

                    <span class="cmd-blue">ver</span>
                    - Informações do sistema

                    <br><br>
                `);

                break;


            case "about":

                adicionarLinha(`
                    <br>

                    <span class="cmd-yellow">
                        SOBRE MIM
                    </span>

                    <br><br>

                    Olá! Meu nome é
                    <span class="cmd-green">
                        Gabriel Victor
                    </span>.

                    <br>

                    Sou desenvolvedor e estou
                    construindo este portfólio.

                    <br><br>

                    Atualmente estudo e desenvolvo
                    projetos utilizando tecnologias
                    como HTML, CSS, JavaScript e C#.

                    <br><br>
                `);

                break;


            case "whoami":

                adicionarLinha(`
                    <br>

                    <span class="cmd-green">
                        GVFB
                    </span>

                    <br><br>

                    Desenvolvedor / Estudante

                    <br>

                    Criador deste portfólio.

                    <br><br>
                `);

                break;


            case "skills":

                adicionarLinha(`
                    <br>

                    <span class="cmd-yellow">
                        SKILLS
                    </span>

                    <br><br>

                    [██████████] HTML<br>
                    [█████████░] CSS<br>
                    [████████░░] JavaScript<br>
                    [███████░░░] C#<br>
                    [██████░░░░] Git

                    <br><br>
                `);

                break;


            case "projects":

                adicionarLinha(`
                    <br>

                    <span class="cmd-yellow">
                        PROJETOS
                    </span>

                    <br><br>

                    01. Windows 11 Portfolio<br>
                    02. Sistema Web<br>
                    03. Projetos em JavaScript<br>
                    04. Projetos em C#

                    <br><br>
                `);

                break;


            case "contact":

                adicionarLinha(`
                    <br>

                    <span class="cmd-yellow">
                        CONTATO
                    </span>

                    <br><br>

                    GitHub:
                    github.com/gabrielvfb2

                    <br>

                    Email:
                    gabrielvfb1@gmail.com

                    <br><br>
                `);

                break;


            case "date":

                adicionarLinha(
                    new Date().toLocaleString("pt-BR")
                );

                break;


            case "ver":

                adicionarLinha(`
                    <br>

                    Windows 11 - GVFB Portfolio

                    <br>

                    Terminal v1.0

                    <br>

                    JavaScript Portfolio Environment

                    <br><br>
                `);

                break;


            case "clear":

                cmdOutput.innerHTML = "";

                break;


            default:

                adicionarLinha(`
                    <span class="cmd-red">
                        '${comando}' não é reconhecido
                        como um comando.
                    </span>

                    <br>

                    Digite
                    <span class="cmd-green">
                        help
                    </span>
                    para ver os comandos disponíveis.

                    <br><br>
                `);

        }
    }
    function tornarMovel(janela, cabecalho) {

        let movendo = false;

        let offsetX = 0;
        let offsetY = 0;


        cabecalho.addEventListener(
            "mousedown",
            iniciarMovimento
        );


        cabecalho.addEventListener(
            "touchstart",
            iniciarMovimento,
            { passive: false }
        );


        function iniciarMovimento(event) {

            if (
                event.target.tagName === "BUTTON"
            ) {
                return;
            }


            if (window.innerWidth <= 600) {
                return;
            }


            const ponto =
                event.touches
                    ? event.touches[0]
                    : event;


            const rect =
                janela.getBoundingClientRect();


            movendo = true;


            offsetX =
                ponto.clientX - rect.left;

            offsetY =
                ponto.clientY - rect.top;


            janela.style.transition = "none";


            janela.style.left =
                `${rect.left}px`;

            janela.style.top =
                `${rect.top}px`;


            janela.style.transform =
                "scale(1)";


            document.addEventListener(
                "mousemove",
                mover
            );


            document.addEventListener(
                "mouseup",
                parar
            );


            document.addEventListener(
                "touchmove",
                mover,
                { passive: false }
            );


            document.addEventListener(
                "touchend",
                parar
            );
        }


        function mover(event) {

            if (!movendo) {
                return;
            }


            event.preventDefault();


            const ponto =
                event.touches
                    ? event.touches[0]
                    : event;


            let x =
                ponto.clientX - offsetX;

            let y =
                ponto.clientY - offsetY;


            const largura =
                janela.offsetWidth;

            const altura =
                janela.offsetHeight;


            const limiteX =
                window.innerWidth - largura;


            const limiteY =
                window.innerHeight - altura;


            x = Math.max(
                0,
                Math.min(x, limiteX)
            );


            y = Math.max(
                0,
                Math.min(y, limiteY)
            );


            janela.style.left =
                `${x}px`;

            janela.style.top =
                `${y}px`;
        }


        function parar() {

            movendo = false;


            janela.style.transition = "";


            document.removeEventListener(
                "mousemove",
                mover
            );


            document.removeEventListener(
                "mouseup",
                parar
            );


            document.removeEventListener(
                "touchmove",
                mover
            );


            document.removeEventListener(
                "touchend",
                parar
            );
        }
    }


    tornarMovel(
        explorerWindow,
        document.querySelector(".explorer-header")
    );


    tornarMovel(
        cmdWindow,
        document.querySelector(".cmd-header")
    );

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }


            fecharExplorerJanela();

            fecharCMD();
        }
    );

});