
=======
# food-trade-business - Negócio de Comércio  de Alimentos


===================================================================================================
=        Controll desenvolment method SCRUM                                                       =              
=       https://trello.com/b/tENZgmsP/food-trade-business                                         =
 ================================================================================================== 

        Configuration DB- mysql-server
        user: root,
        senha: root,
        name database: ftb,
        tables import paste:food-trade-business\db.mysql
        
        Sobre o Carregamento da Pagina: 
                        1º# adionanar banco de dados com a config acima + create table (models)
                        3º# Todas as models encontram no diretório models, no fim de cada models tem instruções para criar uma table no mysql
                                Basta tirar o codigo comentado "//" do "nomedamodels".sync.({ force: true}), e rodar que automáticamente criará as models,
                        3º# Agora você tem que ir no diretório router/add_bd e ler as urls para adionar a tables e carregar a pagina
                                Paginas add_bd: /headernav
                                                /homeslideshow
                                                /footer
                                                /history
                                                /cardapiohome
        
        Sobre as Libs: 
                        #bootstrap 4.4.1 dist
                                link Documentação:https://getbootstrap.com/docs/4.4/getting-started/introduction/
                        #fontawesome-free-5.13.0-web
                                link Documentação:https://fontawesome.com/

        



        Sobre os Tamanhos das Imagens para Carregamento no Site:

                Tamanho da Imagem  do Logotipo: => A logo dever ter no maxímo 100px de Altura e no minímo 80px
                e largura no maximo 200px (não existe minimo de largura) 
        
                Tamanho das Imagens Do SlideShow: =>
                Tamanho da Imagem do Welcome_ Little Story: =>
                tamanho da Imagem dos Menus : =>800px por 480px 
                Tamanho da imagem de fundo do footer: =>
        
        
        
>>>>>>> 55bde97c9f00a6fb9c6a25d90fb479549abc1504
