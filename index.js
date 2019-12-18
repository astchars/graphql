const { ApolloServer, gql } = require('apollo-server');

// Definição de tipos que serão tratados. Este é o schema
// Caso o nome seja diferente de typeDef, é necessário atribuí-la no construtor
const nomeDiferenteTypeDefs = gql`
	# Este será o tipo consulta
	type Query {
		ola: String
	}
`;

// Conjunto de funções que resolvem/tratam dados.
// Caso o nome seja diferente de resolvers, é necessário atribuí-la no construtor
const nomeDiferenteResolvers = {

	// Neste ponto definimos nossa primeira query
	Query: {
		ola() {
			return "String qualquer!"
		}
	}

};

// Construtor
const server = new ApolloServer({

	typeDefs: nomeDiferenteTypeDefs,
	resolvers: nomeDiferenteResolvers

});

// Inicialização do servidor.
// Neste ponto, ainda não está funcional.
server.listen().then(

	({ url }) => console.log(`Executando em ${url}`)

);