let font_size_basic = 12
let font_size_subtitles = 24

console.log(document.getElementById("aumenta-fonte"))


function configura_botoes_acess (_btn_ref, _pos_state, _pos_up, _pos_right, _width, _height, _visibility) {
    _btn_ref.style.position = _pos_state
    _btn_ref.style.top = _pos_up
    _btn_ref.style.right = _pos_right

    _btn_ref.style.width = _width
    _btn_ref.style.height = _height

    _btn_ref.style.display = _visibility
    _btn_ref.style.zIndex = "9999"
}

function muda_fonte (_type, _p_queryAll, _st_queryAll, _param_1, _param_2) {

        switch (_type) {
            case "tamanho":
                _p_queryAll.forEach(p => {
                    p.style.fontSize = _param_1 + "px"
                });

                _st_queryAll.forEach(h3 => {
                    h3.style.fontSize = _param_2 + "px"
                });
                break;
            case "contraste":
                _p_queryAll.forEach(p => {
                    p.style.color = _param_1
                });

                _st_queryAll.forEach(h3 => {
                    h3.style.color = _param_2
                });
                break;
        } 

}



document.addEventListener("DOMContentLoaded", function () {
    let acessAtiva = false
    let constrAtivo = false
    let temaAtivo = "claro"

    const aumentaBotao = document.getElementById("aumenta-fonte")
    const diminuiBotao = document.getElementById("diminui-fonte")
    const contrasteBotao = document.getElementById("faz-contraste")
    const temaBotao = document.getElementById("muda-tema")

    const accesBotao = document.getElementById("ativa-acessibilidade")

    const texto_acessibilidade = document.createTextNode("  acessibilidade")

    const paragrafo = document.querySelectorAll("p")
    const subtitulos = document.querySelectorAll("h3")

    configura_botoes_acess(accesBotao, "fixed", "50%", "10px", "auto", "auto", "block")

    configura_botoes_acess(aumentaBotao, "fixed", "120px", "20px", "250px", "auto", "none")
    configura_botoes_acess(diminuiBotao, "fixed", "160px", "20px", "250px", "auto", "none")
   
    configura_botoes_acess(contrasteBotao, "fixed", "200px", "20px", "250px", "auto", "none")
    configura_botoes_acess(temaBotao, "fixed", "240px", "20px", "250px", "auto", "none")

    function mudaCores (_tema, _constr) {
        var fundo_arcoIRis = document.getElementById("nosso-objetivo")
        var galeria = document.getElementById("galeria-box")

        if (_tema == "claro") {
            document.body.style.backgroundColor = _constr ? "white" : "#f0f0f0"
            galeria.style.backgroundColor = _constr ? "gray": "rgb(30, 255, 124)"
            fundo_arcoIRis.style.backgroundColor = _constr ? "none" : "white"

            if (_constr) {
                muda_fonte("contraste", paragrafo, subtitulos, "black", "black")
            } else {
                muda_fonte("contraste", paragrafo, subtitulos, "rgb(51, 51, 51)", "rgb(86, 131, 3)")
            } 
        } else if (_tema == "escuro") {
            document.body.style.backgroundColor = _constr ? "black" : "#202020ff"
            galeria.style.backgroundColor = _constr ? "gray": "rgba(27, 0, 78, 1)"
            fundo_arcoIRis.style.backgroundColor = _constr ? "none" : "black"

            if (_constr) {
                muda_fonte("contraste", paragrafo, subtitulos, "#FFFF00", "white")
            } else {
                muda_fonte("contraste", paragrafo, subtitulos, "rgba(216, 216, 216, 1)", "rgba(166, 255, 0, 1)")
            } 
        }
    } 

    function criaBotaoFonte (_btn_ref, _soma) {
        _btn_ref.addEventListener("click", function () {
            font_size_basic += _soma
            font_size_subtitles += _soma

            muda_fonte("tamanho", paragrafo, subtitulos, font_size_basic, font_size_subtitles)
        })
    }

    criaBotaoFonte(aumentaBotao, 2)
    criaBotaoFonte(diminuiBotao, -2)

    temaBotao.addEventListener("click", function () {
        temaAtivo = temaAtivo == "claro" ? "escuro" : "claro"
        

        mudaCores(temaAtivo, constrAtivo)
    })

    contrasteBotao.addEventListener("click", function () {
        constrAtivo = !constrAtivo
        console.log(constrAtivo)
        mudaCores(temaAtivo, constrAtivo)
    })


    accesBotao.addEventListener("click", function () {
        var _botoes = document.querySelectorAll(".acessibilidade")
        acessAtiva = !acessAtiva

        if (acessAtiva) {
            if (acessAtiva && !accesBotao.contains(texto_acessibilidade)) {
                accesBotao.appendChild(texto_acessibilidade);
            }
            configura_botoes_acess(accesBotao, "fixed", "80px", "20px", "250px", "auto", "block")
         
        } else {
            accesBotao.removeChild(texto_acessibilidade)
            configura_botoes_acess(accesBotao, "fixed", "50%", "20px", "auto", "auto", "block")
        }

        _botoes.forEach (_btn => {
            _btn.style.display = acessAtiva ? "block" : "none";
        })        
    })

    anime ({
        targets: ".show-up",
        opacity: [0, 1],
        duration: 1000,
        easing: "easeInOutQuad",
        translateY: [-50, 0]
    })
})
