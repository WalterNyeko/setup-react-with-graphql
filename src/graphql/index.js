import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

const applicationLink = process.env.REACT_APP_LINK;

const authLink = setContext((_, { headers }) =>{

    const token = localStorage.getItem('jwt-token');

    return {
        headers: { 
            ...headers,
            authorization: token ? `JWT ${token}`: ''
        }
    }
});

const httpLink = createHttpLink({
    uri: applicationLink,
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;
