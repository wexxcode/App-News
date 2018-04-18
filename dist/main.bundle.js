webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".line-header{\r\n    margin-top: 28px;\r\n}\r\n\r\n/* Elementos da busca  */\r\n\r\n.box-search input {\r\n    position: relative;\r\n    float: left;\r\n    width: 460px;\r\n    height: 40px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    border-radius: 4px;\r\n    background-color: #fafafa;\r\n    \r\n    border: solid 1px #e6e6e6;\r\n    border-radius: 4px 0px 0px 4px;\r\n  }\r\n\r\n.box-search input[textarea] {\r\n    background-color: #06b91e;\r\n}\r\n\r\n.form-control {\r\n    padding-left: 43px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n     line-height: normal;\r\n    letter-spacing: normal;\r\n     text-align: left;\r\n    color: #666666;\r\n}\r\n\r\n.input-group-append {\r\n    background-color: #fff;\r\n    width: 150px;\r\n    z-index: 1;  \r\n}\r\n\r\n.btn-outline-secondary {\r\n    border: solid 1px #e6e6e6;\r\n    height: 40px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #1a1a1a;\r\n    border-radius: 0px 0px 0px 0px;\r\n    z-index: 2;\r\n    border-left: none;\r\n    \r\n}\r\n\r\n.btn-outline-secondary:link, .btn-outline-secondary:visited, .btn-outline-secondary:hover, .btn-outline-secondary:focus,  .btn-outline-secondary:active  {\r\n    background-color: #fff;\r\n    color: #1a1a1a;\r\n    border-left: none;\r\n}\r\n\r\nul.dropdown-menu {\r\n    border-radius: 0px 0px 0px 0px;\r\n    border: solid 1px #e6e6e6;\r\n}\r\n\r\nul li a.dropdown-item,\r\nul li a.dropdown-item:hover  {\r\n    position: relative;\r\n    float: left;\r\n    width: 102px;\r\n      font-family: Roboto;\r\n      font-size: 14px;\r\n      font-weight: 300;\r\n      font-style: normal;\r\n      font-stretch: normal;\r\n      line-height: normal;\r\n      letter-spacing: normal;\r\n      text-align: left;\r\n      color: #666666;\r\n      padding-left:-50px; \r\n      padding-bottom: 7px;\r\n      padding-top: 7px;\r\n      background-color: none;\r\n  }\r\n\r\nul li a.dropdown-item span {\r\n      margin-left:-12px; \r\n}\r\n\r\n.btn-search .show {\r\n    background-color: #fafafa;\r\n    border-radius: 0px 4px 4px 0px;\r\n}\r\n\r\n.fa.fa-search {\r\n    position: absolute;\r\n    float: left;\r\n    z-index: 1;\r\n    margin-left: 15px;\r\n    margin-top: 13px;   \r\n  }\r\n\r\n.box {\r\n    margin-top: 30px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.box-search {\r\n    width: 675px;\r\n}\r\n\r\n.pesquisa-avacada i {\r\n    margin-left: 5px;\r\n}\r\n\r\n.pesquisa-avacada a  {\r\n    margin-bottom:21px; \r\n    margin-top:10px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #1a1a1a;\r\n  }\r\n\r\n.has-search .form-control-feedback {\r\n    right: initial;\r\n    left: 0;\r\n    color: #ccc;\r\n}\r\n\r\n.has-search .form-control {\r\n    padding-right: 12px;\r\n    padding-left: 34px;\r\n}\r\n\r\n/* Elementos da lista de notícias  */\r\n\r\n.box-list {\r\n    width: 675px;\r\n}\r\n\r\n.results p {\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #1a1a1a;\r\n}\r\n\r\n.box-news .list-unstyled li.list:last-child a:first-child figure {\r\n\r\n    display: none;\r\n}\r\n\r\nfigure {\r\n\tposition: relative;\r\n\tfloat: left;\r\n\toverflow: hidden;\r\n\tmargin: 0 15px 0 0;\r\n\tmin-width: 215px;\r\n\tmax-width: 215px;\t\r\n\theight: 144px;\t\r\n\tcursor: pointer;\r\n}\r\n\r\nfigure.effect-julia img {\r\n    position: relative;\r\n    min-width: 130%;\r\n    max-width: 100%;\r\n    left:-10%;\r\n    top:-5%;\r\n\theight: auto;\r\n\t-webkit-transition: opacity 1s, -webkit-transform 1s;\r\n\ttransition: opacity 1s, -webkit-transform 1s;\r\n\ttransition: opacity 1s, transform 1s;\r\n\ttransition: opacity 1s, transform 1s, -webkit-transform 1s;\r\n\t-webkit-backface-visibility: hidden;\r\n\tbackface-visibility: hidden;\r\n}\r\n\r\n.box-news .list-unstyled li.list:first-child a:first-child figure img:first-child {\r\n    position: relative;\r\n    min-width: 130%;\r\n    max-width: 100%;\r\n    left:-10%;\r\n    top:-50%;\r\n\theight: auto;\r\n\t-webkit-transition: opacity 1s, -webkit-transform 1s;\r\n\ttransition: opacity 1s, -webkit-transform 1s;\r\n\ttransition: opacity 1s, transform 1s;\r\n\ttransition: opacity 1s, transform 1s, -webkit-transform 1s;\r\n\t-webkit-backface-visibility: hidden;\r\n\tbackface-visibility: hidden;\r\n}\r\n\r\n.box-results {\r\n    width: 100px;\r\n    height: 57px;\r\n    position: relative;\r\n    float: left;\r\n \r\n}\r\n\r\n.box-news {\r\n    width: 560px;\r\n    float: left;\r\n    position: relative;\r\n   \r\n}\r\n\r\n.box-news li {\r\n    border-bottom:1px solid #d8d8d8;\r\n}\r\n\r\n.line {\r\n    width: 50px;\r\n    height: 5px;\r\n    background-color: #1a1a1a;\r\n    margin-bottom: 14px;\r\n  }\r\n\r\n.list {\r\n    margin-bottom: 19px;\r\n    padding-bottom: 19px;\r\n}\r\n\r\n.list a h2 {\r\n    font-family: Merriweather;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #666666; \r\n}\r\n\r\n.list a:hover {\r\n   text-decoration: none;  \r\n}\r\n\r\n.list p {\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #666666;\r\n}\r\n\r\n/* elementos ver mais matérias */\r\n\r\n.box-footer {\r\n    position: relative;\r\n    top: -10px;\r\n   \r\n}\r\n\r\n.box-footer span {\r\n    font-family: Roboto;\r\n    font-size: 10px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #666666;\r\n}\r\n\r\n.box-footer img {\r\n   margin-left: 5px;\r\n   width: 10px;\r\n   height: 10px;\r\n   \r\n}\r\n\r\n.box-load {\r\n    width: 560px;\r\n    \r\n    position: relative;\r\n    border-top:5px solid #000000;\r\n    border-right:0px solid #000000;\r\n    border-bottom:1px solid #000000;\r\n    border-left:0px solid #000000;\r\n    padding-top: 12px;\r\n    padding-bottom: 11px;\r\n    margin-bottom: 100px; \r\n}\r\n\r\n.box-load a {\r\n  font-family: Merriweather;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: normal;\r\n  letter-spacing: normal;\r\n  text-align: center;\r\n  color: #1a1a1a;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <hr class=\"line-header\">\n <div class=\"row box\">   \n    <div class=\"box-search mx-auto\">\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n        <input #textoProcurado (keyup)=\"0\" class=\"form-control\" placeholder=\"Filtrar por título\">  \n        <div class=\"input-group-append\">\n            <div class=\"btn-group\" dropdown>\n                <button dropdownToggle type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle\">\n                  em todo o site <span class=\"caret\"></span>\n                </button>\n                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                  <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\"><span>Notícias (34613)</span></a></li>\n                  <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\"><span>Vídeos (10000)</span></a></li>\n                  <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\"><span>Fotos (8000)</span></a></li>\n                  <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\"><span>Blogs (2000)</span></a>\n                  </li>\n                </ul>\n              </div>\n          <button class=\"btn btn-outline-secondary btn-search\" type=\"button\">Pesquisar</button>\n        </div>\n        <div class=\"pesquisa-avacada\">       \n            <div class=\"btn-group\" dropdown>\n                <a dropdownToggle type=\"text\" class=\"dropdown-toggle\">\n                  Pesquisa avançada<span class=\"caret\"></span>\n                </a> \n              </div>\n        </div>\n    </div>\n </div>\n <div class=\"row\">\n    <div class=\"box-list mx-auto\">\n        <div class=\"box-results\">\n            <span class=\"results\">\n              <div class=\"line\"></div>           \n              <p style=\"width:100px; position:relative\" *ngIf=\"!noticia\">{{ artigos.length }} resultados para \"\"{{textoProcurado.value}}\"</p>  \n            </span>\n          </div>\n          <div class=\"box-news\">\n              <ul class=\"list-unstyled\">\n                  <li *ngFor=\"let artigo of artigos | slice : startPage:paginationLimit | filtroDaBusca:textoProcurado.value\"  class=\"list media\">                  \n                      <a href=\"{{artigo.url}}\" class=\"display-none\">\n                        <figure class=\"effect-julia\">               \n                              <img class=\"img-fluid\" src=\"{{artigo.imagem}}\" alt=\"img21\"/>                 \n                        </figure>\n                      </a>\n                      <div class=\"media-body\"> \n                        <a href=\"{{artigo.url}}\"><h2 class=\"mt-0 mb-1\">{{artigo.titulo}}</h2>\n                          <p class=\"text-justify\">{{artigo.descricao}}</p>\n                        </a>\n                        <div class=\"box-footer\">\n                          <span>{{artigo.hora}} - {{artigo.data}}</span><span> - Compartilhe<img src='../assets/images/facebook-box.svg'><img src='../assets/images/twitter-box.svg'></span>\n                        </div>\n                      </div>\n                  </li>\n                </ul>\n                <div class=\"box-load text-center\">\n                    <a  *ngIf =\"paginationLimit < artigos.length\" (click)=\"showMoreItems()\">\n                      Ver mais matérias\n                    </a>  \n                </div>\n          </div>     \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.artigos = [
            {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/04/209150/20170704165935233366o.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/04/noticias-musica,209150/musico-eduardo-praca-lanca-seu-primeiro-album-rio-do-tempo.shtml",
                "titulo": "M\u00fasico Eduardo Pra\u00e7a lan\u00e7a seu primeiro \u00e1lbum, 'Rio do tempo'",
                "hora": "20:03",
                "data": "04/07/2017",
                "descricao": "Aos 30 anos, paulistano j\u00e1 passou por duas bandas de destaque na cena alternativa, Ludovic e Quarto Negro"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/04/209130/20170704160751574885i.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/04/noticias-musica,209130/despacito-chega-a-8-semana-no-topo-da-parada-de-singles-da-billboar.shtml",
                "titulo": "'Despacito' chega a 8\u00aa semana no topo da parada de singles da Billboard",
                "hora": "16:06",
                "data": "04/07/2017",
                "descricao": "M\u00fasica de Luis Fonsi com parceria de Daddy Yankee e Justin Bieber, continua dominando o top 10"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/04/209129/20170704160113377525e.JPG",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/04/noticias-musica,209129/apos-intrigas-iggy-azalea-anuncia-parceria-com-azealia-banks.shtml",
                "titulo": "Ap\u00f3s intrigas, Iggy Azalea anuncia parceria com Azealia Banks ",
                "hora": "15:53",
                "data": "04/07/2017",
                "descricao": "Novo disco da australiana, previsto para agosto, ter\u00e1 participa\u00e7\u00e3o da pol\u00eamica rapper norte-americana "
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/04/209125/20170704153851331436e.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/04/noticias-musica,209125/ed-sheeran-deixa-o-twitter-nada-alem-de-pessoas-falando-coisas-mas.shtml",
                "titulo": "Ed Sheeran deixa o Twitter: 'nada al\u00e9m de pessoas falando coisas m\u00e1s'",
                "hora": "15:27",
                "data": "04/07/2017",
                "descricao": "Cantor brit\u00e2nica disse que se sente mal com as cr\u00edticas e os coment\u00e1rios maldosos que recebe na rede social "
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/04/209118/20170704145021402642a.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/04/noticias-musica,209118/anitta-canta-em-evento-do-consulado-dos-estados-unidos-no-rio.shtml",
                "titulo": "Anitta canta em evento do Consulado dos Estados Unidos no Rio ",
                "hora": "14:41",
                "data": "04/07/2017",
                "descricao": "Funkeira carioca apresentou can\u00e7\u00f5es de Frankie Valli, Bob Marley e Aretha Franklin, e foi ovacionada pelo p\u00fablico"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/04/209115/20170704140905250342u.png",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/04/noticias-musica,209115/aos-49-anos-celine-dion-surpreende-ao-aparecer-nua-em-foto-de-revista.shtml",
                "titulo": "Aos 49 anos, Celine Dion surpreende ao aparecer nua em foto de revista",
                "hora": "14:06",
                "data": "04/07/2017",
                "descricao": "Na legenda, a cantora fala sobre a sua rotina de shows e revela que costuma fazer shows de duas horas, cinco vezes por semana "
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/04/209112/20170704131953172565e.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/04/noticias-musica,209112/katy-perry-elogia-gretchen-apos-participacao-em-videoclipe.shtml",
                "titulo": "Katy Perry elogia Gretchen ap\u00f3s participa\u00e7\u00e3o em videoclipe ",
                "hora": "13:10",
                "data": "04/07/2017",
                "descricao": "A 'rainha do rebolado' brasileira foi chamada de 'ic\u00f4nica' e 'incr\u00edvel' pela estrela internacional; v\u00eddeo j\u00e1 acumula 5 milh\u00f5es de visualiza\u00e7\u00f5es "
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/03/209063/20170703171938614816u.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/03/noticias-musica,209063/musica-viral-trem-bala-de-ana-vilela-ganha-videoclipe.shtml",
                "titulo": "M\u00fasica viral 'Trem bala', de Ana Vilela, ganha videoclipe",
                "hora": "17:14",
                "data": "03/07/2017",
                "descricao": "Grava\u00e7\u00e3o original ultrapassou a marca de 12 milh\u00f5es de visualiza\u00e7\u00f5es no YouTube "
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/03/209062/20170703164454760220a.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/03/noticias-musica,209062/clipe-de-katy-perry-com-participacao-de-gretchen-e-divulgado.shtml",
                "titulo": "Clipe de Katy Perry com participa\u00e7\u00e3o de Gretchen \u00e9 divulgado",
                "hora": "16:25",
                "data": "03/07/2017",
                "descricao": "'Swish swish' foi divulgado na tarde desta segunda-feira, 03, e conta com a participa\u00e7\u00e3o da rainha do rebolado brasileira "
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/03/209056/20170703154123592536o.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/03/noticias-musica,209056/hit-de-lady-gaga-vira-sofrencia-em-versao-de-banda-brasileira.shtml",
                "titulo": "Hit de Lady Gaga vira sofr\u00eancia em vers\u00e3o de banda brasileira ",
                "hora": "15:37",
                "data": "03/07/2017",
                "descricao": "Na voz da banda Musa, 'Million reasons' se tornou 'Mexeu comigo' "
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/03/209054/20170703145545908041o.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/03/noticias-musica,209054/dueto-entre-wesley-safadao-e-maluma-nao-deve-ser-mais-lancado.shtml",
                "titulo": "Dueto entre Wesley Safad\u00e3o e Maluma n\u00e3o deve ser mais lan\u00e7ado",
                "hora": "14:50",
                "data": "03/07/2017",
                "descricao": "Os dois teriam se desentendido por conta de uma parte da letra da m\u00fasica"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/03/209007/20170702155141179544a.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/03/noticias-musica,209007/adele-cancela-shows-em-londres.shtml",
                "titulo": "Adele cancela shows em Londres",
                "hora": "07:00",
                "data": "03/07/2017",
                "descricao": "Cantora divulgou texto em que afirma estar com as cordas vocais danificadas"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/03/209009/20170702154917703505a.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/03/noticias-musica,209009/novo-album-de-jay-z-abre-o-verbo-sobre-infidelidade-a-beynonce.shtml",
                "titulo": "Novo \u00e1lbum de Jay-Z abre o verbo sobre infidelidade \u00e0 Beynonc\u00e9",
                "hora": "07:00",
                "data": "03/07/2017",
                "descricao": "No rec\u00e9m-lan\u00e7ado 4:44, seu primeiro \u00e1lbum em quatro anos, o rapper fala ainda da homossexualidade da m\u00e3e e ataca herdeiros de Prince"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/03/209008/20170702155155709494e.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/03/noticias-musica,209008/ex-integrante-da-banda-in-box-thiago-rabello-lanca-seu-primeiro-cd.shtml",
                "titulo": "Ex-integrante da banda 'In Box', Thiago Rabello lan\u00e7a seu primeiro CD solo",
                "hora": "07:00",
                "data": "03/07/2017",
                "descricao": "M\u00fasico mineiro \u00e9 cantor, compositor, violonista, guitarrista e baterista"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/03/209021/20170703091550844011u.jpeg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/03/noticias-musica,209021/gretchen-fala-sobre-parceria-com-katy-perry-tem-mais-coisa-por-ai.shtml",
                "titulo": "Gretchen fala sobre parceria com Katy Perry: 'tem mais coisa por a\u00ed'",
                "hora": "00:19",
                "data": "03/07/2017",
                "descricao": "Rainha do rebolado gravou participa\u00e7\u00e3o no clipe 'Swish swish', que \u00e9 uma parceria de Katy com Nicki Minaj"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/02/208985/20170630124207519787o.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/02/noticias-musica,208985/grupo-sony-vai-investir-no-vinil-superado-pelo-cd-e-proliferacao-mp3.shtml",
                "titulo": "Grupo Sony vai investir no vinil, superado pelo CD e prolifera\u00e7\u00e3o do MP3",
                "hora": "11:30",
                "data": "02/07/2017",
                "descricao": null
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/07/01/208972/20170701150233518566o.jpeg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/07/01/noticias-musica,208972/show-de-elza-soares-neste-domingo-2-em-bh-e-cancelado.shtml",
                "titulo": "Show de Elza Soares neste domingo (2) em BH \u00e9 cancelado",
                "hora": "14:56",
                "data": "01/07/2017",
                "descricao": "Apresenta\u00e7\u00e3o que abriria o Inverno das Artes foi transferida para 28/7; Funda\u00e7\u00e3o Cl\u00f3vis Salgado atribuiu decis\u00e3o \u00e0 'log\u00edstica complexa na chegada da cantora' de sua turn\u00ea europeia"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/30/208927/20170630105001157958i.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/30/noticias-musica,208927/jay-z-lanca-o-disco-4-44-com-resposta-a-acusacao-de-beyonce.shtml",
                "titulo": "Jay Z lan\u00e7a o disco '4:44' com resposta \u00e0 acusa\u00e7\u00e3o de Beyonc\u00e9 ",
                "hora": "10:40",
                "data": "30/06/2017",
                "descricao": "Em 2016, a cantora e esposa do rapper lan\u00e7ou o disco 'Lemonade' e mandou um recado para o marido "
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/30/208922/20170630102240598619u.png",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/30/noticias-musica,208922/mudanca-no-nome-de-claudia-leitte-e-campanha-publicitaria.shtml",
                "titulo": "Mudan\u00e7a no nome de Claudia Leitte \u00e9 campanha publicit\u00e1ria ",
                "hora": "10:14",
                "data": "30/06/2017",
                "descricao": "'Decis\u00e3o' anunciada pela cantora causou indigna\u00e7\u00e3o nos f\u00e3s e bombou na internet"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/30/208906/20170628124357325935e.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/30/noticias-musica,208906/de-elza-a-criolo-festivais-de-inverno-iniciam-temporada-programe-se.shtml",
                "titulo": "De Elza a Criolo, Festivais de Inverno iniciam temporada em Minas; programe-se",
                "hora": "08:00",
                "data": "30/06/2017",
                "descricao": "Minas mant\u00e9m a tradi\u00e7\u00e3o de promover eventos culturais em julho. Festivais de inverno aproximam o p\u00fablico dos artistas\n"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/29/208885/20170629171457346291o.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/29/noticias-musica,208885/em-show-adele-distribui-carta-e-anuncia-fim-de-suas-turnes.shtml",
                "titulo": "Em show, Adele distribui carta e anuncia fim de suas turn\u00eas",
                "hora": "17:01",
                "data": "29/06/2017",
                "descricao": "'N\u00e3o combina particularmente comigo', explicou ela durante apresenta\u00e7\u00e3o em Londres"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/29/208878/20170629155326682819i.jpg-large",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/29/noticias-musica,208878/um-ano-apos-assedio-biel-grava-video-e-anuncia-nova-fase.shtml",
                "titulo": "Um ano ap\u00f3s ass\u00e9dio, Biel grava v\u00eddeo e anuncia nova fase",
                "hora": "15:37",
                "data": "29/06/2017",
                "descricao": "O cantor disse que s\u00f3 agora est\u00e1 'tomando as r\u00e9deas' da pr\u00f3pria vida com novo nome art\u00edstico: Gah"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/29/208862/20170629124547237832e.JPG",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/29/noticias-musica,208862/anitta-aprova-a-mudanca-do-nome-de-claudia-agora-sem-leitte.shtml",
                "titulo": "Anitta aprova a mudan\u00e7a do nome de Claudia, agora sem Leitte ",
                "hora": "12:31",
                "data": "29/06/2017",
                "descricao": "'Arrasa at\u00e9 com \u00e1gua de salsicha', comentou a funkeira carioca na foto da colega "
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/28/208805/20170628162534727146e.png",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/28/noticias-musica,208805/dez-anos-mais-jovem-anitta-elogia-sandy-formol.shtml",
                "titulo": "Dez anos mais jovem, Anitta elogia Sandy: 'Formol' ",
                "hora": "16:18",
                "data": "28/06/2017",
                "descricao": "Cantora de 24 anos ainda afirmou que vai chegar aos 80 com 50 pl\u00e1sticas e Sandy ainda estar\u00e1 intacta "
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/28/208803/20170628160211875893o.png",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/28/noticias-musica,208803/paula-fernandes-posa-de-topless-e-promete-novidades.shtml",
                "titulo": "Paula Fernandes posa de topless e promete novidades ",
                "hora": "15:58",
                "data": "28/06/2017",
                "descricao": "'Vem a\u00ed uma nova Paula Fernandes', escreveu a cantora sertaneja em foto publicada no Instagram "
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/28/208763/20170627165747962711a.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/28/noticias-musica,208763/alcione-lanca-novo-dvd-boleros-em-show-em-belo-horizonte.shtml",
                "titulo": "Alcione lan\u00e7a novo DVD 'Boleros' em show em Belo Horizonte ",
                "hora": "08:30",
                "data": "28/06/2017",
                "descricao": "Cantora se apresenta nesta quinta-feira, 29, no Pal\u00e1cio das Artes"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/28/208765/20170627165538683621e.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/28/noticias-musica,208765/grupo-tradicao-comemora-23-anos-de-carreira-e-lanca-seu-primeiro-cd.shtml",
                "titulo": "Grupo Tradi\u00e7\u00e3o comemora 23 anos de carreira e lan\u00e7a seu primeiro CD",
                "hora": "08:00",
                "data": "28/06/2017",
                "descricao": "Com presen\u00e7a marcante nas rodas da capital, sambistas lutam por espa\u00e7o e reconhecimento"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/27/208733/20170627161454901545i.JPG",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/27/noticias-musica,208733/fa-joga-cerveja-em-marilia-mendonca-e-leva-bronca-jogue-na-sua-avo.shtml",
                "titulo": "F\u00e3 joga cerveja em Mar\u00edlia Mendon\u00e7a e leva bronca: 'Jogue na sua av\u00f3', v\u00eddeo",
                "hora": "14:49",
                "data": "27/06/2017",
                "descricao": "O epis\u00f3dio aconteceu durante um show na Bahia e a cantora pediu respeito"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/27/208691/20170626164809504797i.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/27/noticias-musica,208691/rzo-lanca-cd-de-ineditas-e-manda-recado-para-o-brasil-em-crise.shtml",
                "titulo": "RZO lan\u00e7a CD de in\u00e9ditas e manda recado para o Brasil em crise",
                "hora": "08:00",
                "data": "27/06/2017",
                "descricao": "Pioneiro do rap nacional, grupo renova batidas e aposta em letras politizadas para conquistar os jovens"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/26/208647/20170626091034748699o.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/26/noticias-musica,208647/anitta-pretende-gravar-musica-com-justin-bieber.shtml",
                "titulo": "Anitta pretende gravar m\u00fasica com Justin Bieber",
                "hora": "09:04",
                "data": "26/06/2017",
                "descricao": "Segundo colunista, parceria entre funkeira carioca e cantor norte-americano j\u00e1 est\u00e1 em est\u00e1gio avan\u00e7ado"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/25/208596/20170623153630215583i.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/25/noticias-musica,208596/preparadinha-entenda-as-estrategias-de-marketing-usadas-por-anitta.shtml",
                "titulo": "''Preparadinha'': entenda as estrat\u00e9gias de marketing que transformaram Anitta em fen\u00f4meno pop",
                "hora": "08:00",
                "data": "25/06/2017",
                "descricao": "Ex-estagi\u00e1ria da Vale do Rio Doce que sonhava em ser empres\u00e1ria e estourou como funkeira, Anitta se consolida no Brasil e tenta conquistar mercado estrangeiro"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/25/208594/20170623131954509227o.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/25/noticias-musica,208594/novo-album-de-mallu-magalhaes-vem-e-uma-ode-a-mpb.shtml",
                "titulo": "Novo \u00e1lbum de Mallu Magalh\u00e3es, Vem \u00e9 uma ode \u00e0 MPB ",
                "hora": "08:00",
                "data": "25/06/2017",
                "descricao": "Envolvida em pol\u00eamicas recentes, cantora fala sobre o novo trabalho, definido por ela como ''um convite''"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/25/208595/20170623130915318895i.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/25/noticias-musica,208595/joyce-moreno-lanca-palavra-e-som-com-13-cancoes-ineditas-de-sua-autor.shtml",
                "titulo": "Joyce Moreno lan\u00e7a Palavra e som, com 13 can\u00e7\u00f5es in\u00e9ditas de sua autoria",
                "hora": "08:00",
                "data": "25/06/2017",
                "descricao": "\u00c1lbum saiu primeiro no Jap\u00e3o e a artista critica: ''falta de pol\u00edtica cultural decente'' e lamenta descaso do Brasil com sua produ\u00e7\u00e3o musical\n"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/23/208507/20170622163414412406u.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/23/noticias-musica,208507/em-songbook-que-sera-lancado-hoje-toninho-horta-ensina-seus-principai.shtml",
                "titulo": "Em songbook que ser\u00e1 lan\u00e7ado hoje, Toninho Horta ensina seus principais sucessos",
                "hora": "08:00",
                "data": "23/06/2017",
                "descricao": "Edi\u00e7\u00e3o re\u00fane melodias, cifras e acordes que fizeram a fama do mineiro como o craque das harmonias que encantaram o mundo"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/23/208497/20170620145509360815u.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/23/noticias-musica,208497/no-em-pingo-d-agua-faz-show-gratuito-na-praca-floriano-peixoto.shtml",
                "titulo": "N\u00f3 Em Pingo D'\u00c1gua faz show gratuito na Pra\u00e7a Floriano Peixoto",
                "hora": "08:00",
                "data": "23/06/2017",
                "descricao": "Grupo de samba se apresenta nesse s\u00e1bado em BH\n"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/23/208491/20170621153530895388e.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/23/noticias-musica,208491/biquini-cavadao-se-apresenta-neste-sabado-em-bh.shtml",
                "titulo": "Biquini Cavad\u00e3o se apresenta neste s\u00e1bado em BH",
                "hora": "08:00",
                "data": "23/06/2017",
                "descricao": "Grupo dedica seu novo disco \u00e0s alegrias e tristezas de cada dia"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/22/208449/20170621185403504219i.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/22/noticias-musica,208449/banda-iconili-completa-dez-anos-e-comemora-com-show-nesta-quinta-22.shtml",
                "titulo": "Banda Iconili completa dez anos e comemora com show nesta quinta (22)",
                "hora": "09:44",
                "data": "22/06/2017",
                "descricao": "Com 11 integrantes, o grupo mineiro se destaca no cen\u00e1rio da MPB instrumental\n"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/20/208354/20170620150958867370u.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/20/noticias-musica,208354/angela-maria-lanca-disco-com-cancoes-de-roberto-e-erasmo.shtml",
                "titulo": "\u00c2ngela Maria lan\u00e7a disco com can\u00e7\u00f5es de Roberto e Erasmo",
                "hora": "14:55",
                "data": "20/06/2017",
                "descricao": "Aos 88 anos - 68 de carreira - a musa da era de ouro do r\u00e1dio \u00e9 das poucas com carta branca do Rei para gravar o que quiser do repert\u00f3rio dele"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/20/208305/20170619180050598080e.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/20/noticias-musica,208305/pianista-simone-leitao-faz-recital-no-teatro-bradesco.shtml",
                "titulo": "Pianista Simone Leit\u00e3o faz recital no Teatro Bradesco",
                "hora": "09:08",
                "data": "20/06/2017",
                "descricao": "No programa desta ter\u00e7a-feira, a instrumentista de Caratinga apresenta pe\u00e7as de Bach e Ravel"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/19/208298/20170619190258791578u.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/19/noticias-musica,208298/musica-inedita-de-george-harrison-e-encontrada-em-piano-na-inglaterra.shtml",
                "titulo": "M\u00fasica in\u00e9dita de George Harrison \u00e9 encontrada em piano na Inglaterra",
                "hora": "18:57",
                "data": "19/06/2017",
                "descricao": "Vi\u00fava do ex-guitarrista dos Beatles achou as anota\u00e7\u00f5es em sua casa; m\u00fasica foi composta para Ringo Starr"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/19/208251/20170619085548526933e.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/19/noticias-musica,208251/conheca-ary-sperling-produtor-de-musicas-da-xuxa-e-de-novelas.shtml",
                "titulo": "Conhe\u00e7a Ary Sperling, produtor de m\u00fasicas da Xuxa e de novelas",
                "hora": "08:40",
                "data": "19/06/2017",
                "descricao": "Depois de instalou est\u00fadio pioneiro da gravadora Som Livre, ele agora se dedica a musical inspirado na Tropic\u00e1lia\n"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/16/208151/20170616111645301475o.JPG",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/16/noticias-musica,208151/calvin-harris-se-junta-a-katy-perry-pharrell-williams-em-single.shtml",
                "titulo": "Calvin Harris se junta a Katy Perry, Pharrell Williams e Big Sean em novo single",
                "hora": "11:05",
                "data": "16/06/2017",
                "descricao": "A faixa 'Feels' faz parte do atual projeto do DJ, 'Funk Wav Bounces Vol 1', que tem lan\u00e7amento previsto para o pr\u00f3ximo dia 30"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/15/208134/20170615222747510323u.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/15/noticias-musica,208134/decadas-depois-yoko-ono-se-soma-aos-creditos-de-imagine.shtml",
                "titulo": "D\u00e9cadas depois, Yoko Ono se soma aos cr\u00e9ditos de 'Imagine'",
                "hora": "22:25",
                "data": "15/06/2017",
                "descricao": "An\u00fancio foi feito na quarta-feira, no momento em que a m\u00fasica foi declarada \"can\u00e7\u00e3o do s\u00e9culo\" pela National Music Publishers Association"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/14/208076/20170614144149836558a.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/14/noticias-musica,208076/wesley-safadao-e-simone-e-simaria-fazem-show-nesta-quarta-na-grande-bh.shtml",
                "titulo": "Wesley Safad\u00e3o e Simone e Simaria fazem show nesta quarta na Grande BH",
                "hora": "14:14",
                "data": "14/06/2017",
                "descricao": "M\u00fasicos se apresentam no Pedro Leopoldo Rodeio Show que recebe tamb\u00e9m os sertanejo Gustavo Lima, \nHenrique e Juliano e Z\u00e9 Neto e Cristiano e Dennis Dj"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/13/208021/20170613123459358833o.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/13/noticias-musica,208021/nego-do-borel-lanca-clipe-com-maiara-maraisa.shtml",
                "titulo": "Nego do Borel lan\u00e7a clipe com Maiara & Mara\u00edsa",
                "hora": "10:37",
                "data": "13/06/2017",
                "descricao": "'Esqueci Como Namora estreou na noite de segunda-feira (12), durante o TVZ, no Multishow"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/13/208019/20170613103041391092u.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/13/noticias-musica,208019/em-conversa-com-fas-katy-perry-indica-que-vira-ao-brasil.shtml",
                "titulo": "Em conversa com f\u00e3s, Katy Perry indica que vir\u00e1 ao Brasil ",
                "hora": "10:24",
                "data": "13/06/2017",
                "descricao": "'Eu estou indo, s\u00f3 n\u00e3o foi anunciado ainda', disse a cantora que acaba de lan\u00e7ar seu quarto disco de est\u00fadio, 'Witness'"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/12/207958/20170612101814700881e.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/12/noticias-musica,207958/dueto-inedito-e-postumo-de-cazuza-e-ney-e-lancado-assista.shtml",
                "titulo": "Dueto in\u00e9dito e p\u00f3stumo de Cazuza e Ney \u00e9 lan\u00e7ado. Assista!",
                "hora": "10:15",
                "data": "12/06/2017",
                "descricao": "\"Achei engra\u00e7ado botar isso na roda num momento em que o Brasil est\u00e1 ficando careta de novo\", revelou o cantor de 75 anos sobre a parceria\n"
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/12/207933/20170611145016948100i.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/12/noticias-musica,207933/witness-traz-uma-katy-perry-mais-madura-e-sensual.shtml",
                "titulo": "'Witness' traz uma Katy Perry mais madura e sensual ",
                "hora": "08:30",
                "data": "12/06/2017",
                "descricao": "CD tem letras ousadas, mistura de ritmos e a cantora exibe mais seguran\u00e7a e mais recursos\nna voz"
            }, {
                "categoria": "Not�cia",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/11/207927/20170611131131813440u.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/11/noticias-musica,207927/em-show-no-parque-municipal-criolo-mostra-que-samba-e-compromisso.shtml",
                "titulo": "Em show no Parque Municipal, Criolo mostra que samba \u00e9 compromisso",
                "hora": "12:48",
                "data": "11/06/2017",
                "descricao": null
            }, {
                "categoria": "Foto",
                "imagem": "http://imgsapp2.uai.com.br/app/noticia_133890394703/2017/06/11/207901/20170609132107759537u.jpg",
                "url": "http://www.uai.com.br/app/noticia/musica/2017/06/11/noticias-musica,207901/orquestra-ouro-preto-fernando-brant.shtml",
                "titulo": "Exclusivo: EM acompanha ensaio da Orquestra Ouro Preto em homenagem a Fernando Brant",
                "hora": "07:00",
                "data": "11/06/2017",
                "descricao": "Veja o v\u00eddeo dos ensaios. Compositor, morto h\u00e1 dois anos, conheceu o projeto"
            }
        ];
        this.artigos;
        this.startPage = 0;
        this.paginationLimit = 4;
    }
    AppComponent.prototype.removeImage = function () {
        this;
    };
    AppComponent.prototype.showMoreItems = function () {
        this.paginationLimit = Number(this.paginationLimit) + 3;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_pipe__ = __webpack_require__("./src/app/app.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_pipe__["a" /* AppPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppPipe = /** @class */ (function () {
    function AppPipe() {
    }
    AppPipe.prototype.transform = function (artigos, digitado) {
        digitado = digitado.toLowerCase();
        return artigos.filter(function (artigo) { return artigo.titulo.toLowerCase().includes(digitado); });
    };
    AppPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Pipe */])({
            name: 'filtroDaBusca'
        })
    ], AppPipe);
    return AppPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map