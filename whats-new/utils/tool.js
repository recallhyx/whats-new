/**
 * 对传入的数据进行处理，封装成一个对象数组
 * @param obj
 * @returns {Array}
 */
export const toCardDataWithOwner = obj => {
  let cardData = [];
  let edges = obj.data.repositoryOwner.repositories.edges;
  for (let i = 0, len = edges.length; i < len; i++) {
    let item = {};
    item.title = edges[i].node.name;
    item.stargazers = edges[i].node.stargazers.totalCount;
    item.avatarUrl = obj.data.repositoryOwner.avatarUrl;
    let releases = edges[i].node.releases.edges;
    if(releases.length === 0){
      item.version = "暂无数据";
      item.updatetime = "暂无数据";
      item.url = obj.data.repositoryOwner.url;
    }else{
      let node = edges[i].node.releases.edges[0].node;
      item.version = node.tag.name;
      item.url = node.url;
      item.updatetime = node.updatedAt;

    }
    cardData.push(item);
  }
  return cardData;
};
/**
 * 对传入的数据进行处理，封装成一个对象
 * @param obj
 * @returns {{}}
 */
export const toCardDataOnlyRepository = obj =>{
  let item = {};
  let repository = obj.data.repository;
  let edges = repository.releases.edges;
  item.title = repository.name;
  item.stargazers = repository.stargazers.totalCount;
  item.avatarUrl = repository.owner.avatarUrl;
  let releases = repository.releases.edges;
  if(releases.length === 0){
    item.version = "暂无数据";
    item.updatetime = "暂无数据";
    item.url = repository.owner.url;
  }else{
    item.version = edges[0].node.tag.name;
    item.updatetime = edges[0].node.updatedAt;
    item.url = edges[0].node.url;
  }

  return item;
};
