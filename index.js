const { ApolloServer, gql } = require('apollo-server');

// Definindo um tipo novo, tipo Usuario
// ! obriga o retorno e tipo
const nomeDiferenteTypeDefs = gql`
	# Tipo scalar simples
	scalar Date
	
	# Tipo abstrato que quero criar
	type Usuario {
		id: ID
		nome: String!
		email: String!
		idade: Int
		salario: Float
		vip: Boolean
	}

	# Tipos de query que teremos
	type Query {
		ola: String
		horaAtual: Date!
		usuarioLogado: Usuario!
	}
`;

const nomeDiferenteResolvers = {

	Query: {

		ola () {
			return 'String qualquer!';
		},

		horaAtual () {
			return new Date;
		},

		usuarioLogado() {
			return {
				id: 1,
				nome: "Charlie Jamil",
				email: "cbjamil@gmail.com",
				idade: 25,
				salario: 5050.50,
				vip: true
			}
		}
	}
};

// Construtor
const server = new ApolloServer({
	typeDefs: nomeDiferenteTypeDefs,
	resolvers: nomeDiferenteResolvers
});

// Inicialização do servidor.
server.listen().then(({ url }) => console.log(`Executando em ${url}`));