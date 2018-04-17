import {CONSTANT_URL,CONSTANT_TOKEN,CONSTANT_QueryInfoWithOwner,CONSTANT_QueryInfoRepository} from '../constant/constant'
import axios from 'axios'

// 分成两种请求方式是因为 QUERY_WITH_OWNER 需要内部员工的权限才能获取到信息
// 而 QUERY_REPOSITORIES 不需要内部员工的权限
export const  QueryInfoWithOwner = (owner,num,success,error)=>{
  let QUERY_WITH_OWNER = CONSTANT_QueryInfoWithOwner(owner,num);
  axios.post(CONSTANT_URL,{query:QUERY_WITH_OWNER},{headers: { Authorization: "bearer " + CONSTANT_TOKEN }})
    .then(res => {
      if(res.errors){
        error(res.errors.message);
        return;
      }
      if(res.data.repositoryOwner === null){
        error("No this RepositoryOwner");
        return;
      }
        success(res.data);
    }
      )
    .catch(err =>error(err))
};
export const QueryInfoRepository = (owner,repository,success,error)=>{
  let QUERY_REPOSITORIES =CONSTANT_QueryInfoRepository(owner,repository);
  axios.post(CONSTANT_URL,{query:QUERY_REPOSITORIES},{headers: { Authorization: "bearer " + CONSTANT_TOKEN }})
    .then(res =>{
      if(res.errors){
        error(res.errors.message);
        return;
      }
      if(res.data.repository === null){
        error("No this Repository");
        return;
      }
        success(res.data);
    }
      )
    .catch(err =>{
      error(err);
    })
};
