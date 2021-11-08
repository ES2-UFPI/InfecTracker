const request = require('supertest');
const app = require('../src/app');
const notificacao = require('../notificacao')

describe('Cadastro de Notificacao', () => {
	beforeEach(() => {
		notificacao.inserirNotificacao('abc123',82.4120,82.4120,'03/11/2021','12:23','COVID-19');//notificação 1
	});	
	
	afterEach(() => {
		notificacao.limparNotificacoes();  //limparNotificações apaga todas as notificações criadas no banco de dados depois de finalizar os testes
	});
	it('Deve passar(inserção de notificacao)', async ()=>{
		notificacao.inserirNotificacao('abc123',82.4120,82.4120,'03/11/2021','12:23','COVID-19');//(loginusuario,latitude,longitude,data,hora,nomedoenca)
		
		expect(notificacao.buscarNotificacaoPorID(1).loginusuario.toBe('abc123');//o número 1 representa o id da notificação que é para ser inserida, como é só uma e o banco de dados está vazio no inicio, o id dessa notificação deve ser 1
																			//então ao executar o método buscarNotificacao, é esperado que ele retorne a notificação de id 1 e que o loginusuario dela seja 'abc123' confirmando que essa notificação foi inserida com sucesso.
																			
	});
	
	it('Deve falhar(inserção de notificacao)', async ()=>{
		notificacao.inserirNotificacao('abcd123ec',82.4120,82.4120,'00/00/0000','12:23','COVID-19');//(loginusuario,latitude,longitude,data,hora,nomedoenca)
		                                                                                            // a ideia desse teste é tentar inserir uma notificação com data "nula", o que não deve acontecer
		expect(notificacao.listarNotificacoes().length.toBe(1);//o número 1 representa o id da notificação que é para ser inserida, como é só uma e o banco de dados está vazio no inicio, o id dessa notificação deve ser 1
															   //então ao executar o método listarNotificacoes, é esperado que ele retorne a notificação de id 1 e que o loginusuario dela seja 'abc123' confirmando que essa notificação foi inserida com sucesso.
																			
	});	
	
});

describe('Busca de Notificacao', () => {
	beforeEach(() => {
		notificacao.inserirNotificacao('abc123',82.4120,82.4120,'03/11/2021','12:23','COVID-19');//notificação 1
		notificacao.inserirNotificacao('dfdf3',92.4120,82.4120,'02/10/2021','12:23','COVID-19');//notificação 2
	    notificacao.inserirNotificacao('abasc8',90.4270,62.3980,'02/10/2021','12:23','COVID-19');//notificação 3
		notificacao.inserirNotificacao('dfdf3',82.4120,82.4120,'03/10/2021','12:23','COVID-19');//notificação 4
	});
	afterEach(() => {
		notificacao.limparNotificacoes();  //limparNotificações apaga todas as notificações criadas no banco de dados depois de finalizar os testes
	});
	
	it('Deve passar(retorno do número de notificações)', async ()=>{
		
		expect(notificacao.listarNotificacoes().length.toBe(4);//a ideia desse teste é retornar o tamanho 4, pois foram inseridas 4 notificações válidas.
																			
	});
	it('Deve passar (retorno do número de notificações as quais possuem ao menos dois pontos em comum)', async ()=>{
		
		expect(notificacao.listarNotificacoesEmComum().length.toBe(2);//a ideia desse teste é retornar o tamanho 2, pois apenas a notificacao 1 e a notificacao 4 possuem as mesmas coordenadas,
		                                                              //medidas através da latitude e longitude em graus decimais pelo calculo comparativo ser mais simples.
																			
	});	
	
	
});
