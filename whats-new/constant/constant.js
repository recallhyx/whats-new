export const CONSTANT_URL = "https://api.github.com/graphql";
// 填入自己的 Github Access_Token
export const CONSTANT_TOKEN = "";
export const CONSTANT_QueryInfoWithOwner = function (owner,num){
  return`query {
      repositoryOwner(login: "${owner}") {
      avatarUrl
      url
      repositories(orderBy: {field: STARGAZERS, direction: DESC}, first: ${num}) {
        totalCount
        edges {
          node {
            name
            stargazers {
              totalCount
            }
            releases(last: 1) {
              edges {
                node {
                  tag {
                    name
                  }
                  url
                  updatedAt
                }
              }
            }
          }
        }
      }
    }
  }`;
};
export const CONSTANT_QueryInfoRepository = function (owner,repository){
  return`query {
      repository(owner:"${owner}",name:"${repository}"){
        owner{
          avatarUrl
          url
        }
        stargazers{
          totalCount
        }
        name
        releases(last:1){
          edges{
            node{
              tag{
                name
              }
              url
              updatedAt
            }
          }
        }
      }
  }`;
};
export const CONSTANT_OTHER = {
  "webpack":"webpack",
  "electron":"electron",
  "nodejs":"node",
  "axios":"axios",
  "expressjs":"express",
  "mui-org":"material-ui",
  "Microsoft":"typeScript",
  "ElemeFE":"element",
  "lodash":"lodash"
};
