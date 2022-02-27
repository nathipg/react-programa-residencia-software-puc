const graphql = require('graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = graphql;

const AlunoType = require('./TypeDefs/AlunoType');

const alunoData = require('../data.json');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllAlunos: {
      type: new GraphQLList(AlunoType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        // Acesso a um DB aqui
        return alunoData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createAluno: {
      type: AlunoType,
      args: {
        nome: { type: GraphQLString },
        idade: { type: GraphQLInt },
        nome: { type: GraphQLString },
        email: { type: GraphQLString },
        telefone: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const newId = alunoData.length + 1;

        alunoData.push({
          id: newId,
          nome: args.nome,
          idade: args.idade,
          email: args.email,
          telefone: args.telefone,
        });

        return {
          id: newId,
          ...args,
        };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
