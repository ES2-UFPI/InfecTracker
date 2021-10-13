pool = require ("db.js");

module.exports = {
    async cadastrarNotificacao(LoginUsuario, Latitude, Longitude, HoraNotificacao, DataNotificacao, NomeDoenca){
        try {
            conn = await pool.getConnection();
            sql = "INSERT INTO notificação (LoginUsuario, Latitude, Longitude, Hora Notificação, DataNotificacao, Nome da Doença) VALUES ? ";
            
            await conn.query(sql,[LoginUsuario,Latitude,Longitude,HoraNotificacao,DataNotificacao,NomeDoenca]);
            conn.end();
        } catch (error) {
            console.log("erro no cadastro da notificação");
        }
    },
    async buscarNotificacoes(DataInicio, DataFim){
        try {
            conn = await pool.getConnection();
            sql = "SELECT * FROM notificação WHERE DataNotificacao >= ? and DataNotificacao <= ?";
            const rows = await conn.query(sql,[DataInicio,DataFim]);
            conn.end();
            return rows;
        } catch (error) {
            console.log("erro na busca de notificações");
        }
    },
    async buscarNotificacoesUsuario(LoginUsuario){
	try{
            conn = await pool.getConnection();
            sql = "SELECT * FROM notificação WHERE LoginUsuario = ? ";
            const rows = await conn.query(sql,[LoginUsuario]);
            conn.end();
            return rows;
	} catch(error){
	    console.log("erro na busca de notificações do Usuário");
        }
    }	
}