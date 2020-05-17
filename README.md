# Halan

## Prequisiutes
Create the private key and the self-signed certificate

`$ openssl req -new -x509 -nodes -newkey rsa:4096 -keyout ./nginx/server.key -out ./nginx/server.crt`

## Running
### docker-compose
`$ docker-compose up`

Everything should be running fine. 
Now you can go to `https://localhost/graphql` to test it

### Helm
`$ helm install --generate-name ./helm`

Now you have to expose the service

`$ minikube service nginx`

## GraphQL 

```

query MyContests {
  me(key: "0000") {
    id
    email
    fullName
    contestsCount
    namesCount
    votesCount
    contests {
      id
      title
      code
      status
      description
      createdAt
      names {
        label
        createdBy {
          fullName
        }
      }
    
    }
    activities {
      ... on ContestType {
        header: title
      }
      ... on Name {
        header: label
			}
    }
  }
}

mutation AddNewContest($input: ContestInput!) {
  AddContest(input: $input) {
    id
    code
    status
    description
  }
} 

```

## TODO

1. Postgres and Mongo deployments to statefulsets
2. Kubernetes Jobs for database seeding
3. Ingres
4. Monitoring using Grafana and Prometheus
5. Improve logging by using ELK stack
