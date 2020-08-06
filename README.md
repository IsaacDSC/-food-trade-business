
=======
# food-trade-business - Negócio de Comércio  de Alimentos


===================================================================================================
=        Controll desenvolment method SCRUM                                                       =              
=       https://trello.com/b/tENZgmsP/food-trade-business                                         =
 ================================================================================================== 

        Configuration DB- mysql-server
        user: dev,
        senha: secret,
        name database: ftb
        
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
                                                /menuburger
                                                /menubebidas
                                                /menupizzas
                                                /contato
                                                /loginAdmin
        
        Sobre as Libs: 
                        #bootstrap 4.4.1 dist
                                link Documentação:https://getbootstrap.com/docs/4.4/getting-started/introduction/
                                css(min) - js(min)
                        #fontawesome-free-5.13.0-web
                                link Documentação:https://fontawesome.com/
                                css(min) - js(min)
                        #Cep:
                                link Documentação:
                                nome arquivo: 



        Sobre os Tamanhos das Imagens para Carregamento no Site:

                Tamanho da Imagem  do Logotipo: => A logo dever ter no maxímo 100px de Altura e no minímo 80px
                e largura no maximo 200px (não existe minimo de largura) 

                Tamanho Logotipo => logotipo.png => 98 x 100
                Tamanho das Imagens Do SlideShow: => slider-01.jpg => 1920 x 1280
                Tamanho da Imagem do Welcome_ Little Story: =>
                tamanho da Imagem dos Menus : =>800px por 480px 
                Tamanho da imagem de fundo do footer: => footer-bg.jpg 1920 x 750
                Tamanho da Imagem do menu da galeria => img-03.jpg => 800 x 480
        
        Documentação de Rotas 
                #Pagina responsável (routes)
                        add_bd.js => resposável por resetar as paginas;
                        addBd.js => responsável por receber os formulários de editar vindo do dashboard;
                        admin.js => responsável por carregar dashboard e paginas para editar no dashboard;
                        visualizarAdmin.js => responsável por carregar as prés visualizações de cada pagina edit-dashboard;
                        
                        
        Documentação de Erros
                # Erros de Editar padrão(EEP-1001) - Erro Editar Pagina
                        EEN-1001 => erro ao editar Navegação pelo dashboard;
                        EES-1010 => erro ao editar Pagina Home(slideshow), pelo dashboard;
                        EEH-1100 => erro ao editar Pagina Home(Pequena Historia da empresa), pelo dashboard;
                        EEF-1101 => erro ao editar Footer(rodapé do site), pelo dashboard;
                        
        Sistema de Login Admin: 
                Using Dependencies: express-session, passport, passport-local, bcryptjs

        upload files:
                Using multer import files;
                configuration to separate images in folders by each layout
                Using fs for to manage folders

        table Usuario responsável por guardar informações dos usuarios do app.


>>>>>>> 55bde97c9f00a6fb9c6a25d90fb479549abc1504
