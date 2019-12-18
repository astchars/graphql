const { ApolloServer, gql } = require('apollo-server');

// Tipos de dados suportados pelo GraphQL:
// Int, Float, String, Boolean e ID
// Caso seja necessário criar um outro tipo, podemos criar um tipo scalar
const nomeDiferenteTypeDefs = gql`
	scalar Date

	# Este será o tipo consulta, ou retorno.
	type Query {
		ola: String
		horaAtual: Date
	}
`;

const nomeDiferenteResolvers = {

	// Aqui temos nossas funções
	Query: {
		ola () {
			return 'String qualquer!';
		},

		horaAtual () {
			return new Date;
		}
	}
};

// Construtor
const server = new ApolloServer({

	typeDefs: nomeDiferenteTypeDefs,
	resolvers: nomeDiferenteResolvers

});

// Inicialização do servidor.
server.listen().then(

	({ url }) => console.log(`Executando em ${url}`)

);