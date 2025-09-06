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
}

function muda_tamanho_fonte (_p_queryAll, _st_queryAll, _fnt_b_s, _fnt_t_s) {
        _p_queryAll.forEach(p => {
            p.style.fontSize = _fnt_b_s + "px"
        });

        _st_queryAll.forEach(h3 => {
            h3.style.fontSize = _fnt_t_s + "px"
        });

}



document.addEventListener("DOMContentLoaded", function () {
    let acessAtiva = false

    const aumentaBotao = document.getElementById("aumenta-fonte")
    const diminuiBotao = document.getElementById("diminui-fonte")
    const accesBotao = document.getElementById("ativa-acessibilidade")

    const botoes_de_acess = [aumentaBotao, diminuiBotao]
    const texto_acessibilidade = document.createTextNode("  acessibilidade")

    const paragrafo = document.querySelectorAll("p")
    const subtitulos = document.querySelectorAll("h3")

    configura_botoes_acess(aumentaBotao, "fixed", "120px", "20px", "250px", "auto", "none")
    configura_botoes_acess(diminuiBotao, "fixed", "160px", "20px", "250px", "auto", "none")
    configura_botoes_acess(accesBotao, "fixed", "50%", "10px", "auto", "auto", "block")

    function criaBotaoFonte (_btn_ref, _soma) {
        _btn_ref.addEventListener("click", function () {
            font_size_basic += _soma
            font_size_subtitles += _soma

            muda_tamanho_fonte(paragrafo, subtitulos, font_size_basic, font_size_subtitles)
        })

    }


    criaBotaoFonte(aumentaBotao, 2)
    criaBotaoFonte(diminuiBotao, -2)

    accesBotao.addEventListener("click", function () {
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

        botoes_de_acess.forEach (_btn => {
            _btn.style.display = acessAtiva ? "block" : "none";
        })        
    })
})